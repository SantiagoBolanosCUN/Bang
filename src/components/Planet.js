import React, { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { useTexture, Sparkles } from "@react-three/drei";
import { history } from "./History";
import Texto from "./Texto";

function Planeta({ name, position, positionTexto, texturePath }) {
  const colorTexture = useTexture(texturePath);
  const ref = useRef();
  const scale = [5, 5, 5];

  useFrame(({ clock }) => {
    ref.current.rotation.z = clock.getElapsedTime();
  });
  const onPointerMouse = () => {
    ref.current.scale.x = 7;
    ref.current.scale.y = 7;
    ref.current.scale.z = 7;
  };
  const offPointerMouse = () => {
    ref.current.scale.x = 5;
    ref.current.scale.y = 5;
    ref.current.scale.z = 5;
  };
  const onClickHandler = () => {
    history.push(`./${name}`);
  };

  return (
    <>
      <mesh
        ref={ref}
        scale={scale}
        position={position}
        onClick={onClickHandler}
        onPointerOver={onPointerMouse}
        onPointerOut={offPointerMouse}
      >
        <sphereGeometry attach="geometry" />s
        <meshStandardMaterial map={colorTexture} />
      </mesh>
      <mesh>
        <Texto texto={name} position={positionTexto}></Texto>
      </mesh>
    </>
  );
}

export default Planeta;
