const Film = require("../models/film");

exports.createFilm = (req, res, next) => {
  delete req.body._id; //retire l'id (mongo les genere automatiquement)
  const film = new Film({ ...req.body }); //... recupere les elements du body
  film
    .save()
    .then(() => res.status(201).json({ message: "Film enregistré." }))
    .catch((error) => res.status(400).json({ error }));
};

exports.updateFilm = (req, res, next) => {
  Film.updateOne({ _id: req.params.id }, { ...req.body, _id: req.params.id })
    .then(() => res.status(200).json({ message: "Film modifié." }))
    .catch(() => res.status(400).json({ error }));
};

exports.getOneFilm = (req, res, next) => {
  Film.findOne({ _id: req.params.id })
    .then((film) => res.status(200).json({ film }))
    .catch((error) => res.status(400).json({ error }));
};

exports.getAllFilm = (req, res, next) => {
  Film.find()
    .then((films) => res.status(200).json({ films }))
    .catch((error) => res.status(400).json({ error }));
};

exports.deleteFilm = (req, res, next) => {
  Film.deleteOne({ _id: req.params.id })
    .then(() => res.status(200).json({ message: "Film supprimé." }))
    .catch((error) => res.status(400).json({ error }));
};
