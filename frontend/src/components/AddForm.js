import "../styles/App.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlusSquare } from "@fortawesome/free-solid-svg-icons";

function AddForm() {
  var emoji = "👍";
  function setNote(e) {}

  return (
    <tr>
      <td>
        <input
          className="py-2  font-normal text-center text-gray-400 focus:outline-none focus:font-bold w-10/12"
          type="text"
          placeholder="Titre"
          name="titre"
          maxlength="32"
          autocomplete="off"
          required
        />
      </td>
      <td>
        <select
          className="focus:outline-none bg-white"
          value={emoji}
          onChange={(e) => setEmoji(e.target.value)}
        >
          <option className="" value="5*">
            💘
          </option>
          <option className="" value="4*">
            ❤
          </option>
          <option className="" value="3*">
            👍
          </option>
          <option className="" value="2*">
            😒
          </option>
          <option className="" value="*">
            💩
          </option>
        </select>
      </td>
      <td>
        <input
          className="py-2  font-normal text-center text-gray-400 focus:outline-none focus:font-bold  text-light"
          type="date"
          name="date_visionnage"
          required
        />
      </td>
      <td>
        <input
          className="py-2  font-normal text-center text-gray-400 focus:outline-none focus:font-bold  text-light"
          type="date"
          name="date_sortie"
          required
        />
      </td>
      <td>
        <input
          className="py-2  font-normal text-center text-gray-400 focus:outline-none focus:font-bold"
          type="text"
          placeholder="Nationalité"
          name="nationalite"
          maxlength="4"
          autocomplete="off"
          required
        />
      </td>
      <td>
        <button type="submit">
          <FontAwesomeIcon
            className="text-2xl hover:text-amber-400 pl-2"
            icon={faPlusSquare}
          />
        </button>
      </td>
    </tr>
  );
}

export default AddForm;
