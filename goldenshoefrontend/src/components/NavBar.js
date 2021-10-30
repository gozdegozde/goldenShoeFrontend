import React from "react";
import { NavLink } from "react-router-dom";

export default function NavBar() {
  return (
    <div>
      <NavLink activeStyle={{ fontWeight: "bold" }}  to="/" exact>
        Home
      </NavLink>
      {" - "}
      <NavLink activeStyle={{ fontWeight: "bold" }}  to="/cart">Shopping Cart</NavLink>
      {" - "}
      <NavLink activeStyle={{ fontWeight: "bold" }}  to="/contact">Contact</NavLink>
    </div>
  );
}