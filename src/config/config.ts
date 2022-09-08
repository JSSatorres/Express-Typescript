import dotenv from 'dotenv'

dotenv.config()

export const PORT = (process.env.PORT != null) || 4000
