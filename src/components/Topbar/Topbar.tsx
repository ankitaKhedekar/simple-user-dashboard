import React from "react";
import { Link } from "react-router-dom";
import "./Topbar.css"; // Optional if using custom CSS

const Topbar = () => {
  return (
    <div className="topbar flex justify-between items-center px-6 py-3 bg-white shadow">
      <div className="logo text-xl font-bold text-blue-600">Your App</div>
      <div className="menu space-x-6 text-gray-800">
        <Link to="/">Home</Link>
        <Link to="/settings">Settings</Link>
      </div>
    </div>
  );
};

export default Topbar;
