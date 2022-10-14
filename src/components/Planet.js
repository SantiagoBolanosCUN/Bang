import React, { useRef } from "react";
import { useFrame, useThree } from "@react-three/fiber";
import { useTexture } from "@react-three/drei";
import { history } from "./History";
import Texto from "./Texto";

function Planeta({ name, position, positionTexto, texturePath }) {
  const colorTexture = useTexture(texturePath);
  const ref = useRef();
  const { viewport } = useThree();

  useFrame(({ clock }) => {
    ref.current.rotation.z = clock.getElapsedTime();
  });
  const onPointerMouse = () => {
    ref.current.scale.x = viewport.width / 25;
    ref.current.scale.y = viewport.width / 25;
    ref.current.scale.z = viewport.width / 25;
  };
  const offPointerMouse = () => {
    ref.current.scale.x = viewport.width / 30;
    ref.current.scale.y = viewport.width / 30;
    ref.current.scale.z = viewport.width / 30;
  };
  const onClickHandler = () => {
    history.push(`./${name}`);
  };

  return (
    <>
      <mesh
        ref={ref}
        scale={viewport.width / 30}
        position={position}
        onClick={onClickHandler}
        onPointerOver={onPointerMouse}
        onPointerOut={offPointerMouse}
      >
        <sphereGeometry attach="geometry" />
        <meshStandardMaterial map={colorTexture} />
      </mesh>
      <mesh>
        <Texto texto={name} position={positionTexto}></Texto>
      </mesh>
    </>
  );
}

export default Planeta;
