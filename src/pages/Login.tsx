import "./Login.css";
import EmoticonHeader from "../components/EmoticonHeader";
import { supabase } from "../supabaseClient";
import { useState } from "react";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false)


  const signInWithEmail = async (e: Event)=> {
    e.preventDefault()
    setLoading(true);
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
    setLoading(false);
  }
  

  return (
    <div className="login-page-container">
      <EmoticonHeader content="Login" emoticon="🔐"></EmoticonHeader>
      <form id="login-form" onSubmit={(e) => signInWithEmail}>
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
        <button id="submit-login">{ loading ? "Logging in...." : "Login"} </button>
      </form>
    </div>
  );
}
