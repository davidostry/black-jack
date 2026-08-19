import client from '../DB/supabase.js';

const dbClient = client;

export async function createPlayer() {

    try {
        const { data, error } = await dbClient.from("players").insert({}).select().single()
        if (error) {
            throw error
        } else return data


    } catch (error) {
        console.log(error);
        throw error;

    }
}

