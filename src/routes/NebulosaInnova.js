import React from "react";
import Navbar from "../components/Navbar";
import logo_master from "../assets/Logo_master.png";
import logo_intraemprendedor from "../assets/Logo_intraemprendedor.png";
import logo_trainer from "../assets/Logo_trainer.png";

export default function NebulosaInnova() {
  return (
    <div className="h-screen bg-[url('https://i.ibb.co/vZNfxqF/FONDO-1.png')]">
      <Navbar />
      <div className="grid overflow-hidden grid-cols-12 grid-rows-6 gap-2 py-8 ">
        <div className="flex justify-center box row-start-1 col-start-4 col-end-10">
          <div className="py-4 font-Delius text-2xl sm:text-7xl text-yellow-500 hover:text-sky-400">
            Nebulosa Innova
          </div>
        </div>
        <div className=""></div>
        <div className="pt-4 box row-start-2 row-end-5 col-start-3 col-end-5">
          <img
            className=" pt-4 hover:scale-125 cursor-pointer"
            src={logo_master}
            alt="Logo"
          />
        </div>
        <div className="pt-4 box row-start-2 row-end-5 col-start-6 col-end-8">
          <img
            className="pt-4 hover:scale-125 cursor-pointer"
            src={logo_intraemprendedor}
            alt="Logo"
          />
        </div>
        <div className="pt-4 box row-start-2 row-end-5 col-start-9 col-end-11">
          <img
            className="pt-4 hover:scale-125 cursor-pointer"
            src={logo_trainer}
            alt="Logo"
          />
        </div>
        <div className=""></div>
      </div>
    </div>
  );
}
