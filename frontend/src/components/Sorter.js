import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowAltCircleDown } from "@fortawesome/free-solid-svg-icons";
import { faArrowAltCircleUp } from "@fortawesome/free-solid-svg-icons";

function Sorter({ activeFilter, setActiveFilter, activeSens, setActiveSens }) {
  function setSens() {
    if (activeSens === "ascending") {
      setActiveSens("descending");
    } else {
      setActiveSens("ascending");
    }
  }
  return (
    <div>
      <select
        className="w-[250px] text-xl mb-10 py-2 px-2 text-center border-b-4 border-grey-200 focus:outline-none"
        value={activeFilter}
        onChange={(e) => setActiveFilter(e.target.value)}
      >
        <option value="date_visionnage" className="">
          Date de visionnage
        </option>
        <option value="date_sortie" className="">
          Date de sortie
        </option>
        <option value="titre" className="">
          Titre
        </option>
      </select>
      <button onClick={setSens} className="ml-6 hover:text-amber-400 text-2xl">
        {activeSens === "ascending" ? (
          <FontAwesomeIcon icon={faArrowAltCircleUp} />
        ) : (
          <FontAwesomeIcon icon={faArrowAltCircleDown} />
        )}
      </button>
    </div>
  );
}

export default Sorter;
