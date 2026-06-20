interface Env {
  DB: D1Database;
  TURNSTILE_SECRET_KEY: string;
  RESEND_API_KEY: string;
  CONTACT_TO?: string;
  CONTACT_FROM?: string;
}

type CloudflareRequest = Request & {
  cf?: {
    country?: string;
  };
};

type TurnstileResult = {
  success?: boolean;
};

const SHORT_FIELD_MAX = 200;
const PROBLEM_MAX = 5000;

function jsonResponse(body: Record<string, unknown>, status = 200) {
  return new Response(JSON.stringify(body), {
    status,
    headers: {
      "content-type": "application/json; charset=utf-8",
    },
  });
}

function trimToMax(value: unknown, maxLength: number) {
  if (typeof value !== "string") return "";
  return value.trim().slice(0, maxLength);
}

function normaliseOptional(value: unknown, maxLength: number) {
  const trimmed = trimToMax(value, maxLength);
  return trimmed.length > 0 ? trimmed : null;
}

function isEmailAddress(value: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

async function readBody(request: Request) {
  const contentType = request.headers.get("content-type") ?? "";

  if (contentType.includes("application/json")) {
    const body = await request.json();
    return body && typeof body === "object" && !Array.isArray(body)
      ? (body as Record<string, unknown>)
      : {};
  }

  const formData = await request.formData();
  return Object.fromEntries(
    Array.from(formData.entries()).map(([key, value]) => [
      key,
      typeof value === "string" ? value : "",
    ]),
  );
}

async function verifyTurnstile(env: Env, token: string, remoteIp: string | null) {
  const body = new URLSearchParams();
  body.set("secret", env.TURNSTILE_SECRET_KEY);
  body.set("response", token);
  if (remoteIp) body.set("remoteip", remoteIp);

  const response = await fetch("https://challenges.cloudflare.com/turnstile/v0/siteverify", {
    method: "POST",
    body,
  });

  if (!response.ok) return false;

  const result = (await response.json()) as TurnstileResult;
  return result.success === true;
}

export const onRequestPost: PagesFunction<Env> = async (context) => {
  try {
    const { request, env } = context;
    const body = await readBody(request);
    const honeypot = trimToMax(body.company_website, SHORT_FIELD_MAX);

    if (honeypot.length > 0) {
      return jsonResponse({ ok: true });
    }

    const token = String(body["cf-turnstile-response"] ?? "").trim();
    const ip = request.headers.get("CF-Connecting-IP");
    const verified = token.length > 0 && (await verifyTurnstile(env, token, ip));

    if (!verified) {
      return jsonResponse({ ok: false, error: "verification" }, 400);
    }

    const firstName = trimToMax(body.first_name, SHORT_FIELD_MAX);
    const lastName = trimToMax(body.last_name, SHORT_FIELD_MAX);
    const email = trimToMax(body.email, SHORT_FIELD_MAX).toLowerCase();
    const phone = normaliseOptional(body.phone, SHORT_FIELD_MAX);
    const organisation = normaliseOptional(body.organisation, SHORT_FIELD_MAX);
    const problem = trimToMax(body.problem, PROBLEM_MAX);

    if (!firstName || !lastName || !email || !isEmailAddress(email) || !problem) {
      return jsonResponse({ ok: false, error: "validation" }, 400);
    }

    const createdAt = new Date().toISOString();
    const userAgent = request.headers.get("user-agent");
    const country = (request as CloudflareRequest).cf?.country ?? null;

    await env.DB.prepare(
      `INSERT INTO submissions (
        created_at,
        first_name,
        last_name,
        email,
        phone,
        organisation,
        problem,
        ip,
        user_agent,
        country
      ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
    )
      .bind(
        createdAt,
        firstName,
        lastName,
        email,
        phone,
        organisation,
        problem,
        ip,
        userAgent,
        country,
      )
      .run();

    const to = env.CONTACT_TO || "hello@equibt.com";
    const from = env.CONTACT_FROM || "EQUIBT website <hello@equibt.com>";
    const fullName = `${firstName} ${lastName}`;
    const emailText = [
      "New enquiry from EQUIBT website",
      "",
      `Name: ${fullName}`,
      `Email: ${email}`,
      `Phone: ${phone ?? ""}`,
      `Organisation: ${organisation ?? ""}`,
      "",
      "Problem:",
      problem,
      "",
      `Submitted: ${createdAt}`,
      `IP: ${ip ?? ""}`,
      `Country: ${country ?? ""}`,
      `User agent: ${userAgent ?? ""}`,
    ].join("\n");

    try {
      const emailResponse = await fetch("https://api.resend.com/emails", {
        method: "POST",
        headers: {
          authorization: `Bearer ${env.RESEND_API_KEY}`,
          "content-type": "application/json",
        },
        body: JSON.stringify({
          from,
          to,
          reply_to: email,
          subject: `New enquiry from ${fullName}`,
          text: emailText,
        }),
      });

      if (!emailResponse.ok) {
        console.error("Contact notification email failed", await emailResponse.text());
      }
    } catch (error) {
      console.error("Contact notification email failed", error);
    }

    return jsonResponse({ ok: true });
  } catch (error) {
    console.error("Contact form handler failed", error);
    return jsonResponse({ ok: false, error: "server" }, 500);
  }
};
