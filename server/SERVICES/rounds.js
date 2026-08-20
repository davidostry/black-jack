import { createRound } from '../DAL/rounds.js';
import { getPlayer } from '../DAL/players.js'
import { createError } from '../MIDDLEWARE/basic.js'

function getCard() {

    const cards = ["2", "3", "4", "5", "6", "7", "8", "9", "10", "j", "q", "k", "a"]
    const suits = ["hearts", "diamonds", "clubs", "spades"]

    const card = Math.floor(Math.random() * cards.length)
    const suit = Math.floor(Math.random() * suits.length)
    return {rank: cards[card], suit: suits[suit]}
}

export async function addRound(playerId, bet) {

    try {
        const player = await getPlayer(playerId)


        if (!player) {
            throw createError(404, "id is not exist")
        }
        if (player.status === "in_progress") {
            throw createError(400, "player already in progress")
        }

        if (isNaN(bet) || bet <= 0) {
            throw createError(400, "invalid bet")
        }

        if (player.chips - bet < 0) {
            throw createError(400, "not enough money for this bet")
        }

        const newRound = {
            bet,
            playerId,
            playerCards: getCard(),
            dealerCards: getCard(),
            status: "in progress",
            createdAt: new Date
        }
        return await createRound(newRound)





    } catch (error) {
        throw error
    }
}

