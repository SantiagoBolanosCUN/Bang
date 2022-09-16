import React from "react";
import { history } from "./History";

function Navbar({ fixed }) {
  function onClickHandler() {
    history.push("/");
  }
  const [navbarOpen, setNavbarOpen] = React.useState(false);
  return (
    <nav className="  px-2 sm:px-4 py-4 rounded dark:bg-gray-900">
      <div className="flex justify-center">
        <a href="" className="flex items-center">
          <img
            onClick={onClickHandler}
            src="https://i.ibb.co/Ltdcnqz/LOGO-SPACE-BANG.png"
            className="mr-3 h-6 sm:h-9"
            alt="Space Bang logo"
          />
        </a>
      </div>
    </nav>
  );
}

export default Navbar;
