import React from "react";
import { Canvas } from "@react-three/fiber";
import { Stars, CameraShake, Environment } from "@react-three/drei";
import * as THREE from "three";
import { Physics } from "@react-three/cannon";
import Navbar from "../components/Navbar";
import Planet from "../components/Planet";
import { OrbitControls, Sparkles } from "@react-three/drei";
import Texto from "../components/Texto";

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
            positionTexto={[14.118, 3.562, 10]}
          />
          <Planet
            name="Supernova"
            position={[10.58, -14.56, -12]}
            texturePath="/fictionalSupernova.jpg"
            positionTexto={[7.58, -14.56, -4]}
          />
          <Planet
            name="Ideaverso"
            position={[-10.58, -14.56, -12]}
            texturePath="/fictionalIdeaverso.jpg"
            positionTexto={[-13.58, -14.56, -4]}
          />
          <Planet
            name="LibreriaOrion"
            position={[-17.18, 5.56, 1]}
            texturePath="/fictionalOrion.jpg"
            positionTexto={[-20.118, 5.562, 9]}
          />
          <Planet
            name="MeteoroGame"
            position={[0, 18, 12]}
            texturePath="/fictionalMeteoro.jpg"
            positionTexto={[-3, 18, 20]}
          />
        </Physics>

        <CameraShake
          maxYaw={0.05} // Max amount camera can yaw in either direction
          maxPitch={0.05} // Max amount camera can pitch in either direction
          maxRoll={0.05} // Max amount camera can roll in either direction
          yawFrequency={0} // Frequency of the the yaw rotation
          pitchFrequency={0} // Frequency of the pitch rotation
          rollFrequency={0.3} // Frequency of the roll rotation
          intensity={1} // initial intensity of the shake
          // if decay = true this is the rate at which intensity will reduce at />
        />
      </Canvas>
    </div>
  );
}
