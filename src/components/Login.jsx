import React from "react";
import { Link } from "react-router-dom";
import "../styles/login.css"
import Logo from '../assets/Logo.png'

function Login() {
  return (
    <body class ="loginbody">
    <section class="logincontainer">
        <div class="login-container"> 
              <img class ="logo_TU" src={Logo} alt='Logo' /> 
    
            <div class="form-container">     
                <h1 class="opacity">LOGIN</h1>
                <form>
                    <input class = 'user' type="text" placeholder="USERNAME" />
                    <input class = 'user' type="password" placeholder="PASSWORD" />
                    <Link to = "/Learning" ><button class="opacity">SUBMIT</button></Link>
                </form>
            </div>
        </div>
        <div class="theme-btn-container"></div>
    </section>
    </body>
  );
}

export default Login;
