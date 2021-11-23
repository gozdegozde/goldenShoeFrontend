import React from "react";
import { NavLink } from "react-router-dom";
import '../../src/App.css'

export default function NavBar() {
  return (
      <ul class="navbar" >
        <li class="navbarli"><a href="/">Home</a></li>
        <li class="navbarli" style={{float:"right"}}><a href="/cart">Shopping Cart</a></li>
        <li class="navbarli" ><a href="/contact">Contact</a></li>
        <li class="navbarli"><a href="/about">About</a></li>
      </ul>



  );
}