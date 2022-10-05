import React from "react";
import Navbar from "../components/Navbar";
import { VideoGrid } from "react-fb-image-video-grid";
import { ImageGrid } from "react-fb-image-video-grid";

export default function Ideaverso() {
  return (
    <div className="min-h-screen bg-ideaverso">
      <Navbar />

      <div className="grid overflow-hidden grid-cols-12 grid-rows-6 gap-2">
        <div className="flex justify-center pt-5 box row-start-1 col-start-4 col-end-10">
          <div className="font-Delius text-2xl sm:text-5xl text-white hover:text-sky-400">
            IDEAVERSO
          </div>
        </div>
        <div className="flex justify-center box row-start-3 row-end-5 col-start-3 col-end-11">
          <div className="box-content h-32 w-32 bg-[url('https://i.ibb.co/vZNfxqF/FONDO-1.png')]"></div>
        </div>
      </div>
    </div>
  );
}
