
import express from 'express'
import dotenv from 'dotenv'
const app = express()
import mongoose from 'mongoose'

dotenv.config();
const port =    process.env.PORT || 4000 ; 

const uri = "mongodb+srv://sabber:wPQqZ2KLGcT8AjOM@cluster0.0zldvew.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

async function connectToMongo() {
  try {
    await mongoose.connect(uri);
    console.log("Connected to MongoDB successfully!");
  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
   
  }
}

connectToMongo(); 

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`server is listening on port ${port}`)
})