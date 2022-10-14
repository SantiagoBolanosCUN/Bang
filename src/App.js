import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./routes/Home";
import "./App.css";
import Detail from "./routes/Detail";
import ThreeRouter from "./components/ThreeRouter";
import { history } from "./components/History";
import NebulosaInnova from "./routes/NebulosaInnova";
import Supernova from "./routes/Supernova";
import Ideaverso from "./routes/Ideaverso";
import LibreriaOrion from "./routes/LibreriaOrion";
import MeteoroGame from "./routes/MeteoroGame";
import Login from "./routes/Login";
import ModalInicio from "./components/ModalInicio";

export default function App() {
  return (
    <div className=" h-screen">
      <ThreeRouter history={history}>
        <Routes>
          <Route exact path="/" element={<Login />} />
          <Route path="/Home" element={<Home />} />
          <Route path="/detail/:plantetId" element={<Detail />} />
          <Route path="/NebulosaInnova" element={<NebulosaInnova />} />
          <Route path="/Supernova" element={<Supernova />} />
          <Route path="/Ideaverso" element={<Ideaverso />} />
          <Route path="/MeteoroGame" element={<MeteoroGame />} />
          <Route path="/PostLibreriaOrion" element={<LibreriaOrion />} />
          <Route path="LibreriaOrion" element={<ModalInicio />} />
        </Routes>
      </ThreeRouter>
    </div>
  );
}
