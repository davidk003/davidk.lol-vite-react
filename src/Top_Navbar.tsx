import React from "react";
import "./Top_Navbar.css"
import { Link } from "react-router-dom";

export default function Top_Navbar(): React.ReactElement {
  return (
    <nav className="navbar">
      <a className="site-title" href="/">David's website</a>
      <ul>
        <li>
          <Link to="/contacts"> contacts </Link>
        </li>
        <li>
        <Link to="/aboutme"> about me </Link>
        </li>
        <li className="active">
        <Link to="/experimental"> experimental </Link>
        </li>
      </ul>
    </nav>
  );
}
