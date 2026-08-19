import { addPlayer } from '../SERVICES/players.js';

export async function createPlayer(req, res, next) {
     try {
    const player = await addPlayer()
    return res.json({ result: player }).status(201)
   
        
    } catch (error) {
        console.log(error);
        throw error
        
    }
}

