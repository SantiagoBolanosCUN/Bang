import React, { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { useTexture } from "@react-three/drei";
import { history } from "./History";

function Planeta({ name, position, texturePath }) {
  const colorTexture = useTexture(texturePath);
  const ref = useRef();
  useFrame(({ clock }) => {
    ref.current.rotation.z = clock.getElapsedTime();
  });

  const onClickHandler = () => {
    history.push(`./${name}`);
  };

  return (
    <mesh
      ref={ref}
      scale={[5, 5, 5]}
      position={position}
      onClick={onClickHandler}
    >
      <sphereGeometry attach="geometry" />
      <meshStandardMaterial map={colorTexture} />
    </mesh>
  );
}

export default Planeta;
