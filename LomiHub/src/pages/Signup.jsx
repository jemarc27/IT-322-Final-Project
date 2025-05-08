import React from 'react';
import './Signup.css';  // Import the CSS file here

function Signup() {
  return (
    <div className="container">
      <div className="form-box">
        <img src="logo.png" alt="LomiHub Logo" className="logo" />
        <h2>LomiHub</h2>
        <form>
          <input type="email" placeholder="Email" required />
          <div className="password-field">
            <input type="password" placeholder="Password" required />
            <span className="toggle">👁</span>
          </div>
          <div className="password-field">
            <input type="password" placeholder="Confirm Password" required />
            <span className="toggle">👁</span>
          </div>
          <button type="submit">Sign Up</button>
        </form>
        <p className="login-link">
          Already have an account? <a href="#">Log in</a>
        </p>
      </div>
    </div>
  );
}

export default Signup;
