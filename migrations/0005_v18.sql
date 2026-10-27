-- Migration 0005_v18.sql
-- Supports Open Mic v18: Admin Roles, User Management, and Live Stream State

CREATE TABLE IF NOT EXISTS admin_users (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  username TEXT NOT NULL UNIQUE,
  role TEXT NOT NULL CHECK(role IN ('admin','streaming','techteam','moderator')),
  password_hash TEXT NOT NULL,
  created_at TEXT DEFAULT (datetime('now')),
  created_by TEXT DEFAULT 'system'
);

INSERT OR IGNORE INTO admin_users (username, role, password_hash, created_by)
VALUES ('admin', 'admin', 'careers2026', 'system');

INSERT OR IGNORE INTO admin_users (username, role, password_hash, created_by)
VALUES ('streaming_lead', 'streaming', 'stream2026', 'system');

INSERT OR IGNORE INTO admin_users (username, role, password_hash, created_by)
VALUES ('tech_support', 'techteam', 'tech2026', 'system');

INSERT OR IGNORE INTO admin_users (username, role, password_hash, created_by)
VALUES ('moderator_one', 'moderator', 'mod2026', 'system');

CREATE INDEX IF NOT EXISTS idx_admin_users_role ON admin_users(role);
