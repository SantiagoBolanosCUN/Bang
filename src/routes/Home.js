import React, { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Stars } from "@react-three/drei";
import * as THREE from "three";
import { Physics } from "@react-three/cannon";
import Planet from "../components/Planet";
import { OrbitControls } from "@react-three/drei";
import { LayerMaterial, Depth } from "lamina";

function Bg() {
  const mesh = useRef();
  useFrame((state, delta) => {
    mesh.current.rotation.x =
      mesh.current.rotation.y =
      mesh.current.rotation.z +=
        delta;
  });
  return (
    <mesh ref={mesh} scale={100}>
      <sphereGeometry args={[1, 64, 64]} />
      <LayerMaterial color="purple" attach="material" side={THREE.BackSide}>
        <Depth
          colorA="purple"
          colorB="red"
          alpha={0.5}
          mode="multiply"
          near={0}
          far={300}
          origin={[10, 10, 10]}
        />
        <Depth
          colorA="blue"
          colorB="blue"
          alpha={0.5}
          mode="multiply"
          near={0}
          far={300}
          origin={[100, 100, 100]}
        />
      </LayerMaterial>
    </mesh>
  );
}

export default function Home() {
  const props = { base: "#ff4eb8", colorA: "#00ffff", colorB: "#ff00e3" };
  return (
    <div className="h-screen w-screen cursor-pointer">
      {/*<Navbar />*/}
      <Canvas
        width="100%"
        style={{ maxWidth: "100% !important" }}
        camera={{
          fov: 35,
          zoom: 1.2,
          near: 1,
          far: 10000,
          angle: 1,
          position: [0, 100, 20],
        }}
      >
        <OrbitControls />
        <Bg {...props} />
        <Stars
          depth={15}
          radius={40}
          count={10000}
          factor={5}
          saturation={0}
          fade
          speed={1}
        />
        <ambientLight intensity={0.5} />
        <spotLight position={[15, 30, 20]} angle={0.8} />
        <Physics>
          <Planet
            name="NebulosaInnova"
            position={[17.118, 5.562, 2]}
            texturePath="/nebulosaInnova.jpg"
            positionTexto={[14.118, 3.562, 10]}
          />
          <Planet
            cursor-pointer
            name="Supernova"
            position={[10.58, -14.56, -12]}
            texturePath="/supernova.jpg"
            positionTexto={[7.58, -14.56, -4]}
          />
          <Planet
            name="Ideaverso"
            position={[-10.58, -14.56, -12]}
            texturePath="/Ideaverso.jpg"
            positionTexto={[-13.58, -14.56, -4]}
          />
          <Planet
            name="LibreriaOrion"
            position={[-17.18, 5.56, 1]}
            texturePath="/libreriaOrion.jpg"
            positionTexto={[-20.118, 5.562, 9]}
          />
          <Planet
            name="MeteoroGame"
            position={[0, 18, 12]}
            texturePath="/meteoroGame.jpg"
            positionTexto={[-3, 18, 20]}
          />
        </Physics>

        {/*<CameraShake
          maxYaw={0.05} // Max amount camera can yaw in either direction
          maxPitch={0.05} // Max amount camera can pitch in either direction
          maxRoll={0.05} // Max amount camera can roll in either direction
          yawFrequency={0} // Frequency of the the yaw rotation
          pitchFrequency={0} // Frequency of the pitch rotation
          rollFrequency={0.3} // Frequency of the roll rotation
          intensity={1} // initial intensity of the shake
          // if decay = true this is the rate at which intensity will reduce at />
        />*/}
      </Canvas>
    </div>
  );
}

function Striplight(props) {
  return (
    <mesh {...props}>
      <boxGeometry />
      <meshBasicMaterial color="white" />
    </mesh>
  );
}
