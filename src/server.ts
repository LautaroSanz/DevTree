import express from 'express'; //ESM  modules
import router from './router';
const app= express();

app.use('/api',router)


export default app