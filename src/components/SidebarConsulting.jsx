import React from "react";
import { BiBookAlt } from "react-icons/bi";
import "../styles/sidebar.css";

import { Link } from "react-router-dom";

const SidebarConsulting = () => {
  return (
    <div className="menu">
      <div className="logo">
        <BiBookAlt className="logo-icon" />
        <h1>Tu Yee</h1>
      </div>

      <nav className="menu--list">
        <Link to="/Learning" className="item">
          Learning
        </Link>
        <Link to="/Consulting" className="item active">
          Consulting
        </Link>
        <Link to="/Convenient" className="item">
          Convenient
        </Link>
        <Link to="/Accommodation" className="item">
          Accommodation
        </Link>
        <Link to="/Communitypage" className="item">
          Community
        </Link>
        <Link to="/LoginPage" className="item">
          Logout
        </Link>
      </nav>
    </div>
  );
};

export default SidebarConsulting;
