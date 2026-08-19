import { createClient } from "@supabase/supabase-js";
import dotenv from 'dotenv/config'

const client = createClient(
    process.env.SUPABASE_URL,
    process.env.SUPABASE_key
)

console.log("supabase connected");

export default client;
