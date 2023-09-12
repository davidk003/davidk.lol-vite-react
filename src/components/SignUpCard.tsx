import "../components/SignUpCard.css";
import React, { useState } from "react";
import { supabase } from "../supabaseClient";

export default function SignUpCard(prop: {
  signUpCardActive: boolean;
  setSignUpCardActive: React.Dispatch<React.SetStateAction<boolean>>;
}): React.ReactElement {
  const [signUpPassword, setSignUpPassword] = useState<string>("");
  const [signUpEmail, setSignUpEmail] = useState<string>("");
  const [signingUp, setSigningUp] = useState<boolean>(false);

  const handleSignUp = async (event: React.FormEvent<HTMLFormElement>) => {
    setSigningUp(true);
    event.preventDefault();
    // @ts-ignore
    const { data, error } = await supabase.auth.signUp({
      email: signUpEmail,
      password: signUpPassword,
    })

    if (error) {
      alert("ERROR CREATING USER\nError message:\n" + error.message);
    }
    else{
      alert("Check your email for your verification link to log in.");
      prop.setSignUpCardActive(false);
    }

    setSigningUp(false);
  };

  return (
    <div className="signup-card">
      <h1>Sign Up</h1>
      <a
        className="signup-close-button"
        onClick={() => {
          !signingUp
            ? prop.setSignUpCardActive(false)
            : alert("Blocked attempt to close signup card during signup.");
        }}
      >
        ❌
      </a>
      <form onSubmit={handleSignUp}>
        <label htmlFor="signup-email"> Email</label>
        <input type="text" id="signup-email" required={true} value={signUpEmail} onChange={(e)=>{setSignUpEmail(e.target.value)}}></input>
        <label htmlFor="signup-password"> Password</label>
        <input type="password" id="signup-password" required={true} value={signUpPassword} onChange={(e)=>{setSignUpPassword(e.target.value)}}></input>
        <button> Create Account</button>
      </form>
    </div>
  );
}
