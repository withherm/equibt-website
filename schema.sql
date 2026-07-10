CREATE TABLE IF NOT EXISTS submissions (
  id           INTEGER PRIMARY KEY AUTOINCREMENT,
  created_at   TEXT NOT NULL,
  first_name   TEXT NOT NULL,
  last_name    TEXT NOT NULL,
  email        TEXT NOT NULL,
  phone        TEXT,
  organisation TEXT,
  problem      TEXT NOT NULL,
  user_agent   TEXT,
  country      TEXT
);
CREATE INDEX IF NOT EXISTS idx_submissions_created_at ON submissions (created_at);
