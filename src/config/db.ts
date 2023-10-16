import dotenv from 'dotenv'
import { Client } from 'pg'

dotenv.config();

const dbClient = new Client({    
    host: process.env.DB_HOST,
    port: Number(process.env.DB_PORT),
    database: process.env.DB_DATABASE,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD    
});

export default dbClient;
