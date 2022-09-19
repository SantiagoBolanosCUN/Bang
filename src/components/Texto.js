import React, { useState } from "react";
import { FontLoader } from "three/examples/jsm/loaders/FontLoader";
import { TextGeometry } from "three/examples/jsm/geometries/TextGeometry";
import { extend } from "@react-three/fiber";
import { useRef } from "react";
import Delius from "../assets/Delius.json";

extend({ TextGeometry });

export default function Texto({ texto, position }) {
  const font = new FontLoader().parse(Delius);
  const ref = useRef();
  const text = texto;

  return (
    <mesh ref={ref} position={position} rotation={[-1.5, 0, 0]}>
      <textGeometry args={[text, { font, size: 1, height: 1 }]} />
      <meshPhysicalMaterial attach="material" color={"yellow"} />
    </mesh>
  );
}
