const axios = require("axios").default;

function FilmItem({
  id,
  titre,
  date_visionnage,
  date_sortie,
  appreciation,
  nationalite,
}) {
  return axios
    .get("http/localhost:3091/api/film")
    .then(function (res) {
      if (res.ok) {
        return res.json();
      }
    })
    .catch(function (error) {
      return error;
    });
}

export default FilmItem;
