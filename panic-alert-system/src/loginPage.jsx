import { useState } from "react";
import "./LoginPage.css";
import unn_banner from "../assets/unnlogo.jpg";
import sentinoa_logo from "../assets/sentinoalogo.png";

function LoginPage() {
    
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Replace this with actual login call (fetch/axios to your backend)
    console.log({ username, password });
  };

  return (
  <div className="page">
    <div className="login-area">
      <img src={unn_banner} alt="unnlogo" />
      <img src={sentinoa_logo} alt="Logo" />

      <div className="lead">Login</div>
      <div id="hint">Login to your account</div>

      <form onSubmit={handleSubmit}>
        <div className="input-label">Username</div>
        <input
          name="username"
          required
          placeholder="Capitalized first and last names"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <br />

        <div className="input-label">Password</div>
        <input
          name="password"
          type="password"
          required
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <br />
        <button type="submit">
          <div>Login</div>
        </button>
      </form>

      {error && <p className="error-text">{error}</p>}
    </div>
  </div>
);

}

export default LoginPage;
