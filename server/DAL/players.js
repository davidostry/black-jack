import client from '../DB/supabase.js';

const dbClient = client;

export async function createPlayer() {

    try {
        const { data, error } = await dbClient.from("players").insert({}).select().single()
        if (error) {
            throw error
        } return data


    } catch (error) {
        console.log(error);
        throw error;

    }
}

export async function getPlayer(x_player_id) {

    try {
        const { data, error } = await dbClient.from("players").select().eq("id",  x_player_id).single()
        if (error) {
            throw error  
        }
         return data
    } catch (error) {
        console.log(error);
        throw error;
    }
}
export async function updatePlayerChips(playerId, chips) {
    const { data, error } = await dbClient
        .from("players")
        .update({ chips: chips })
        .eq("id", playerId);

    if (error) {
        throw error;
    }

    return data;
}

