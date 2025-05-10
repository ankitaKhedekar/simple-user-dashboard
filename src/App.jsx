import React from "react";
import Sidebar from "./components/Sidebar";
import Topbar from "./components/Topbar";
import "./App.css";

const App = () => {
  return (
    <div className="app-container">
      <Sidebar />
      <div className="content">
        <Topbar />
        <div className="main-content">
          <h1>Welcome to the Dashboard</h1>
          {/* Your content here */}
        </div>
      </div>
    </div>
  );
};

export default App;
