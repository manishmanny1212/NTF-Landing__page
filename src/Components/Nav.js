import React from "react";
import { useState } from "react";
import { BsFillMoonFill } from "react-icons/bs";
import { ImSun } from "react-icons/im";
import logo from "../assets/logo.png";

function Nav({changeTheme, currentTheme}) {
  const [naveState, setnaveState] = useState(false);
  return (
    <nav>
      <div className="brand-container">
        <div className="brand">
          <img src={logo} alt="logo" />
        </div>
        <div className="toggle-container">
          <div className="toggle"></div>
          <div className="mode">
          {currentTheme==="dark" ? (<ImSun className="light"/>):(<BsFillMoonFill className="dark"/>)}

          </div>
        </div>

      </div>
      <div className="links-container">
        <ul className="links">
          <li><a href="#"> featers</a> </li>
          <li><a href="#">About</a> </li>
          <li><a href="#">Lounch</a></li>
          <li><a href="#"> signup</a> </li>
          <li onClick={changeTheme}> 
          {currentTheme==="dark" ? (<ImSun className=" light"/>):(<BsFillMoonFill className="dark"/>)}</li>
        </ul>
      </div>
    </nav>
  );
}

export default Nav;
