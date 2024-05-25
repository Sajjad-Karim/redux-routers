import React from "react";
import bg from "./../../assets/bg.png";
import { Link } from "react-router-dom";
const Card = ({ title, price, color, img, description, index }) => {
  return (
    <>
      <div
        style={{
          width: "250px",
          height: "300px",
          border: "2px solid black",
          display: "flex",
          flexDirection: "column",
          gap: "10px",
        }}
      >
        <div
          style={{
            width: "100%",
            height: "180px",
            backgroundImage: `url(${img})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        ></div>
        <div
          style={{
            padding: "10px",
            display: "flex",
            flexDirection: "column",
            gap: "5px",
          }}
        >
          <p>Name: {title}</p>
          <p>Price : {`${price}$`}</p>
          <p>Color: {color}</p>
          <p>description: {description}</p>
          <button style={{ padding: "5px 5px" }}>
            <Link
              to={`/details/${index}`}
              style={{ color: "black", textDecoration: "none" }}
            >
              view Product
            </Link>
          </button>
        </div>
      </div>
    </>
  );
};

export default Card;
