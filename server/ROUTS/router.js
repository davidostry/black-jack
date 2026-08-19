import express from 'express';
import { createPlayer } from '../CTRLS/players.js'

const router = express.Router()

router.post("/start-game", createPlayer)

// router.post("/start-round")

// router.post("/hit")

// router.post("/stand")

// router.get("/my-round")




export default router

