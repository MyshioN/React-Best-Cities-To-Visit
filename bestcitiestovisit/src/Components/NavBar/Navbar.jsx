import React from "react";
import { MenuData } from "./MenuData";
import "./Navbar.css";
import { useState } from "react";

export const NavBar = () => {
  const[state, setState] = useState({clicked: false})

  const handleClick = () => {
    setState({ clicked: !state.clicked });
  };

  return (
    <nav className="NavbarItems">
      <h1 className="logo">Cities guide</h1>
      <div className="menu-icons" onClick={handleClick}>
        <i className={state.clicked ? "fas fa-times" : "fas fa-bars"}></i>
      </div>
      <ul className={state.clicked ? "nav-menu active" : "nav-menu"}>
        {MenuData.map((item, index) => {
          return (
            <li key={index}>
              <a href={item.url} className={item.cName}>
                {item.title}
              </a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};
