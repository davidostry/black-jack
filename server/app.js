import express from 'express'
import dotenv from 'dotenv/config'
import cors from 'cors'
import {logger, errorHandeling} from './MIDDLEWARE/basic.js'
import router from './ROUTS/router.js'

const PORT = process.env.PORT

const app = express()

app.use(cors())

app.use(express.json())

app.use(logger)

app.use("blackJack", router)


app.use(errorHandeling)

app.listen(PORT, (e)=>{
    if (e) return console.log(e);
    console.log(`server is runing on http://localhost:${PORT}`);  
})