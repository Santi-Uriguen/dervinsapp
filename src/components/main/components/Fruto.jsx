import React from "react";
import ProductCard from "./components/ProductCard";

function Fruto(props) {
  return (
    <section className="fruto-section">
      <h2>FRUTO DE LA VIÑA</h2>
      <p>
        Esta unidad de negocio está destinada a los productos relacionados con
        la agroindustria y la producción de aceite y sus derivados como lo son:
        compost, sustrato, fertilizante líquido natural, semillas y aceite de
        pepita de uva.
      </p>
      <div className="ProdSection">
        {props.prod.map((prod) => {
          return <ProductCard producto={prod} setcart={props.setcart} />;
        })}
      </div>
    </section>
  );
}

export default Fruto;
