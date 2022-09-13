import React from "react";
import { history } from "./History";

function Navbar() {
  const boxClick = () => {
    history.push("./NebulosaInnova");
  };
  return (
    <div>
      <div className="container">
        <article>
          <h1>Esto es un navbar? </h1>
          solo si santiago valida que esto es un navbar....
          <button onClick={boxClick}>click</button>
        </article>
      </div>
    </div>
  );
}

export default Navbar;
