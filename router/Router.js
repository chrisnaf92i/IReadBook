import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import { createBook, deleteOneBook, getAllBook, getOneBook, updateOneBook } from "../controller/Book.js";

dotenv.config();

const router = express.Router();
      
mongoose.connect(process.env.MONGODB,
  { useNewUrlParser: true,
    useUnifiedTopology: true })
  .then(() => console.log('Connexion à MongoDB réussie !'))
  .catch(() => console.log('Connexion à MongoDB échouée !'));

router.get("/", (req, res) => {
    res.json({message:"Bienvenu sur l'api de I Read Book"});
});

router.post("/api/book", createBook);

router.get("/api/book", getAllBook);

router.get("/api/book/:id", getOneBook);

router.put("/api/book/:id", updateOneBook);

router.delete("/api/book/:id", deleteOneBook);



export default router;