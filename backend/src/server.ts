import cors from 'cors';
import 'dotenv/config';
import express from 'express'; //ESM  modules
import { corsConfig } from './config/cors';
import { connectDB } from './config/db';
import router from './router';

const app= express();


// Leer datos de formularios
connectDB()


app.use(cors(corsConfig))

app.use(express.json())

app.use('/',router)


export default app