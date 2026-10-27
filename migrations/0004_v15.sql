CREATE TABLE IF NOT EXISTS testimonials (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  created_at TEXT NOT NULL,
  nickname TEXT NOT NULL,
  grade TEXT NOT NULL,
  quote TEXT NOT NULL,
  consent INTEGER NOT NULL DEFAULT 0 CHECK (consent IN (0,1)),
  status TEXT NOT NULL DEFAULT 'pending' CHECK (status IN ('pending','approved','rejected')),
  approved_at TEXT
);
CREATE INDEX IF NOT EXISTS idx_testimonials_public ON testimonials(status, created_at DESC);
CREATE TABLE IF NOT EXISTS media_upload_sessions (
  session_id TEXT PRIMARY KEY,
  upload_id TEXT NOT NULL,
  object_key TEXT NOT NULL UNIQUE,
  token_hash TEXT NOT NULL,
  created_at TEXT NOT NULL,
  updated_at TEXT NOT NULL,
  filename TEXT NOT NULL,
  mime_type TEXT NOT NULL,
  size_bytes INTEGER NOT NULL CHECK (size_bytes > 0),
  headline TEXT NOT NULL,
  subheadline TEXT NOT NULL,
  consent INTEGER NOT NULL CHECK (consent = 1),
  expected_parts INTEGER NOT NULL CHECK (expected_parts > 0),
  status TEXT NOT NULL DEFAULT 'uploading' CHECK (status IN ('uploading','completing','completed','aborted','failed'))
);
CREATE TABLE IF NOT EXISTS media_upload_parts (
  session_id TEXT NOT NULL REFERENCES media_upload_sessions(session_id) ON DELETE CASCADE,
  part_number INTEGER NOT NULL,
  etag TEXT NOT NULL,
  size_bytes INTEGER NOT NULL,
  PRIMARY KEY (session_id, part_number)
);
CREATE INDEX IF NOT EXISTS idx_upload_created ON media_upload_sessions(created_at);
CREATE TABLE IF NOT EXISTS safety_events (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  created_at TEXT NOT NULL,
  event_type TEXT NOT NULL,
  severity TEXT NOT NULL,
  participant_hash TEXT NOT NULL DEFAULT '',
  summary TEXT NOT NULL,
  reviewed INTEGER NOT NULL DEFAULT 0 CHECK (reviewed IN (0,1))
);
CREATE INDEX IF NOT EXISTS idx_safety_events_recent ON safety_events(created_at DESC);
