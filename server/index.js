import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import mongoose, { mongo } from "mongoose";
import bodyParser from "body-parser";

import postRoutes from './routes/posts.js';
import userRoutes from './routes/user.js';

const app=express();
dotenv.config();

app.use(bodyParser.json({limit:"30mb", extended:"true"}));
app.use(bodyParser.urlencoded({limit:"30mb", extended:"true"}));
app.use(cors());
app.use('/posts',postRoutes);
app.use('/user',userRoutes);
const PORT=process.env.PORT || 5000;

mongoose.connect(process.env.CONNECTION_Url,{useNewUrlParser: true,useUnifiedTopology: true})
.then(()=>app.listen(PORT,()=>console.log(`Server running on port : ${PORT}`)))
.catch((error)=>console.log(error.message));



