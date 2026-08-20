import { MongoClient } from "mongodb";
import "dotenv/config";

const client = new MongoClient(process.env.MONGO_URL);


let db;


try {
    await client.connect();
    console.log("MongoDB connected");
} catch (err) {
    console.error("MongoDB connection failed:", err);
    process.exit(1);
}


db = client.db("rounds");
export default db;