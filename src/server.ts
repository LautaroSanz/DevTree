import express from 'express' //ESM ecmascript modules
import router from './router'
const app=express()

app.use('/',router)
//routing



export default app