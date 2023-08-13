import "./Login.css";
import EmoticonHeader from "../components/EmoticonHeader";

export default function Login() {
  return (
    <div className="login-page-container">
      <EmoticonHeader content="Dev Login" emoticon="🔐"></EmoticonHeader>
      <form id="login-form">
        <div className="input-field">
          <label htmlFor="login-username">Username:</label>
          <input type="text" id="login-username"></input>
          <label htmlFor="login-password">Password:</label>
          <input type="text" id="login-password"></input>
        </div>
        <button id="submit-login">Login</button>
      </form>
    </div>
  );
}
