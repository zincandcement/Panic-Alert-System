import { useState } from "react";
import "./LoginPage.css";
import logo from "../assets/unnlogo.jpg";
import logo from "../assets/sentinoalogo.png";

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
      <img src={banner} alt="unnlogo">
      <img src={logo} alt="Logo" />  
      
    
    <div className="page">
      <div className="login-area">
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
