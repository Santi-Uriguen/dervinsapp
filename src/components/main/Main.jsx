import React, { useState } from "react";
import Dervinsa from "./components/Dervinsa";
import Vinolab from "./components/Vinolab";
import Fruto from "./components/Fruto";
import productos from "./../../assets/productos";
import Cart from "./components/Cart";
import { AppContext } from "../../context";

function Main(props) {
  const [cart, setcart] = useState("");
  const setConCart = props.setConCart;
  return (
    <AppContext.Provider value={{ cart, setcart, setConCart }}>
      <main className="main" id="main">
        <h1>BIENVENIDOS AL E-COMMERCE DE DERVINSA</h1>
        <Dervinsa prod={productos.dervinsa} />
        <Vinolab prod={productos.vinolab} />
        <Fruto prod={productos.viña} />
        <Cart />
      </main>
    </AppContext.Provider>
  );
}

export default Main;
