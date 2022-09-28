import React from "react";
import "../components/libreriaOrion.css";

import { useState } from "react";
import Modal from "../components/modal";

export default function LibreriaOrion() {
  const [modalOn, setModalOn] = useState(false);
  const [choice, setChoice] = useState(false);
  const ref = useState();

  function clicked() {
    setModalOn(true);
  }

  return (
    <>
      {/* conditionally display the result of the action if user confirms  */}
      {choice && <div className="flex justify-center"></div>}

      {modalOn && <Modal setModalOn={setModalOn} setChoice={setChoice} />}
      <div className=" h-screen">
        <div className="constelation">
          <h1>Librería Orión</h1>
          <p>En cada estrella encontraras una sorpresa</p>
        </div>

        <div className="galaxy">
          <div className="estrella">
            <div className="event2"></div>
            <button ref={ref} id={0} onClick={clicked}>
              <div className="dot">
                <div className="theev">Nombre del evento - Fecha </div>
              </div>
            </button>

            <div className="event3">
              <button ref={ref} id={1} onClick={clicked}>
                <div className="dot">
                  <div className="theev">Nombre del evento - Fecha </div>
                </div>
              </button>
            </div>

            <div className="event5">
              <button ref={ref} id={2} onClick={clicked}>
                <div className="dot">
                  <div className="theev">Nombre del evento - Fecha </div>
                </div>
              </button>
            </div>
          </div>
          <div className="estrella">
            <div className="event5">
              <button ref={ref} id={3} onClick={clicked}>
                <div className="dentr1">
                  <div className="theev">Nombre del evento - Fecha </div>
                </div>
              </button>
            </div>
            <button ref={ref} id={4} onClick={clicked}>
              <div className="dot">
                <div className="theev">Nombre del evento - Fecha </div>
              </div>
            </button>
            <div className="event"></div>
            <button ref={ref} id={5} onClick={clicked}>
              <div className="dot">
                <div className="theev">Nombre del evento - Fecha </div>
              </div>
            </button>
            <div className="event"></div>
            <button ref={ref} id={6} onClick={clicked}>
              <div className="dot">
                <div className="theev">Nombre del evento - Fecha </div>
              </div>
            </button>
          </div>
          <div className="estrella">
            <div className="event4">
              <button ref={ref} id={7} onClick={clicked}>
                <div className="drent1">
                  <div className="theev">Nombre del evento - Fecha </div>
                </div>
              </button>
            </div>
            <button ref={ref} id={8} onClick={clicked}>
              <div className="dot">
                <div className="theev">Nombre del evento - Fecha </div>
              </div>
            </button>
            <div className="event6"></div>
            <button ref={ref} id={9} onClick={clicked}>
              <div className="dot">
                <div className="theev">Nombre del evento - Fecha </div>
              </div>
            </button>
            <div className="event2"></div>
            <button ref={ref} id={10} onClick={clicked}>
              <div className="dot">
                <div className="theev">Nombre del evento - Fecha </div>
              </div>
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
