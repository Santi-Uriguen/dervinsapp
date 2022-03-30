import React, { useContext, useEffect, useState } from "react";
import { AppContext } from "../../../context";
import productos from "../../../assets/productos";

function Cart(props) {
  const { cart } = useContext(AppContext);
  const [prod, setprod] = useState("second");
  const [client, setclient] = useState("reg");
  let cantidad = [];
  let productos = [];
  let totalReg = 0;
  let totalSoc = 0;

  const fixCart = () => {
    for (let i = 0; i < cart.length; i++) {
      if (i % 2 === 0) {
        cantidad.push(cart[i]);
      } else {
        productos.push(cart[i]);
      }
    }
  };

  const handleCheck = (e) => {
    e.target.value === "soc" ? setclient("soc") : setclient("reg");
  };

  return (
    <section className="cartInactive" id="cart">
      <h2>Tu carrito</h2>
      <div className="typeofClient">
        <div className="reg">
          <input
            type="radio"
            id="reg"
            name="cliente"
            value="reg"
            onChange={(e) => handleCheck(e)}
            defaultChecked
          />
          <label for="regular">Cliente regular</label>
        </div>
        <div className="soc">
          <input
            type="radio"
            id="soc"
            name="cliente"
            value="soc"
            onChange={(e) => handleCheck(e)}
          />
          <label for="socio">Cliente asociado</label>
        </div>
      </div>
      <div className="productsCart">
        {cart === "" ? (
          <div className="emptyCart">
            <h3>Todavía no agregaste ningún producto.</h3>
          </div>
        ) : (
          <div className="fullCart">
            {fixCart()}
            {productos.map((product, index) => {
              totalReg = totalReg + product.precioReg * cantidad[index];
              totalSoc = totalSoc + product.precioSoci * cantidad[index];
              return (
                <div className="ProdInCart">
                  <h4 className="title">{product.title}</h4>
                  <div>
                    <img src={product.img} />
                    <p>{`Cantidad: ${cantidad[index]}kg`}</p>
                    {client === "reg" ? (
                      <div>
                        <p>{`Precio individual: $${product.precioReg}`}</p>
                        <p>{`Subtotal: $${
                          product.precioReg * cantidad[index]
                        }`}</p>
                      </div>
                    ) : (
                      <div>
                        <p>{`Precio individual: $${product.precioSoci}`}</p>
                        <p>{`Subtotal: $${
                          product.precioSoci * cantidad[index]
                        }`}</p>
                      </div>
                    )}
                  </div>
                  <span></span>
                </div>
              );
            })}
            <h4>
              {client === "reg" ? (
                <p>{`Total: $${totalReg}`}</p>
              ) : (
                <p>{`Total: $${totalSoc}`}</p>
              )}
            </h4>
            <div className="confirmButton">
              <button>Confirmar compra</button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

export default Cart;
