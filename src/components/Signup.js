// SignupPage.js
import React, { useState } from 'react';
import './Signup.css'; // Import the CSS file for styling

const Signup = () => {
  const [rememberMe, setRememberMe] = useState(false);

  const handleCheckboxChange = () => {
    setRememberMe(!rememberMe);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Add signup form submission logic here
  };
  

  return (
    <div className="signup-container">
      <form className="signup-form" onSubmit={handleSubmit}>
        <h2>Sign Up</h2>
        <input type="text" placeholder="Username" />
        <input type="password" placeholder="Password" />
        
        <button type="submit">Sign Up</button>
        <div className="remember-me">
          <input
            type="checkbox"
            id="rememberMeCheckbox"
            checked={rememberMe}
            onChange={handleCheckboxChange}
          />
          <label htmlFor="rememberMeCheckbox">Remember me</label>
        </div>
        <p>
          Need help? <a href="#">Help</a>
        </p>
        <p>
          Already have an account? <a href="#">Sign In now</a>
        </p>
      </form>
    </div>
  );
};

export default Signup;
