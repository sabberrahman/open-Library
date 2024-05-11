import { getBook } from "../controller/book_controller.js";
import express from "express";

const router = express.Router()

router.get("/", getBook)

export default router;