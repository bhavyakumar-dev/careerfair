CREATE TABLE IF NOT EXISTS settings (
  key TEXT PRIMARY KEY,
  value TEXT NOT NULL,
  updated_at TEXT NOT NULL
);

CREATE TABLE IF NOT EXISTS request_logs (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  created_at TEXT NOT NULL,
  task TEXT NOT NULL,
  provider TEXT NOT NULL,
  outcome TEXT NOT NULL,
  latency_ms INTEGER NOT NULL DEFAULT 0,
  mode TEXT NOT NULL DEFAULT 'auto'
);

CREATE TABLE IF NOT EXISTS leaderboard (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  nickname TEXT NOT NULL,
  grade TEXT NOT NULL,
  score INTEGER NOT NULL CHECK (score BETWEEN 0 AND 100),
  fluency INTEGER NOT NULL CHECK (fluency BETWEEN 0 AND 100),
  clarity INTEGER NOT NULL CHECK (clarity BETWEEN 0 AND 100),
  consent INTEGER NOT NULL DEFAULT 0 CHECK (consent IN (0,1)),
  created_at TEXT NOT NULL
);

CREATE INDEX IF NOT EXISTS idx_request_logs_created_at ON request_logs(created_at DESC);
CREATE INDEX IF NOT EXISTS idx_leaderboard_scores ON leaderboard(score DESC, created_at ASC);
