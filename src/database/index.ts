import { Pool } from 'pg'
import dotenv from 'dotenv'
dotenv.config()

export const db = new Pool({
  connectionString: process.env.DB_CONNECTION,
  ssl: {
    rejectUnauthorized: false
  }
})
