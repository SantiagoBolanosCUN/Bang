import React from "react";
import Navbar from "../components/Navbar";
import { VideoGrid } from "react-fb-image-video-grid";
import { ImageGrid } from "react-fb-image-video-grid";

export default function Ideaverso() {
  return (
    <div className="h-screen bg-[url('https://i.ibb.co/vZNfxqF/FONDO-1.png')]">
      <Navbar />
      <div className="grid overflow-hidden grid-cols-12 grid-rows-6 gap-2">
        <div className="flex justify-center box row-start-2 col-start-4 col-end-10">
          <div>ideaverso</div>
        </div>
        <div className="box row-start-3 row-end-5 col-start-3 col-end-11">
          2
        </div>
      </div>
    </div>
  );
}
