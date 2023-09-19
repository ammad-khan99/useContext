import React, { useState } from "react";
import "./Navbar.css";
import { NavLink, useNavigate } from "react-router-dom";
import { ShoppingCart, Menu } from "react-feather";

function Navbar() {
  const [active, setActive] = useState("links");
  const [itemCount, setItemCount] = useState(0);



  const toggler = () => {
    active === "links" ? setActive("links nav_active") : setActive("links");
  };

  const navigate = useNavigate();
  const handleLogout = () => {
    localStorage.removeItem("isLoggedIn");
    navigate("/");
  };

  return (
    <nav className="nav">
      <div className={active}>
        <NavLink className="link_elements" to="/">
          Home
        </NavLink>
        <NavLink className="link_elements" to="/products">
          Products
        </NavLink>
        <NavLink className="link_elements" to="/contact">
          Contact
        </NavLink>
        <NavLink className="link_elements" to="/cart">
          <ShoppingCart />
          <span className="cart_count">{itemCount}</span>
        </NavLink>
      </div>
      <div className="logout">
        <button className="log" onClick={handleLogout}>
          Logout
        </button>
      </div>
      <div>
        <Menu onClick={toggler} className="menu" color="#be6b9b" />
      </div>
    </nav>
  );
}

export default Navbar;
