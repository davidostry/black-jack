import { addRound } from '../SERVICES/rounds.js';

export async function createRound(req, res, next) {

    try {
        const { bet } = req.body
        const playerId = req.header("player_id")
        const round = await addRound(playerId, bet)

        
        return res.status(201).json({ result: round })

    } catch (error) {
        next(error)

    }
}