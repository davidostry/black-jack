import db from '../DB/mongo.js'
import { ObjectId } from 'mongodb'

const collection = db.collection("rounds");

export async function createRound(newRound) {
    const inserted = await collection.insertOne(newRound)

    const id = inserted.insertedId



    return { ...newRound, id }
}
