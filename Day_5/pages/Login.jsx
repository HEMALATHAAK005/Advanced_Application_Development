import React, { useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import '../css/Login.css';

function Login() {
  const email = useRef();
  const password = useRef();
  const username = useRef();
  const [loginMsg, setLoginMsg] = useState("Welcome back");
  const navigate = useNavigate();

  function validateEmail(emailValue) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const isDomainLowercase = emailValue.split("@")[1].toLowerCase() === emailValue.split("@")[1];
    return emailRegex.test(emailValue) && isDomainLowercase;
  }

  function validatePassword(passwordValue) {
    const hasLowerCase = /[a-z]/.test(passwordValue);
    const hasSpecialChar = /[!@#$%^&*()_+\-=\[\]{};':\\|,.<>/?`~]/.test(passwordValue);
    const minLength = 8;
    return (
      passwordValue.length >= minLength &&
      hasLowerCase &&
      hasSpecialChar
    );
  }

  function handleLogin() {
    const enteredEmail = email.current.value;
    const enteredPassword = password.current.value;
    const enteredUsername = username.current.value;

    if (!enteredEmail || !enteredPassword || !enteredUsername) {
      setLoginMsg("Please enter your email, username, and password.");
      return;
    }

    if (!validateEmail(enteredEmail)) {
      setLoginMsg("Invalid email format. Please try again.");
      return;
    }

    if (!validatePassword(enteredPassword)) {
      setLoginMsg(
        "Password must be at least 8 characters long and include lowercase and special characters."
      );
      return;
    }

    if (enteredUsername === "admin" && enteredPassword === "Admin@123") {
      // Redirect to dashboard if username is "admin" and password is "admin123"
      navigate("/bookhome");
      return;
    }

    setLoginMsg("Logging in...");
    setTimeout(() => {
      const isLoginSuccessful = true;

      if (isLoginSuccessful) {
        setLoginMsg("Login successful!");
        // Redirect to dashboard or any other page on successful login
        navigate("/");
      } else {
        setLoginMsg("Invalid email or password. Please try again.");
      }
    }, 2000);
  }

  return (
    <div className="container">
      <div className="login">
        <br/> <br/>
        <h2 className="title">Login</h2>
        <p id="login_msg">{loginMsg}</p>
        <br/>
        <div className="text-input">
          <i className="ri-user-fill"></i>
          <input
            type="text"
            ref={username}
            placeholder="Enter your username"
            id="username"
          />
        </div>
        <div className="text-input">
          <i className="ri-user-fill"></i>
          <input
            type="email"
            ref={email}
            placeholder="Enter your email"
            id="email"
          />
        </div>
        <div className="text-input">
          <i className="ri-lock-fill"></i>
          <input
            type="password"
            ref={password}
            placeholder="Enter your password"
            id="password"
          />
        </div>
        <br/>
        <button className="login-btn" onClick={handleLogin}>
          LOGIN
        </button>
       
        <h5 >Don't have account?</h5>
        <Link to="/signup">
          <h3> Signup</h3>
        </Link>
        <br />
        <br />
      </div>
    </div>
  );
}

export default Login;
