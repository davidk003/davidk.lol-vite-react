import React, { useContext, useState } from "react";
import "./TopNavbar.css";
import { NavLink } from "react-router-dom";
import { supabase } from "../supabaseClient";
import { SessionContext } from "../App";
import { Session } from "@supabase/supabase-js";
import NavbarProfile from "./NavBarProfile";

export default function Top_Navbar(): React.ReactElement {
  const currentSession: (Session | null) = useContext<Session | null>(SessionContext);
  const [showProfile, setShowProfile] = useState<boolean>(false);

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
          {!currentSession ? (
            <NavLink to="/login"> Login</NavLink>
          ) : (
            <NavLink title={currentSession.user.id} onClick={() => handleSignOut()} to="/login">
              Sign out
            </NavLink>
          )}
        </li>
        {currentSession ? <li><NavLink to="/account">Account</NavLink></li> : <></>
        }

        {showProfile ? <NavbarProfile></NavbarProfile> : <li> <a onClick={()=>setShowProfile(!showProfile)}>Profile</a></li> }
      </ul>
    </nav>
  );
}
