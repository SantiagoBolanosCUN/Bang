import React from "react";
import { Canvas } from "@react-three/fiber";
import { Stars, CameraShake, Environment } from "@react-three/drei";
import * as THREE from "three";
import { Physics } from "@react-three/cannon";
import Navbar from "../components/Navbar";
import Planet from "../components/Planet";
import Texto from "../components/Texto";

export default function Home() {
  return (
    <div className="h-screen">
      <Navbar />
      <Canvas
        camera={{
          fov: 35,
          zoom: 0.9,
          near: 1,
          far: 10000,
          angle: 10,
          position: [0, 100, 20],
        }}
      >
        {/*<OrbitControls/>*/}
        <Environment background>
          <mesh>
            <sphereGeometry args={[50, 100, 100]} />
            <meshBasicMaterial color="#44264E" side={THREE.BackSide} />
          </mesh>
        </Environment>

        <Stars />
        <ambientLight intensity={0.5} />
        <spotLight position={[15, 30, 20]} angle={0.8} />
        <Physics>
          <Planet
            name="NebulosaInnova"
            position={[17.118, 5.562, 2]}
            positionTexto={[14.118, 3.562, 10]}
            texturePath="/fictional1.jpg"
          />
          <Planet
            name="Supernova"
            position={[10.58, -14.56, -12]}
            positionTexto={[7.58, -14.56, -4]}
            texturePath="/fictional1.jpg"
          />
          <Planet
            name="Ideaverso"
            position={[-10.58, -14.56, -12]}
            positionTexto={[-13.58, -14.56, -4]}
            texturePath="/fictional1.jpg"
          />
          <Planet
            name="LibreriaOrion"
            position={[-17.18, 5.56, 1]}
            positionTexto={[-20.118, 5.562, 9]}
            texturePath="/fictional1.jpg"
          />
          <Planet
            name="MeteoroGame"
            position={[0, 18, 12]}
            positionTexto={[-3, 18, 20]}
            texturePath="/fictional1.jpg"
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
