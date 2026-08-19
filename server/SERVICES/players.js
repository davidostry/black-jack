import {createPlayer} from '../DAL/players.js';

export async function addPlayer(){
    return await createPlayer()
}