import express from 'express'
import bodyParser from 'body-parser'
import cors from 'cors'
import mongoose from 'mongoose'
import dotenv, { config } from 'dotenv'
config({path:'./config.env'})
import registrationRoutes from './routes/registrationRoutes.js'


const app =express();


app.use(bodyParser.json({extended:true}));
app.use(bodyParser.urlencoded({extended:true}));
app.use(cors());


app.use('/api', registrationRoutes)


const CONNECTION_URL = process.env.MONGO_URL;
const PORT = process.env.PORT || 5000;

mongoose.connect(CONNECTION_URL, {useNewUrlParser: true, useUnifiedTopology:true})
.then(()=>console.log('Database connected Succesfully'))
.then(()=> app.listen(PORT,()=>console.log(`Server running on port :${PORT}`)))
.catch((error)=> console.log(error.message));