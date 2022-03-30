import React from "react";
import ProductCard from "./components/ProductCard";

function Vinolab(props) {
  return (
    <section className="vino-section">
      <h2>PRODUCTOS DE VINOLAB</h2>
      <p>
        En 2017, la compañía decidió incorporar a su porfolio una nueva línea de
        insumos enológicos de primera calidad. Esta nueva unidad de negocios
        cuenta entre sus principales productos con levaduras activadores de
        fermentación, insertos de roble (Stavin) y otros que incorporará a su
        cartera en el transcurso de los próximos meses.
      </p>
      <div className="ProdSection">
        {props.prod.map((prod) => {
          return <ProductCard producto={prod} setcart={props.setcart} />;
        })}
      </div>
    </section>
  );
}

export default Vinolab;
