import 'dotenv/config';
import express from 'express'; //ESM  modules
import { connectDB } from './config/db';
import router from './router';
const app= express();

// Leer datos de formularios
connectDB()

app.use(express.json())

app.use('/',router)


export default app