const mongoose = require("mongoose");

const filmSchema = mongoose.Schema({
  titre: { type: String, required: true },
  date_visionnage: { type: Date, required: true },
  date_sortie: { type: Date, required: true },
  appreciation: { type: String, required: true },
  nationalite: { type: String, required: true },
});

module.exports = mongoose.model("Film", filmSchema);
