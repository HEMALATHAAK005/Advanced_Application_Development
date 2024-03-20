import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Link , useNavigate } from 'react-router-dom';
import '../css/Signup.css'; 

function SignupPage() {
  const [newUsername, setNewUsername] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [signupError, setSignupError] = useState('');
  const navigate = useNavigate();
  

  const handleNewUsernameChange = (event) => {
    setNewUsername(event.target.value);
  };

  const handleNewPasswordChange = (event) => {
    setNewPassword(event.target.value);
  };

  const handleConfirmPasswordChange = (event) => {
    setConfirmPassword(event.target.value);
  };

  const handleSignup = () => {
    // Add your signup logic here (e.g., create a new user on the server).
    if (newPassword !== confirmPassword) {
      setSignupError('Passwords do not match');
    } else {
      // Perform signup actions (e.g., API request to create a new user).
      console.log('User signed up successfully!');
      
      setNewUsername('');
      setNewPassword('');
      setConfirmPassword('');
      setSignupError('');
      navigate("/login");
    }
  };

  return (
    <div className="container">
      
      <div className="signup">
        <h3 className="title">Create an Account</h3>
        <div className="text-input">
          <i className="ri-user-fill"></i>
          <input type="text" placeholder="Username" value={newUsername} onChange={handleNewUsernameChange} />
        </div>
        <div className="text-input">
          <i className="ri-lock-fill"></i>
          <input type="password" placeholder="Password" value={newPassword} onChange={handleNewPasswordChange} />
        </div>
        <div className="text-input">
          <i className="ri-lock-fill"></i>
          <input type="password" placeholder="Confirm Password" value={confirmPassword} onChange={handleConfirmPasswordChange} />
        </div>
        <button className="signup-btn" onClick={handleSignup}>SIGN UP</button>
        <br/>
        <p className="error">{signupError}</p>
        <br/>
        
      </div>
    </div>
  );
}

export default SignupPage;