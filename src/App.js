import React from "react";
import { Route, Routes, Link } from "react-router-dom";
import Home from "./routes/Home";

import "./App.css";
import Detail from "./routes/Detail";
import ReactDOMClient from "react-dom/client";
import ThreeRouter from "./components/ThreeRouter";
import { history } from "./components/History";

export default function App() {
  return (
    <div className=" h-screen">
      <ThreeRouter history={history}>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/detail/:plantetId" element={<Detail />} />
        </Routes>
      </ThreeRouter>
    </div>
  );
}
