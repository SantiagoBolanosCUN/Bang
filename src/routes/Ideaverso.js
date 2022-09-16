import React from "react";
import Navbar from "../components/Navbar";
import { VideoGrid } from "react-fb-image-video-grid";
import { ImageGrid } from "react-fb-image-video-grid";

export default function Ideaverso() {
  return (
    <div className="bg-contain h-screen bg-gray-900">
      <Navbar />

      <div class="grid overflow-hidden grid-cols-12 grid-rows-6 gap-2">
        <div className="flex justify-center">
          <div class="text-white text-6xl box row-start-1 col-start-4 col-end-10">
            Ideaverso
          </div>
        </div>
        <div class="box row-start-2 row-end-4 col-start-3 col-end-11">2</div>
      </div>
    </div>
  );
}
