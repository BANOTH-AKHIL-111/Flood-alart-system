import psycopg2
import os

DATABASE_URL = os.getenv("DATABASE_PUBLIC_URL")

conn = psycopg2.connect(DATABASE_URL)
cursor = conn.cursor()
