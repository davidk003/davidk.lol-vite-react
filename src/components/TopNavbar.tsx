import React from "react";
import "./TopNavbar.css";
import { NavLink } from "react-router-dom";
import { Session } from "@supabase/supabase-js";
import { supabase } from "../supabaseClient";

export default function Top_Navbar(prop: {
  s: Session | null;
}): React.ReactElement {
  const handleSignOut = async () => {
    const { error } = await supabase.auth.signOut();

    if (error) {
      alert("ERROR SIGNING OUT\nError message:\n" + error.message);
    } else {
      alert("Sign out success!");
    }
    window.location.reload();
  };

  return (
    <nav className="navbar">
      <a className="site-title" href="/">
        David's website
      </a>
      <ul>
        <li>
          <NavLink to="/projects"> Projects</NavLink>
        </li>
        <li>
          <NavLink to="/contacts"> Contacts </NavLink>
        </li>
        <li>
          <NavLink to="/aboutme"> About Me </NavLink>
        </li>
        <li>
          <NavLink to="/fun"> Fun </NavLink>
        </li>
        <li>
          {!prop.s ? (
            <NavLink to="/login"> Login</NavLink>
          ) : (
            <NavLink title={prop.s.user.id} onClick={() => handleSignOut()} to="/login">
              Sign out
            </NavLink>
          )}
        </li>
      </ul>
    </nav>
  );
}
