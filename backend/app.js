const express = require("express");
const res = require("express/lib/response");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");

const filmRoutes = require("./routes/film");

// login : jojoka | jojo_Lesuperdev99
mongoose
  .connect(
    "mongodb+srv://jojoka:jojo_Lesuperdev99@cluster0.6ydjw.mongodb.net/Cluster0?retryWrites=true&w=majority",
    { useNewUrlParser: true, useUnifiedTopology: true }
  )
  .then(() => console.log("Connexion à MongoDB réussie !"))
  .catch(() => console.log("Echec de la connexion à MongoDB !"));

const app = express();

app.use(express.json()); //permet d intercepter toute les requetes qui contiennent du JSON
//indispensable pour faire des requete post

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content, Accept, Content-Type, Authorization"
  );
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PUT, DELETE, PATCH, OPTIONS"
  );
  next();
});

app.use(bodyParser.json());

app.use("/api/film", filmRoutes);

module.exports = app;
