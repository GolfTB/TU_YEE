import React, { useState } from "react";
import { Link } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase";
import { useNavigate } from "react-router-dom";
import "../styles/login.css";
import Logo from "../assets/Logo.png";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );
      console.log(userCredential);
      const user = userCredential.user;
      navigate("/Learning");
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <body class="loginbody">
      <section class="logincontainer">
        <div class="login-container">
          <img class="logo_TU" src={Logo} alt="Logo" />
          <div class="form-container">
            <h1 class="opacity">LOGIN</h1>
            <form onSubmit={handleSubmit}>
              <div>
                <input
                  type="email"
                  class="user"
                  placeholder="Your Email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div>
                <input
                  type="password"
                  class="user"
                  placeholder="Your Password"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              {error && <p>{error}</p>}
              <button type="submit">Login</button>
            </form>
          </div>
        </div>
        <div class="theme-btn-container"></div>
      </section>
    </body>
  );
}

export default Login;
