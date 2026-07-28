import sqlite3
import os

# Path to your existing database
DB_PATH = os.path.join(os.path.dirname(__file__), "data", "users.db")

# Connect to the database
conn = sqlite3.connect(DB_PATH)
cur = conn.cursor()

# Add a new column named 'contact'
try:
    cur.execute("ALTER TABLE users ADD COLUMN contact TEXT;")
    conn.commit()
    print("✅ 'contact' column added successfully!")
except sqlite3.OperationalError as e:
    print("⚠️ Skipped —", e)

conn.close()
