import React, { useState, useContext } from "react";
import { AppContext } from "../../../../context";

function ProductCard(props) {
  let producto = props.producto;
  const [cant, setcant] = useState(1);
  const { cart, setcart, setConCart } = useContext(AppContext);

  let handleAdd = () => {
    setcant(cant + 1);
  };

  let handleSubt = () => {
    if (cant === 0) {
      return;
    } else {
      setcant(cant - 1);
    }
  };

  let handleSubmit = () => {
    if (cart !== "") {
      let prod = [cant, producto];
      let newCart = cart.concat(prod);
      setcart(newCart);
    } else {
      let prod = [cant, producto];
      setcart(prod);
    }
    setcant(1);
    setConCart(true);
  };

  return (
    <div className="ProductCard">
      <h3>{producto.title}</h3>
      {producto.subt !== undefined ? <h4>{producto.subt}</h4> : <span></span>}
      <img src={producto.img} />
      <div className="precio">
        <h4>{"Precio regular: $" + producto.precioReg}</h4>
        <h4>{"Precio para asociados: $" + producto.precioSoci}</h4>
      </div>
      <div className="cantidad">
        <span></span>
        <h4>Cantidad (en Kg)</h4>
        <div className="buttons">
          <button onClick={handleSubt}>-</button>
          <h4>{cant}</h4>
          <button onClick={handleAdd}>+</button>
        </div>
        <button onClick={handleSubmit}>Añadir al carrito</button>
      </div>
    </div>
  );
}

export default ProductCard;
