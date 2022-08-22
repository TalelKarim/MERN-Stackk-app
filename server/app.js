import express, { application } from 'express';
import mongoose  from 'mongoose';
import dotEnv from 'dotenv';
import cors from 'cors';
import  cardRouter from './routes/card.route.js';
import path from 'path'
import fs from 'fs'
import { dirname } from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

dotEnv.config();
const app = express();

app.use(express.json());
app.use(cors());

app.use('/cards', cardRouter);
app.use('/assets', express.static(path.join(__dirname, 'assets')))
const port = process.env.PORT || 8800
// Database connection 
mongoose.connect(process.env.CONNNECTION_STRING)
.then( () => {
    app.listen(port, (req,res) => {
        console.log(`app listening on port ${port}`)
    })
} )
.catch( (err) => {
    console.log(err.stack)
    process.exit(1)
})


