CREATE TABLE IF NOT EXISTS debate_rooms (
  room_code TEXT PRIMARY KEY,
  created_at TEXT NOT NULL
);
CREATE TABLE IF NOT EXISTS debate_messages (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  room_code TEXT NOT NULL REFERENCES debate_rooms(room_code) ON DELETE CASCADE,
  display_name TEXT NOT NULL,
  message TEXT NOT NULL,
  created_at TEXT NOT NULL
);
CREATE INDEX IF NOT EXISTS idx_debate_messages_room ON debate_messages(room_code,id);
