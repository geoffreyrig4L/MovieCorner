import logo from "../assets/logo.png";

function Banner() {
  return (
    <div className="flex justify-between items-center bg-amber-400 shadow-lg">
      <img src={logo} alt="logo" className="h-20 m-6" />
      <h1 className="text-3xl font-bold mr-14">Titre</h1>
    </div>
  );
}

export default Banner;
