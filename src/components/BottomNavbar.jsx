import React from 'react';
import '../styles/Navbar.css';

function BottomNavbar({ activeTab, setActiveTab }) {
  return (
    <div className="bottom-navbar">
      <div
        className={`nav-item ${activeTab === 'search' ? 'active' : ''}`}
        onClick={() => setActiveTab('search')}
      >
        <div className="nav-icon">
          <span className="material-icons">search</span>
        </div>
        <span>BOOK</span>
      </div>
      <div
        className={`nav-item ${activeTab === 'flight' ? 'active' : ''}`}
        onClick={() => setActiveTab('flight')}
      >
        <div className="nav-icon">
          <span className="material-icons">flight</span>
        </div>
        <span>Flight Status</span>
      </div>
      <div
        className={`nav-item ${activeTab === 'trips' ? 'active' : ''}`}
        onClick={() => setActiveTab('trips')}
      >
        <div className="nav-icon">
          <span className="material-icons">card_travel</span>
        </div>
        <span>My Trips</span>
      </div>
      <div
        className={`nav-item ${activeTab === 'menu' ? 'active' : ''}`}
        onClick={() => setActiveTab('menu')}
      >
        <div className="nav-icon">
          <span className="material-icons">menu</span>
        </div>
        <span>Menu</span>
      </div>
    </div>
  );
}

export default BottomNavbar; 