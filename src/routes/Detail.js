import React from "react";
import { useParams } from "react-router-dom";

const INFO = {
  "planeta-1": {
    titulo: "Nebulosa Innova",
  },
  "planeta-2": {
    titulo: "SUPERNOVA",
  },
  "planeta-3": {
    titulo: "Ideaverso",
  },
  "planeta-4": {
    titulo: "nosecomosellama",
  },
  "planeta-5": {
    titulo: "nosecomosellama2",
  },
};

export default function Detail() {
  const { plantetId } = useParams();
  const info = INFO[plantetId];
  return <div> Detalles de planeta:{info.titulo}</div>;
}
