import React from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Stars, useCamera, CameraShake, Environment, MeshWobbleMaterial, useTexture} from "@react-three/drei";
import * as THREE from "three";
import { Physics, usePlane, useBox, useSphere } from "@react-three/cannon";
import "./App.css";

// camara 15,80,50

const Cielo = ({env : 'https://dl.polyhaven.org/file/ph-assets/HDRIs/hdr/2k/evening_road_01_2k.hdr'})

function Planeta1() {
  const colorTexture = useTexture('/fictional1.jpg')
  const [ref, api] = useSphere(() => ({ position: [17.118, 5.562, 2] }));
  const ref3 = React.useRef();
  useFrame(({ clock }) => {
    ref3.current.rotation.z = clock.getElapsedTime();
  });
  return (
    <mesh
      ref={ref3}
      onClick={() => {
        api.velocity.set(0, 2, 0);
      }}
      scale={[5, 5, 5]}
      position={[17.118, 5.562, 2]}
    >
      <sphereGeometry attach="geometry" />
      <meshStandardMaterial map={colorTexture}/>
    </mesh>
  );
}

function Planeta2() {
  const [ref, api] = useSphere(() => ({ position: [10.58, -14.56, -12] }));
  const ref3 = React.useRef();
  useFrame(({ clock }) => {
    ref3.current.rotation.z = clock.getElapsedTime();
  });
  return (
    <mesh
      ref={ref3}
      onClick={() => {
        api.velocity.set(0, 2, 0);
      }}
      scale={[5, 5, 5]}
      position={[10.58, -14.56, -12]}
    >
      <sphereGeometry attach="geometry" />
      <meshLambertMaterial attach="material" color="hotpink" />
    </mesh>
  );
}

function Planeta3() {
  const [ref, api] = useSphere(() => ({ position: [-10.58, -14.56, -12] }));
  const ref3 = React.useRef();
  useFrame(({ clock }) => {
    ref3.current.rotation.z = clock.getElapsedTime();
  });
  return (
    <mesh
      ref={ref3}
      onClick={() => {
        api.velocity.set(0, 2, 0);
      }}
      scale={[5, 5, 5]}
      position={[-10.58, -14.56, -12]}
    >
      <sphereGeometry attach="geometry" />
      <meshLambertMaterial attach="material" color="hotpink" />
    </mesh>
  );
}

function Planeta4() {
  const [ref, api] = useSphere(() => ({ position: [-17.18, 5.56, 1] }));
  const ref3 = React.useRef();
  useFrame(({ clock }) => {
    ref3.current.rotation.z = clock.getElapsedTime();
  });
  return (
    <mesh
      ref={ref3}
      onClick={() => {
        api.velocity.set(0, 2, 0);
      }}
      position={[-17.18, 5.56, 1]}
      scale={[5, 5, 5]}
    >
      <sphereGeometry attach="geometry" />
      <MeshWobbleMaterial factor={1} speed={10} />
    </mesh>
  );
}

function Planeta5() {
  const [ref, api] = useSphere(() => ({ position: [0, 18, 12] }));
  const ref2 = React.useRef();
  useFrame(({ clock }) => {
    ref2.current.rotation.z = clock.getElapsedTime(0.05);
  });

  return (
    <mesh
      ref={ref2}
      onClick={() => {
        api.velocity.set(0, 2, 0);
      }}
      position={[0, 18, 12]}
      scale={[5, 5, 5]}
    >
      <sphereGeometry attach="geometry" />
      <meshLambertMaterial attach="material" color="hotpink" />
    </mesh>
  );
}

export default function App() {
  return (
    <div className=" h-screen">
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
          <Planeta1 />
          <Planeta2 />
          <Planeta3 />
          <Planeta4 />
          <Planeta5 />
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
