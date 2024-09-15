import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';
import router from './Routes/todoRoutes.js';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;
const mongoURI = process.env.mongo_uri;

app.use(cors());
app.use(express.json());
app.get('/',(req,res)=>{
    res.send('Hello World');
});

app.use('/todos',router);

mongoose.connect(mongoURI).then(()=>{
    console.log("MongoDb connected");
})

app.listen(PORT,()=>{
    console.log(`server is running at http://localhost:${PORT}`);
})