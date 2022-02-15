import "../styles/App.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlusSquare } from "@fortawesome/free-solid-svg-icons";

function AddForm() {
  return (
    <div className="mt-16 w-full">
      <form>
        <table className="m-auto  border-b-4 border-amber-200">
          <tr>
            <td>
              <input
                className="p-2 w-[350px] font-normal text-center text-gray-400 focus:outline-none focus:font-bold"
                type="text"
                placeholder="Titre"
                name="titre"
                maxlength="32"
                autocomplete="off"
                required
              />
            </td>
            <td>
              <select className="mx-16 focus:outline-none bg-white">
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
                className="py-2 w-36 font-normal text-center text-gray-400 focus:outline-none text-light focus:font-bold"
                type="date"
                name="date_visionnage"
                required
              />
            </td>
            <td>
              <input
                className="py-2 w-36 font-normal text-center text-gray-400 focus:outline-none text-light focus:font-bold"
                type="date"
                name="date_sortie"
                required
              />
            </td>
            <td>
              <input
                className="py-2 w-48 font-normal text-center text-gray-400 focus:outline-none focus:font-bold"
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
        </table>
      </form>
    </div>
  );
}

export default AddForm;
