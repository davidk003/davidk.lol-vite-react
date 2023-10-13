import "./NavBarProfile.css"
import { useState } from "react";
//@ts-ignore
import { supabase } from "../supabaseClient";



export default function NavbarProfile()
{

    const [showDropdown, setShowDropdown] = useState<boolean>(false);

    return(<div className="navbar-profile-container">

            <a onClick={()=>setShowDropdown(!showDropdown)}>Profile</a>
            {showDropdown ? 
            <ul className="navbar-profile-dropdown-list">
                <li>
                    <a>Update account info</a>
                </li>
                <li>
                    <a>Forgot password?</a>
                </li>
            </ul>
             : <></>}

    </div>);
}


