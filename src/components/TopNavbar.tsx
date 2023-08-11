import React from "react";
import "./TopNavbar.css"
import { NavLink  } from "react-router-dom";

export default function Top_Navbar(): React.ReactElement {
  return (
    <nav className="navbar">
      <a className="site-title" href="/">David's website</a>
      <ul>
        <li>
          <NavLink to="/contacts"> Contacts </NavLink>
        </li>
        <li>
        <NavLink to="/aboutme"> About Me </NavLink>
        </li>
        <li>
        <NavLink to="/experimental"> Experimental </NavLink>
        </li>
        <li>
          <NavLink to="/login"> Login</NavLink>
        </li>
      </ul>
    </nav>
  );
}
