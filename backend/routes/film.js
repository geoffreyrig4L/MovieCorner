const express = require("express");
const router = express.Router();
const filmCtrl = require("../controllers/film");

router.post("/", filmCtrl.createFilm);
router.get("/:id", filmCtrl.getOneFilm);
router.get("/", filmCtrl.getAllFilm);
router.put("/:id", filmCtrl.updateFilm);
router.delete("/:id", filmCtrl.deleteFilm);

module.exports = router;
