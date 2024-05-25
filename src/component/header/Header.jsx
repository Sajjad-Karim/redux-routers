import React from "react";
import { NavLink } from "react-router-dom";
import "./style.css";
import { useSelector } from "react-redux";
const Header = () => {
  const cart = useSelector((state) => state.AddToCart);
  const addtocartLength = cart.length;
  return (
    <>
      <div
        style={{
          width: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          padding: "10px",
          background: "brown",
        }}
      >
        <ul style={{ display: "flex", gap: "20px", listStyle: "none" }}>
          <li>
            <NavLink
              className={({ isActive }) => `${isActive ? "active" : "style"}`}
              to="/"
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({ isActive }) => `${isActive ? "active" : "style"}`}
              to="/about"
            >
              About
            </NavLink>
          </li>

          <li>
            <NavLink
              className={({ isActive }) => `${isActive ? "active" : "style"}`}
              to="/cart"
            >
              Cart ({addtocartLength})
            </NavLink>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Header;
