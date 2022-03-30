import React from "react";
import NavBar from "./components/NavBar";

function Header(props) {
  return (
    <header>
      <NavBar conCart={props.conCart} />
    </header>
  );
}

export default Header;
