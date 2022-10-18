import React from "react";
import "../components/libreriaOrion.css";
import { history } from "../components/History";
import { useState } from "react";
import Modal from "../components/modal";
import Navbar from "../components/Navbar";
import volveMini from "../assets/volverMini.png";
import estrella from "../assets/Estrella.png";

export default function LibreriaOrion() {
  const [modalOn, setModalOn] = useState(false);
  const [choice, setChoice] = useState(false);

  const [numeroSlide, setNumeroSlide] = useState(0);
  const [descripcionSlide, setDescripcionSlide] = useState(0);

  const clicked = (a, b) => {
    setNumeroSlide(a);
    setModalOn(true);
    setDescripcionSlide(b);
  };
  function onClickHandler() {
    history.push("/Home");
  }

  return (
    <>
      <div className=" bg-gradient-to-r from-indigo-900 via-indigo-900 to-fuchsia-900 ">
        <Navbar></Navbar>
      </div>
      <section className="grid place-items-center min-h-screen bg-gradient-to-r from-indigo-900 via-fuchsia-900 to-indigo-900 ">
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
        <div className="absolute top-10 left-10 sm:top-10 sm:left-20 hover:scale-125 mt-10">
          <button>
            <img
              src={volveMini}
              onClick={onClickHandler}
              alt="image1"
              className="h-[40px] sm:h-[50px]"
            />
            <h1 className="font-bold font-['Montserrat'] pt-1 text-white">
              Inicio
            </h1>
          </button>
        </div>

        <div className="galaxy">
          <div className="estrella">
            <div className="event">
              <button id={2} onClick={() => clicked(2, "Slide 3")}>
                <img
                  src={estrella}
                  alt="image1"
                  className="h-[40px] sm:h-[50px]"
                />
              </button>
            </div>

            <div className="event">
              <button id={1} onClick={() => clicked(1, "Slide 2")}>
                <img
                  src={estrella}
                  alt="image1"
                  className="h-[40px] sm:h-[50px]"
                />
              </button>
            </div>
          </div>
          <div className="estrella">
            <div className="flex justify-center h-3/5 w-3/5">
              <button id={5} onClick={() => clicked(5, "Slide 6")}>
                <img
                  src={estrella}
                  alt="image1"
                  className="object-right-top h-[40px] sm:h-[50px] "
                />
              </button>
            </div>
            <div className="event justify-start">
              <button id={3} onClick={() => clicked(3, "Slide 4")}>
                <img
                  src={estrella}
                  alt="image1"
                  className="h-[40px] sm:h-[50px] mt-10 ml-10"
                />
              </button>

              <button id={4} onClick={() => clicked(4, "Slide 5")}>
                <img
                  src={estrella}
                  alt="image1"
                  className="h-[40px] sm:h-[50px]"
                />
              </button>

              <button id={0} onClick={() => clicked(0, "Slide 1")}>
                <img
                  src={estrella}
                  alt="image1"
                  className="h-[40px] sm:h-[50px]"
                />
              </button>
            </div>
          </div>
          <div className="estrella">
            <div className="event">
              <button id={7} onClick={() => clicked(7, "Slide 8")}>
                <img
                  src={estrella}
                  alt="image1"
                  className="h-[40px] sm:h-[50px]"
                />
              </button>
            </div>
            <button id={8} onClick={() => clicked(8, "Slide 9")}>
              <img
                src={estrella}
                alt="image1"
                className="h-[40px] sm:h-[50px]"
              />
            </button>
            <div className="event"></div>
            <button id={9} onClick={() => clicked(9, "Slide 10")}>
              <img
                src={estrella}
                alt="image1"
                className="h-[40px] sm:h-[50px]"
              />
            </button>
            <button id={10} onClick={() => clicked(10, "Slide 11")}>
              <img
                src={estrella}
                alt="image1"
                className="h-[40px] sm:h-[50px]"
              />
            </button>
          </div>
        </div>
      </section>
    </>
  );
}
