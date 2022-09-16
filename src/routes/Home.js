import React from "react";
import { Canvas } from "@react-three/fiber";
import { Stars, CameraShake, Environment } from "@react-three/drei";
import * as THREE from "three";
import { Physics } from "@react-three/cannon";
import Navbar from "../components/Navbar";
import Planet from "../components/Planet";
import { OrbitControls, Sparkles } from "@react-three/drei";

export default function Home() {
  return (
    <div className="h-screen">
      {/*<Navbar />*/}
      <Canvas
        camera={{
          fov: 35,
          zoom: 1.2,
          near: 1,
          far: 10000,
          angle: 10,
          position: [0, 100, 20],
        }}
      >
        <OrbitControls />
        <Environment files="/cielo.hdr" ground={{ height: 30, radius: 700 }} />

        <Stars />
        <ambientLight intensity={0.5} />
        <spotLight position={[15, 30, 20]} angle={0.8} />
        <Physics>
          <Planet
            name="NebulosaInnova"
            position={[17.118, 5.562, 2]}
            texturePath="/fictionalInnova.jpg"
          />
          <Planet
            name="Supernova"
            position={[10.58, -14.56, -12]}
            texturePath="/fictionalSupernova.jpg"
          />
          <Planet
            name="Ideaverso"
            position={[-10.58, -14.56, -12]}
            texturePath="/fictionalIdeaverso.jpg"
          />
          <Planet
            name="LibreriaOrion"
            position={[-17.18, 5.56, 1]}
            texturePath="/fictionalOrion.jpg"
          />
          <Planet
            name="MeteoroGame"
            position={[0, 18, 12]}
            texturePath="/fictionalMeteoro.jpg"
          />
        </Physics>
      </Canvas>
    </div>
  );
}
