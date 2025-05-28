import express from 'express' //ESM ecmascript modules
import 'dotenv/config'
import router from './router'
import {connectDB} from './config/db'


const app=express()
connectDB()
//leer datos de formularios

app.use(express.json())  //habilitamos tratamiento de jsons en solicitudes http


app.use('/',router)
//routing



export default app