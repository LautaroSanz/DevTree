import express from 'express' //ESM ecmascript modules
import cors from 'cors'
import 'dotenv/config'
import router from './router'
import {connectDB} from './config/db'
import { corsConfig } from './config/cors'


const app=express()
connectDB()
//leer datos de formularios


//cors

app.use(cors(corsConfig))

app.use(express.json())  //habilitamos tratamiento de jsons en solicitudes http


app.use('/',router)
//routing



export default app