import express from 'express' //ESM ecmascript modules
import router from './router'
const app=express()

//leer datos de formularios

app.use(express.json())  //habilitamos tratamiento de jsons en solicitudes http


app.use('/',router)
//routing



export default app