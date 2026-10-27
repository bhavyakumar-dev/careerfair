ALTER TABLE leaderboard ADD COLUMN scores_json TEXT NOT NULL DEFAULT '{}';
ALTER TABLE leaderboard ADD COLUMN participant_key_hash TEXT;
ALTER TABLE leaderboard ADD COLUMN speech_score INTEGER NOT NULL DEFAULT 0 CHECK (speech_score BETWEEN 0 AND 100);
ALTER TABLE leaderboard ADD COLUMN editor_score INTEGER NOT NULL DEFAULT 0 CHECK (editor_score BETWEEN 0 AND 100);
ALTER TABLE leaderboard ADD COLUMN newsroom_score INTEGER NOT NULL DEFAULT 0 CHECK (newsroom_score BETWEEN 0 AND 100);
ALTER TABLE leaderboard ADD COLUMN games_score INTEGER NOT NULL DEFAULT 0 CHECK (games_score BETWEEN 0 AND 100);
ALTER TABLE leaderboard ADD COLUMN debate_score INTEGER NOT NULL DEFAULT 0 CHECK (debate_score BETWEEN 0 AND 100);
ALTER TABLE leaderboard ADD COLUMN interview_score INTEGER NOT NULL DEFAULT 0 CHECK (interview_score BETWEEN 0 AND 100);
CREATE UNIQUE INDEX IF NOT EXISTS idx_leaderboard_participant_key ON leaderboard(participant_key_hash) WHERE participant_key_hash IS NOT NULL;
CREATE TABLE IF NOT EXISTS feedback (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  created_at TEXT NOT NULL,
  category TEXT NOT NULL,
  rating INTEGER NOT NULL CHECK (rating BETWEEN 1 AND 5),
  message TEXT NOT NULL,
  contact TEXT NOT NULL DEFAULT '',
  consent INTEGER NOT NULL DEFAULT 0 CHECK (consent IN (0,1))
);
CREATE INDEX IF NOT EXISTS idx_feedback_created_at ON feedback(created_at DESC);
CREATE TABLE IF NOT EXISTS media_submissions (
  id TEXT PRIMARY KEY,
  token_hash TEXT NOT NULL,
  created_at TEXT NOT NULL,
  object_key TEXT NOT NULL,
  filename TEXT NOT NULL,
  mime_type TEXT NOT NULL,
  size_bytes INTEGER NOT NULL,
  headline TEXT NOT NULL,
  subheadline TEXT NOT NULL,
  consent INTEGER NOT NULL CHECK (consent IN (0,1)),
  transcription_status TEXT NOT NULL DEFAULT 'pending',
  analysis_status TEXT NOT NULL DEFAULT 'pending',
  transcription_provider TEXT NOT NULL DEFAULT '',
  analysis_provider TEXT NOT NULL DEFAULT '',
  analyzed_at TEXT
);
CREATE INDEX IF NOT EXISTS idx_media_created_at ON media_submissions(created_at DESC);
