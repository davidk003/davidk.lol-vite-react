import "./Login.css";
export default function Login() {
  return (
    <>
      <h1 className="page-header">Dev Login 🔐</h1>
      <form id="login-form">
        <div className="input-field">
          <label htmlFor="login-username">Username:</label>
          <input type="text" id="login-username"></input>
          <label htmlFor="login-password">Password:</label>
          <input type="text" id="login-password"></input>
        </div>
        <button id="submit-login">Login</button>
      </form>
    </>
  );
}
