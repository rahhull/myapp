import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import Signup from "./Signup";

const Navbar = () => {
  const [selectedLanguage, setSelectedLanguage] = useState("ENGLISH"); // Default language

  const handleLanguageChange = (event) => {
    setSelectedLanguage(event.target.value);
  };

  return (
    <nav className="navbar">
      <div className="logo">NETFLIX</div>
      <ul className="nav-links">
        <div className="language-dropdown">
          <label className="globe-icon">&#127760;</label> {/* Globe icon */}
          <select value={selectedLanguage} onChange={handleLanguageChange}>
            <option value="ENGLISH">English</option>
            <option value="HINDI">Hindi</option>
          </select>
        </div>
        <li>
          <Link to="/signup">Sign in</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
