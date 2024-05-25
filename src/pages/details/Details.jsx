import React from "react";
import img from "../../assets/bg.png";
import { useParams } from "react-router-dom";
import { data } from "../../data/cardData";
import { addCart } from "../../features/addtocart/add.cart";
import { useDispatch, useSelector } from "react-redux";
const Details = () => {
  const { index } = useParams();
  const product = data[index];
  const dispatch = useDispatch();
  const handleAddToCart = () => {
    dispatch(addCart(product));
  };
  return (
    <>
      <div style={{ padding: "10px" }}>
        <div
          style={{
            width: "300px",
            height: "300px",
            backgroundImage: `url(${product.img})`,
            backgroundPosition: "center",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
          }}
        ></div>
        <div>
          <p>Name:{product.title}</p>
          <p> Price: {product.price}$</p>
          <p>color:{product.color}</p>
          <p>Description:{product.description}</p>
        </div>
        <button style={{ padding: "5px" }} onClick={handleAddToCart}>
          Add to cart
        </button>
      </div>
    </>
  );
};

export default Details;
