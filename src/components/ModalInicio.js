import "../components/modalInicio.css";
import { history } from "./History";
import planetaModal from "../assets/planetaModal.png";
import planetaMini from "../assets/planetaMini.png";
import Navbar from "./Navbar";

const ModalInicio = ({ setModalOn, setChoice }) => {
  const handleOKClick = () => {
    history.push(`/`);
  };
  const handleOKClick2 = () => {
    setChoice(false);
    setModalOn(false);
  };
  return (
    <div className="   bg-zinc-200 opacity-90 fixed inset-0 z-50   ">
      <div className="relative h-screen justify-center items-center bg-white border-4 border-sky-500 ">
        <div className="contenedorImg h-screen text-white-400">
          <Navbar></Navbar>
          <img
            src={planetaMini}
            alt="image1"
            className=" ml-5"
            style={{ width: "5%" }}
          ></img>
          <div className="contenedor">
            <img src={planetaModal} alt="image1" style={{ width: "15%" }}></img>
            <div className=" font-mono mt-20">
              Por millones de años las constelaciones han ayudado a miles de
              civilizaciones entender el universo y comprender que todos estamos
              conectados.
            </div>
            <div className=" font-mono font-bold mt-2">
              ¡Conéctate con el conocimiento que tiene nuestra constelación!
            </div>
            <button type="button" onClick={handleOKClick2}>
              <svg
                aria-hidden="true"
                className="buttonImg"
                xmlns="../assets/buttonModal.png"
              ></svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModalInicio;
