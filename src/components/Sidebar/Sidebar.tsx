import React from "react";
import { FaBars, FaHome, FaUser, FaCog } from "react-icons/fa";
import { Link } from "react-router-dom";
import "./Sidebar.css";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <Link to="/" className="active">
        <FaHome className="icon" /> Home
      </Link>
      <Link to="/users">
        <FaUser className="icon" /> Users
      </Link>   
      <Link to="/usersdetails">
        <FaUser className="icon" /> Usersdetails
      </Link> 
      <Link to="/analytics">
        <FaUser className="icon" /> Analytics
      </Link>
    
      <Link to="/settings">
        <FaCog className="icon" /> Settings
      </Link>
      <div className="footer">© 2025 Your App</div>
    </div>
  );
};

export default Sidebar;
