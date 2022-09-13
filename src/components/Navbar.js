import React from "react";

function Navbar() {
  const boxClick = () => {
    alert("clicked the button");
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
