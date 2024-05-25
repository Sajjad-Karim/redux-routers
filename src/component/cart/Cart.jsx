import React from "react";

import { useSelector } from "react-redux";
const CartItems = () => {
  const cart = useSelector((state) => state.AddToCart);
  const totalprice = cart.reduce((a, b) => a + b.price, 0);
  return (
    <>
      {cart && <h1>Total Price : {totalprice}</h1>}
      {cart &&
        cart.map((cart, index) => {
          return (
            <div
              style={{
                padding: "20px 50px",
                display: "flex",

                alignItems: "center",

                gap: "100px",
                borderBottom: "1px solid black",
              }}
            >
              <div
                style={{
                  width: "150px",
                  height: "150px",
                  backgroundImage: `url(${cart.img})`,
                  backgroundSize: "contain",
                  backgroundPosition: "center",
                  backgroundRepeat: "no-repeat",
                }}
              ></div>
              <div>
                <p>Name : {cart.title}</p>
                <p>price : {cart.price}$</p>

                <p>color: {cart.color}</p>
                <p>description: {cart.description}</p>
              </div>
            </div>
          );
        })}
    </>
  );
};

export default CartItems;
