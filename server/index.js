
import express from 'express'
import dotenv from 'dotenv'
const app = express()
import mongoose from 'mongoose'
import bookRoute from './route/book_route.js'
import userRoute from './route/user_route.js'
import cors from 'cors'

dotenv.config();
const port =    process.env.PORT || 4000 ; 

const url = process.env.url;

async function connectToMongo() {
  try {
    await mongoose.connect(url);
    console.log("Connected to MongoDB successfully!");
  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
   
  }
}

connectToMongo(); 

//midlewere 1. solve 2 diff port problem, 2. make data coming from body in json formate
app.use(cors());
app.use(express.json());

// defines routes
app.use('/book', bookRoute);
app.use('/user',userRoute)

app.get('/', (req, res) => {
  res.send('Hola world!')
})

app.listen(port, () => {
  console.log(`server is listening on port ${port}`)
})