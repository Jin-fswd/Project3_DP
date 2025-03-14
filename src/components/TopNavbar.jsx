import React, { useState } from 'react';
import '../styles/Navbar.css';
import '@fontsource/material-icons';
import sunwingLogo from '../assets/icons/sunwinglogo.svg';

function TopNavbar() {
  const [showNotifications, setShowNotifications] = useState(false);
  const notifications = [
    {
      id: 1,
      message: "Your Cancun trip has been confirmed!",
      time: "Just now",
      icon: "✈️",
      isNew: true
    },
    {
      id: 2,
      message: "Hotel booking completed: Cancun Hilton",
      time: "5 minutes ago",
      icon: "🏨",
      isNew: true
    },
    {
      id: 3,
      message: "Flight schedule updated for your trip",
      time: "1 hour ago",
      icon: "🕒",
      isNew: false
    }
  ];

  const handleNotificationClick = () => {
    setShowNotifications(!showNotifications);
  };

  const newNotifications = notifications.filter(notif => notif.isNew).length;

  return (
    <div className="top-navbar">
      <a href="/" className="logo-container">
        <img 
          src={sunwingLogo}
          alt="Sunwing Logo"
          className="navbar-logo"
        />
      </a>
      <div className="top-navbar-actions">
        <div className="notification-container">
          <button className="icon-button" aria-label="Notifications" onClick={handleNotificationClick}>
            <span className="material-icons" style={{ color: 'white' }}>
              notifications
            </span>
            {newNotifications > 0 && (
              <span className="notification-badge">{newNotifications}</span>
            )}
          </button>
          {showNotifications && (
            <div className="notification-popup">
              <div className="notification-header">
                <h3>Notifications</h3>
                <span className="notification-count">{notifications.length} messages</span>
              </div>
              <div className="notification-list">
                {notifications.map((notification) => (
                  <div key={notification.id} className={`notification-item ${notification.isNew ? 'new' : ''}`}>
                    <span className="notification-icon">{notification.icon}</span>
                    <div className="notification-content">
                      <p className="notification-message">{notification.message}</p>
                      <span className="notification-time">{notification.time}</span>
                    </div>
                    {notification.isNew && <span className="new-indicator"></span>}
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
        <button className="icon-button" aria-label="Profile">
          <span className="material-icons" style={{ color: 'white' }}>
            person
          </span>
        </button>
      </div>
    </div>
  );
}

export default TopNavbar; 