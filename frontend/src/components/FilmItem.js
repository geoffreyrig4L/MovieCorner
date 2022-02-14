function FilmItem(
  { id, titre, date_visionnage, date_sortie, appreciation, nationalite },
  cpt
) {
  return (
    <tr key={id} className={cpt % 2 === 0 ? "bg-gray-100" : "bg-white"}>
      <td className="py-2  font-normal">{titre}</td>
      <td className="py-2 ">{appreciation}</td>
      <td className="py-2  font-light">{date_visionnage}</td>
      <td className="py-2  font-light">{date_sortie}</td>
      <td className="py-2  font-light">{nationalite}</td>
    </tr>
  );
}

export default FilmItem;
