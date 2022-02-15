import Banner from "./Banner.js";
import FilmList from "./FilmList.js";
import "../styles/App.css";
import AddForm from "./AddForm.js";

function App() {
  return (
    <div className="App">
      <Banner />
      <AddForm />
      <FilmList />
    </div>
  );
}

export default App;
