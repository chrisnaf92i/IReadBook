import express from "express";
import router from "./Router/Router.js"

const port = process.env.PORT || 8000;

const app = express();

app.use(express.json());

app.use(router);


app.listen(port, console.log(`Lancement du serveur sur le port ${port}`));