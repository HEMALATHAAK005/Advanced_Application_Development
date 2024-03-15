import React, { useState } from "react";
import "../assets/css/Register.css"; 

function Register() {
  const [registerMsg, setRegisterMsg] = useState("");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  function handleChange(event) {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  }

  function handleSubmit(event) {
    event.preventDefault();

    // Perform validation checks for all fields (name, email, password, confirmPassword)
    // ... (implement validation logic here)

    if (allFieldsValid) {
      // Simulate registration API call (replace with actual logic)
      console.log("Attempting registration...");
      setRegisterMsg("Processing..."); // Update message during registration attempt

      setTimeout(() => {
        // Simulate successful registration after 2 seconds (replace with actual logic)
        setRegisterMsg("Registration successful!");
      }, 2000);
    } else {
      // Set appropriate error messages if validation fails
    }
  }

  return (
    <div id="register_container">
      <div id="register_box">
        <h1 id="register_title">Register</h1>
        <p id="register_msg">{registerMsg}</p>
        <form id="register_form" onSubmit={handleSubmit}>
          {/* Add fields for name, email, password, confirmPassword */}
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Enter your name"
          />
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Enter your email"
          />
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            placeholder="Enter your password"
          />
          <input
            type="password"
            name="confirmPassword"
            value={formData.confirmPassword}
            onChange={handleChange}
            placeholder="Confirm your password"
          />
          <button type="submit">Register</button>
        </form>
      </div>
    </div>
  );
}

export default Register;
