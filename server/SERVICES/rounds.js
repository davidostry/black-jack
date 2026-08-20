import { createRound, getRound } from '../DAL/rounds.js';
import { getPlayer, updatePlayerChips } from '../DAL/players.js'
import { createError } from '../MIDDLEWARE/basic.js'

function getCard() {

    const cards = ["2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K", "A"]
    const suits = ["hearts", "diamonds", "clubs", "spades"]

    const card = Math.floor(Math.random() * cards.length)
    const suit = Math.floor(Math.random() * suits.length)
    return { rank: cards[card], suit: suits[suit] }
}


export async function addRound(playerId, bet) {

    try {
        const player = await getPlayer(playerId)
        const round = await getRound(playerId)

        if (!player) {
            throw createError(404, "id is not exist")
        }
        if (round) {
            throw createError(400, "player already in progress")
        }

        if (isNaN(bet) || bet <= 0) {
            throw createError(400, "invalid bet")
        }

        if (player.chips - bet < 0) {
            throw createError(400, "not enough money for this bet")
        }

        const chips = player.chips - bet
        await updatePlayerChips(playerId,chips)
        const  playerCards = [getCard(), getCard()]
        const dealerCards = [getCard(), getCard()]

        const newRound = {
            bet,
            playerId,
            playerCards,
            dealerCards,
            status: "in progress",
            createdAt: new Date()
        }
        const result = await createRound(newRound)
        console.log(result);
        
        const response = {
            roundId: result.id,
            playerCards,
            dealerCards,
            chips
        }
        return response
    } catch (error) {
        throw error
    }
}

export function calculate(cards) {
    let sum = 0;
    let aces = 0;

    cards.forEach(card => {
        if (["J", "Q", "K"].includes(card.rank)) {
            sum += 10;
        }
        else if (card.rank === "A") {
            sum += 11;
            aces++;
        }
        else {
            sum += Number(card.rank);
        }
    });


    while (sum > 21 && aces > 0) {
        sum -= 10;
        aces--;
    }

    return sum;
}



