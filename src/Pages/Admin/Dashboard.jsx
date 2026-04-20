import React, { useState } from "react";

function Dashboard() {
  const [show, setShow] = useState(false);

  return (
    <div className="d-flex" style={{ position: "relative" }}>

      {/* Overlay for mobile */}
      {/* {show && (
        <div
          className="d-md-none"
          onClick={() => setShow(false)}
          style={{
            position: "fixed", inset: 0,
            background: "rgba(0,0,0,0.4)", zIndex: 100
          }}
        />
      )} */}

      {/* Sidebar */}
      <div
        className={`bg-dark text-white p-3 ${show ? "d-block" : "d-none"} d-md-block`}
        style={{
          width: "250px", minHeight: "100vh",
          position: "fixed", top: 0, left: 0,  // ← fixed on mobile
          zIndex: 200
        }}
      >
        <h5>Admin <button className="d-md-none btn btn-dark" style={{marginLeft:100}} onClick={()=>setShow(false)}>☰</button></h5>
        <ul className="nav flex-column mt-3">
          <li className="nav-item"><a href="#" className="nav-link text-white">Dashboard</a></li>
          <li className="nav-item"><a href="#" className="nav-link text-white">Users</a></li>
          <li className="nav-item"><a href="#" className="nav-link text-white">Settings</a></li>
        </ul>
      </div>

      {/* Spacer to prevent content hiding behind fixed sidebar on desktop */}
      <div className="d-none d-md-block" style={{ width: "250px", flexShrink: 0 }} />

      {/* Main Content */}
      <div className="flex-grow-1">
        <nav className="navbar bg-light px-3">
          <button
            className="btn btn-primary d-md-none"
            onClick={() => setShow(!show)}
          >
            ☰
          </button>
          <span className="navbar-brand ms-2">Dashboard</span>
        </nav>
        <div className="p-3">
          <h3>Welcome Admin</h3>
        </div>
      </div>

    </div>
  );
}

export default Dashboard;