import React from "react";
import "../components/libreriaOrion.css";

import { useState } from "react";
import Modal from "../components/modal";
import ModalInicio from "../components/ModalInicio";
import Navbar from "../components/Navbar";

export default function LibreriaOrion() {
  const [modalOn, setModalOn] = useState(false);
  const [choice, setChoice] = useState(false);
  const [modalOn2, setModalOn2] = useState(true);
  const [choice2, setChoice2] = useState(true);
  const [numeroSlide, setNumeroSlide] = useState(0);
  const [descripcionSlide, setDescripcionSlide] = useState(0);

  const clicked = (a, b) => {
    setNumeroSlide(a);
    setModalOn(true);
    setDescripcionSlide(b);
  };

  return (
    <div className="constelation h-screen">
      {/* conditionally display the result of the action if user confirms  */}
      {choice && <div className="flex justify-center"></div>}

      {modalOn && (
        <Modal
          setModalOn={setModalOn}
          setChoice={setChoice}
          numeroSlide={numeroSlide}
          descripcionSlide={descripcionSlide}
        />
      )}
      {choice && <div className="flex justify-center"></div>}

      {modalOn2 && (
        <ModalInicio setModalOn={setModalOn2} setChoice={setChoice2} />
      )}

      <Navbar></Navbar>

      <div className="galaxy">
        <div className="estrella">
          <div className="event"></div>
          <button id={0} onClick={() => clicked(0, "Slide 1")}>
            <div className="dot">
              <div className="theev">evento 1 - Fecha </div>
            </div>
          </button>

          <div className="event">
            <button id={1} onClick={() => clicked(1, "Slide 2")}>
              <div className="dot">
                <div className="theev">evento 2 - Fecha </div>
              </div>
            </button>
          </div>

          <div className="event">
            <button id={2} onClick={() => clicked(2, "Slide 3")}>
              <div className="dot">
                <div className="theev">evento 3 - Fecha </div>
              </div>
            </button>
          </div>
        </div>
        <div className="estrella">
          <div className="event">
            <button id={3} onClick={() => clicked(3, "Slide 4")}>
              <div className="dot">
                <div className="theev">evento 4 - Fecha </div>
              </div>
            </button>
          </div>
          <button id={4} onClick={() => clicked(4, "Slide 5")}>
            <div className="dot">
              <div className="theev">evento 5 - Fecha </div>
            </div>
          </button>
          <div className="event"></div>
          <button id={5} onClick={() => clicked(5, "Slide 6")}>
            <div className="dot">
              <div className="theev">Nombre del evento - Fecha </div>
            </div>
          </button>
          <div className="event"></div>
          <button id={6} onClick={() => clicked(6, "Slide 7")}>
            <div className="dot">
              <div className="theev">Nombre del evento - Fecha </div>
            </div>
          </button>
        </div>
        <div className="estrella">
          <div className="event">
            <button id={7} onClick={() => clicked(7, "Slide 8")}>
              <div className="dot">
                <div className="theev">Nombre del evento - Fecha </div>
              </div>
            </button>
          </div>
          <button id={8} onClick={() => clicked(8, "Slide 9")}>
            <div className="dot">
              <div className="theev">Nombre del evento - Fecha </div>
            </div>
          </button>
          <div className="event"></div>
          <button id={9} onClick={() => clicked(9, "Slide 10")}>
            <div className="dot">
              <div className="theev">Nombre del evento - Fecha </div>
            </div>
          </button>
          <div className="event"></div>
          <button id={10} onClick={() => clicked(10, "Slide 11")}>
            <div className="dot">
              <div className="theev">Nombre del evento - Fecha </div>
            </div>
          </button>
        </div>
      </div>
    </div>
  );
}
