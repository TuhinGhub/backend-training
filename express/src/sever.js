import { log } from 'console';
import express from 'express';
const app=express();

const router = express.Router()

app.use('/hello', (req, res) => {
    res.status(200).json({message: "hellooooooo"})
})

app.listen(8000)
console.log('running on port 8000==========')