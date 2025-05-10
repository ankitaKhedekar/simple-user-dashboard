// src/App.tsx
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Sidebar from "./components/Sidebar/Sidebar";
import Topbar from "./components/Topbar/Topbar";
import Home from "./pages/Home";
import Settings from "./pages/Settings";
import Users from "./pages/Users";
import Analytics from "./pages/Analytics";
import UserDetails from "./pages/UserDetails";


const App = () => {
  return (
    <Router>
      <Routes>
        {/* Route that shows only Profile page */}
        <Route path="/users" element={<Users />} />
              <Route path="/analytics" element={<Analytics />} />
        <Route path="/settings" element={<Settings />} />
<Route path="/usersdetails" element={<UserDetails />} />

        {/* Routes with layout (Sidebar + Topbar) */}
        <Route
          path="*"
          element={
            <div className="app-container">
              <Sidebar />
              <div className="content">
                <Topbar />
                <div className="main-content">
                  <Routes>
                    <Route path="/" element={<Home />} />
                  </Routes>
                </div>
              </div>
            </div>
          }
        />
      </Routes>
    </Router>
  );
};

export default App;
