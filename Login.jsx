import React, { useRef, useState } from "react";
import "../assets/css/Login.css"; // Assuming the CSS file is named Login.css

function Login() {
  const emailRef = useRef();
  const passwordRef = useRef();
  const [loginMsg, setLoginMsg] = useState("Welcome back");

  function handleSubmit() {
    const email = emailRef.current.value;
    const password = passwordRef.current.value;

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Basic email validation
    if (!emailRegex.test(email)) {
      setLoginMsg("Invalid email format");
      return;
    }

    // Password constraints (adjust as needed)
    const passwordConditions =
      password.length >= 8 &&
      /[a-z]/.test(password) &&
      /[A-Z]/.test(password) &&
      /[0-9]/.test(password);
    if (!passwordConditions) {
      setLoginMsg(
        "Password must be at least 8 characters, contain a lowercase letter, uppercase letter, and a number"
      );
      return;
    }

    // Simulate API call (replace with your actual authentication logic)
    console.log("Attempting login...");
    setLoginMsg("Processing..."); // Update message during login attempt

    setTimeout(() => {
      // Simulate successful login after 2 seconds (replace with actual logic)
      setLoginMsg("Login successful!");
    }, 2000);
  }

  return (
    <div id="login_container">
      <div id="login_box">
        <h1 id="login_title">Login</h1>
        <p id="login_msg">{loginMsg}</p>
        <form id="login_form">
          <input
            type="email"
            ref={emailRef}
            placeholder="Enter your email"
            id="email"
          />
          <input
            type="password"
            ref={passwordRef}
            placeholder="Enter your password"
            id="password"
          />
          <button id="login_btn" type="button" onClick={handleSubmit}>
            Login
          </button>
        </form>
      </div>
    </div>
  );
}

export default Login;
