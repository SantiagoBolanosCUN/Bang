import React from "react";
import Navbar from "../components/Navbar";
import logo_master from "../assets/Logo_master.png";
import logo_intraemprendedor from "../assets/Logo_intraemprendedor.png";
import logo_trainer from "../assets/Logo_trainer.png";
import planetaMini from "../assets/planetaMini.png";
import { history } from "../components/History";
import Certificaciones from "../assets/Certificaciones.png";

export default function NebulosaInnova() {
  function onClickHandler() {
    history.push("/Home");
  }
  return (
    <section className="grid place-items-center min-h-screen bg-gradient-to-r from-indigo-900 via-fuchsia-900 to-indigo-900">
      <div className="absolute top-10 left-10 sm:top-10 sm:left-20 hover:scale-125">
        <button>
          <img
            src={planetaMini}
            onClick={onClickHandler}
            alt="image1"
            className="h-[40px] sm:h-[50px]"
          />
          <h1 className="font-bold font-['Montserrat'] pt-1 text-white">
            Inicio
          </h1>
        </button>
      </div>

      <div className="grid place-items-center  grid-cols-1 sm:grid-cols-3">
        <div className="m-8">
          <img
            className=" pt-4  cursor-pointer h-[100px] sm:h-[250px] "
            src={logo_intraemprendedor}
            alt="Logo"
          />
          <div className="flex justify-center pt-3">
            <button class="m-3 border border-white text-white  py-1.5 px-2 rounded-full inline-flex items-center">
              <a className="font-['Montserrat'] border-none rounded-full py-1.5 px-8 font-semibold bg-gradient-to-r from-indigo-500 to-purple-500 hover:from-pink-500 hover:to-yellow-500">
                Descubrir
              </a>
            </button>
          </div>
        </div>
        <div className="m-8">
          <img
            className="pt-4 h-[100px] sm:h-[250px]"
            src={logo_trainer}
            alt="Logo"
          />
          <div className="flex justify-center pt-3">
            <button class="m-3 border border-white text-white  py-1.5 px-2 rounded-full inline-flex items-center">
              <a className="font-['Montserrat'] border-none rounded-full py-1.5 px-8 font-semibold bg-gradient-to-r from-indigo-500 to-purple-500 hover:from-pink-500 hover:to-yellow-500">
                Descubrir
              </a>
            </button>
          </div>
        </div>
        <div className="m-8">
          <img
            className="pt-4 h-[100px] sm:h-[250px]"
            src={logo_master}
            alt="Logo"
          />
          <div className="flex justify-center pt-3">
            <button class="m-3 border border-white text-white  py-1.5 px-2 rounded-full inline-flex items-center">
              <a className="font-['Montserrat'] border-none rounded-full py-1.5 px-8 font-semibold bg-gradient-to-r from-indigo-500 to-purple-500 hover:from-pink-500 hover:to-yellow-500">
                Descubrir
              </a>
            </button>
          </div>
        </div>
      </div>

      {/* <div className="grid overflow-hidden grid-cols-12 grid-rows-6 gap-2 py-8 ">
        <div className="flex justify-center box row-start-1 col-start-4 col-end-10">
          <div className="py-4 font-Delius text-2xl sm:text-7xl text-yellow-500 hover:text-sky-400">
            Nebulosa Innova
          </div>
        </div>
        <div className=""></div>
        <div className="pt-4 box row-start-2 row-end-5 col-start-3 col-end-5">
          <img
            className=" pt-4 hover:scale-125 cursor-pointer"
            src={logo_intraemprendedor}
            alt="Logo"
          />
        </div>
        <div className="pt-4 box row-start-2 row-end-5 col-start-6 col-end-8">
          <img className="pt-4 " src={logo_trainer} alt="Logo" />
        </div>
        <div className="pt-4 box row-start-2 row-end-5 col-start-9 col-end-11">
          <img className="pt-4  " src={logo_master} alt="Logo" />
        </div>
        <div className=""></div>
      </div> */}
    </section>
  );
}
