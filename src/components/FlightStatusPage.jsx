import React, { useState } from 'react';
import '../styles/FlightStatusPage.css';

function FlightStatusPage() {
  const [searchBy, setSearchBy] = useState('flightNumber');
  const [flightDate, setFlightDate] = useState('2025-03-14');
  const [flightNumber, setFlightNumber] = useState('');
  const [airlineCode, setAirlineCode] = useState('WG');
  const [showRemoveAlert, setShowRemoveAlert] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`항공편 상태 검색\n검색 방법: ${searchBy}\n날짜: ${flightDate}\n항공사: ${airlineCode}\n항공편 번호: ${flightNumber}`);
  };

  const toggleRemoveAlert = () => {
    setShowRemoveAlert(!showRemoveAlert);
  };

  return (
    <div className="flight-status-page">
      <h1 className="flight-status-title">FLIGHT STATUS AND ALERTS</h1>
      
      <div className="flight-status-info">
        <p className="flight-status-description">
          Check the status of your upcoming flight by searching for your route and original 
          flight date. Flight status is updated as new information becomes available. Be sure to check back 
          frequently for the latest information or subscribe to receive flight alerts to your email or mobile phone.
        </p>
      </div>
      
      <p className="flight-status-note">For all other airlines, please check their website.</p>
      
      <div className="remove-alert-section">
        <button className="remove-alert-button" onClick={toggleRemoveAlert}>
          Remove flight alert(s) 
          <span className="material-icons">{showRemoveAlert ? 'keyboard_arrow_up' : 'keyboard_arrow_down'}</span>
        </button>
        
        {showRemoveAlert && (
          <div className="remove-alert-content">
            {/* 알림 제거 컨텐츠 */}
            <p>No flight alerts to remove.</p>
          </div>
        )}
      </div>
      
      <div className="flight-status-card">
        <h2 className="flight-status-card-title">Flight status & alert</h2>
        <p className="flight-status-card-subtitle">Please search by your flight number or route</p>
        
        <div className="search-options">
          <label className="radio-container">
            <input 
              type="radio" 
              name="searchBy" 
              value="flightNumber" 
              checked={searchBy === 'flightNumber'} 
              onChange={() => setSearchBy('flightNumber')}
            />
            <span className="radio-custom"></span>
            By flight number
          </label>
          
          <label className="radio-container">
            <input 
              type="radio" 
              name="searchBy" 
              value="route" 
              checked={searchBy === 'route'} 
              onChange={() => setSearchBy('route')}
            />
            <span className="radio-custom"></span>
            By route
          </label>
        </div>
        
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="date">Date</label>
            <div className="input-with-icon">
              <input 
                type="date" 
                id="date" 
                value={flightDate}
                onChange={(e) => setFlightDate(e.target.value)}
                required
              />
            </div>
          </div>
          
          {searchBy === 'flightNumber' ? (
            <div className="form-group">
              <label htmlFor="flightNumber">Flight #</label>
              <div className="flight-number-input">
                <div className="airline-code">
                  <input 
                    type="text" 
                    value={airlineCode}
                    onChange={(e) => setAirlineCode(e.target.value)}
                    maxLength={2}
                    required
                  />
                </div>
                <input 
                  type="text" 
                  id="flightNumber" 
                  placeholder="Flight Number"
                  value={flightNumber}
                  onChange={(e) => setFlightNumber(e.target.value)}
                  required
                />
                <span className="material-icons dropdown-icon">arrow_drop_down</span>
              </div>
            </div>
          ) : (
            <>
              <div className="form-group">
                <label htmlFor="from">From</label>
                <input 
                  type="text" 
                  id="from" 
                  placeholder="City or Airport"
                  required
                />
              </div>
              
              <div className="form-group">
                <label htmlFor="to">To</label>
                <input 
                  type="text" 
                  id="to" 
                  placeholder="City or Airport"
                  required
                />
              </div>
            </>
          )}
          
          <button type="submit" className="check-status-button">
            Check Status
          </button>
        </form>
      </div>
    </div>
  );
}

export default FlightStatusPage; 