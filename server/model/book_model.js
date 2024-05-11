import mongoose from "mongoose";

const bookSchema = mongoose.Schema({
    name : String,
    title: String,
    price: Number,
    catagory: String,
    image: String,
})

const Book = mongoose.model("book", bookSchema);

export default Book;