import { films } from "../datas/Datas.js";
import FilmItem from "./FilmItem.js";
import Sorter from "./Sorter.js";
import { useState } from "react";

function FilmList() {
  const [activeFilter, setActiveFilter] = useState("date_visionnage");
  const [activeSens, setActiveSens] = useState("descending");

  function compare(a, b) {
    if (activeSens === "ascending") {
      switch (activeFilter) {
        case "date_visionnage":
          if (a.date_visionnage < b.date_visionnage) {
            return -1;
          }
          if (a.date_visionnage > b.date_visionnage) {
            return 1;
          }
          return 0;
        case "date_sortie":
          if (a.date_sortie < b.date_sortie) {
            return -1;
          }
          if (a.date_sortie > b.date_sortie) {
            return 1;
          }
          return 0;
        case "titre":
          if (a.titre < b.titre) {
            return -1;
          }
          if (a.titre > b.titre) {
            return 1;
          }
          return 0;
        default:
          alert(
            `On tente de trié le tableau avec un champ que les films ne possèdent pas`
          );
      }
    } else {
      switch (activeFilter) {
        case "date_visionnage":
          if (a.date_visionnage < b.date_visionnage) {
            return 1;
          }
          if (a.date_visionnage > b.date_visionnage) {
            return -1;
          }
          return 0;
        case "date_sortie":
          if (a.date_sortie < b.date_sortie) {
            return 1;
          }
          if (a.date_sortie > b.date_sortie) {
            return -1;
          }
          return 0;
        case "titre":
          if (a.titre < b.titre) {
            return 1;
          }
          if (a.titre > b.titre) {
            return -1;
          }
          return 0;
        default:
          alert(
            `On tente de trié le tableau avec un champ que les films ne possèdent pas`
          );
      }
    }
  }

  const filmsSorted = films.sort(compare);

  return (
    <div className="mt-16">
      <Sorter
        activeFilter={activeFilter}
        setActiveFilter={setActiveFilter}
        activeSens={activeSens}
        setActiveSens={setActiveSens}
      />
      <table className="border border-black-500 m-auto">
        <thead className=" bg-gray-100 my-10 h-10">
          <th className="font-bold w-[400px]">Titre</th>
          <th className="font-bold w-40">Appréciation</th>
          <th className="font-bold w-44">Date de visionnage</th>
          <th className="font-bold w-44">Date de sortie</th>
          <th className="font-bold w-56">Nationalité</th>
        </thead>
        <tbody>
          {filmsSorted.map(
            ({
              id,
              titre,
              date,
              date_visionnage,
              date_sortie,
              appreciation,
              nationalite,
            }) => (
              <FilmItem
                id={id}
                titre={titre}
                date={date}
                date_visionnage={date_visionnage}
                date_sortie={date_sortie}
                appreciation={appreciation}
                nationalite={nationalite}
              />
            )
          )}
        </tbody>
      </table>
    </div>
  );
}

export default FilmList;
