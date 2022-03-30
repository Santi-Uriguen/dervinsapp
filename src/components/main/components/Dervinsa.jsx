import React from "react";
import ProductCard from "./components/ProductCard";

function Dervinsa(props) {
  return (
    <section className="dervinsa-section">
      <h2>PRODUCTOS DE DERVINSA</h2>
      <p>
        Entre sus principales productos se pueden encontrar: ácido tartárico,
        ácido metatartárico, aceite de pepita de uva crudo, aceite de pepita de
        uva refinado, alcohol etílico estándar, alcohol etílico neutro,
        destilado de vino, aguardiente de vino, grapa, crémor tártaro y se está
        desarrollando un compost a través de un Convenio de Vinculación
        Tecnológico con el INTA.
      </p>
      <div className="ProdSection">
        {props.prod.map((prod) => {
          return <ProductCard producto={prod} father={"dervinsa"} />;
        })}
      </div>
    </section>
  );
}

export default Dervinsa;
