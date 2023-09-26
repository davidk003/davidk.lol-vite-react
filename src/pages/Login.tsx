import "./Login.css";
import EmoticonHeader from "../components/EmoticonHeader";
import SignUpCard from "../components/SignUpCard";
import { supabase } from "../supabaseClient";
import React, { useEffect, useState } from "react";

export default function Login(): React.ReactElement
{
  useEffect(() =>
  {console.log("test")},[]);
  const [loggingIn, setLoggingIn] = useState<boolean>(false);
  const [signingUp, setSigningUp] = useState<boolean>(false);
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const signInWithEmail = async (event: React.FormEvent<HTMLFormElement>)=> {
    event.preventDefault()
    setLoggingIn(true);
    // @ts-ignore
    const { data, error } = await supabase.auth.signInWithPassword({
      email: email,
      password: password,
    });
    if (error) {
      alert("ERROR LOGGING IN\nError message:\n" + error.message);
    }
    else{
      alert("Login success");
    }

    setLoggingIn(false);
    window.location.reload();
  }
  

  return (
    <div className="login-page-container">
      <EmoticonHeader content="Login" emoticon="🔐"></EmoticonHeader>
      {signingUp ? <SignUpCard signUpCardActive={signingUp} setSignUpCardActive={setSigningUp}/> : <></>}
      <form id="login-form" onSubmit={signInWithEmail}>
        <div className="input-field">
          <label htmlFor="login-username">Email:</label>
          <input type="text" id="login-username" required={true} value={email} onChange={(e) => setEmail(e.target.value)}></input>
          <label htmlFor="login-password">Password:</label>
          <input
            type="password"
            id="login-password"
            required={true}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          ></input>
        </div>
        <button id="submit-login">{ loggingIn ? "Logging in...." : "Login"} </button>
      </form>
      {signingUp ? <></>: <a onClick={() => setSigningUp(signingUp ? false : true)}>Sign up?</a>}
    </div>
  );
}
