import express from 'express';
import { createPlayer } from '../CTRLS/players.js'
import {createRound} from '../CTRLS/rounds.js'

const router = express.Router()

router.post("/start-game", createPlayer)

router.post("/start-round", createRound)

// router.post("/hit")

// router.post("/stand")

// router.get("/my-round")




export default router

