import React, { useState } from "react";
import "./ParentDashboard.css"; // Make sure to create/import this CSS file

const iframeStyle = {
  position: "absolute",
  left : "650px",
  width: "30%",
  height: "650px",
  border: "none",
  borderRadius: "12px",
};

export default function ParentDashboard() {
  const [activePage, setActivePage] = useState("home"); // "home", "add", "restrict", "view"

  return (
    <div className="flex h-screen font-sans">
      {/* Sidebar */}
      <div className="sidebar">
        <div className="sidebar-title">Parent Panel</div>
        <button
          onClick={() => setActivePage("home")}
          className={`menu-btn ${activePage === "home" ? "active" : ""}`}
        >
          Home
        </button>
        <button
          onClick={() => setActivePage("add")}
          className={`menu-btn ${activePage === "add" ? "active" : ""}`}
        >
          Add Members
        </button>
        <button
          onClick={() => setActivePage("restrict")}
          className={`menu-btn ${activePage === "restrict" ? "active" : ""}`}
        >
          Set Restrictions
        </button>
        <button
          onClick={() => setActivePage("view")}
          className={`menu-btn ${activePage === "view" ? "active" : ""}`}
        >
          View Reports
        </button>
        <button
          className="logout-btn"
          // onClick here should handle logout logic
        >
          Logout
        </button>
      </div>

      {/* Main content */}
      <div className="main-content">
        {activePage === "home" && (
          <div className="center-box">
            <h2>Welcome to the Parent Dashboard</h2>
            <p>Select an option from the menu.</p>
          </div>
        )}
        {activePage === "add" && (
          <iframe
            title="Add Members"
            src="http://localhost:3004"
            style={iframeStyle}
          />
        )}
        {activePage === "restrict" && (
          <iframe
            title="Set Restrictions"
            src="http://localhost:3005"
            style={iframeStyle}
          />
        )}
        {activePage === "view" && (
          <iframe
            title="View Members & Reports"
            src="http://localhost:3006"
            style={iframeStyle}
          />
        )}
      </div>
    </div>
  );
}
