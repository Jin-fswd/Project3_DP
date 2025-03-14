import React, { useState, useRef, useEffect } from 'react';
import '../styles/BookingPage.css';

// NoResultsModal 컴포넌트 추가
const NoResultsModal = ({ onClose, alternativeDates }) => {
  return (
    <>
      <div className="modal-overlay" onClick={onClose} />
      <div className="no-results-modal">
        <div className="modal-header">
          <h3>No Available Rooms</h3>
        </div>
        <div className="modal-content">
          <p>We couldn't find any rooms for your selected dates. Here are some alternative options:</p>
          <div className="alternative-dates">
            {alternativeDates.map((date, index) => (
              <div key={index} className="date-suggestion">
                <span className="material-icons date-suggestion-icon">event_available</span>
                <div className="date-suggestion-info">
                  <div>{date.dates}</div>
                  <small>Available rooms: {date.rooms}</small>
                </div>
                <div className="date-suggestion-price">
                  ${date.price}
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="modal-actions">
          <button className="modal-button secondary" onClick={onClose}>
            Close
          </button>
          <button className="modal-button primary">
            View All Availability
          </button>
        </div>
      </div>
    </>
  );
};

function BookingPage() {
  const [from, setFrom] = useState('Vancouver');
  const [to, setTo] = useState('Cancun');
  const [departDate, setDepartDate] = useState('Sat, Mar 15');
  const [returnDate, setReturnDate] = useState('Sat, Mar 22');
  const [rooms, setRooms] = useState(1);
  const [adults, setAdults] = useState(2);
  const [children, setChildren] = useState(0);
  const [activeTab, setActiveTab] = useState('beach');
  const [showNoResults, setShowNoResults] = useState(false);
  
  // 각 입력 필드에 대한 ref 생성
  const fromInputRef = useRef(null);
  const toInputRef = useRef(null);
  
  // 입력 필드에 포커스가 있을 때 스크롤 조정
  const handleFocus = (e) => {
    // 모바일 환경에서 키보드가 올라오는데 약간의 시간이 필요하므로 지연 적용
    setTimeout(() => {
      // 입력 필드가 화면 중앙에 오도록 스크롤 조정
      e.target.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }, 300);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setShowNoResults(true); // 모달 표시
  };

  const alternativeDates = [
    {
      dates: "Sep 15-18, 2024",
      rooms: 3,
      price: "299"
    },
    {
      dates: "Sep 22-25, 2024",
      rooms: 5,
      price: "279"
    },
    {
      dates: "Sep 29-Oct 2, 2024",
      rooms: 2,
      price: "319"
    }
  ];

  const handleSearch = () => {
    // 검색 로직...
    setShowNoResults(true); // 결과가 없을 때 모달 표시
  };

  return (
    <div className="booking-page">
      <div className="booking-tabs">
        <div className={`tab-item ${activeTab === 'beach' ? 'active' : ''}`} onClick={() => setActiveTab('beach')}>
          <span className="material-icons">beach_access</span>
        </div>
        <div className={`tab-item ${activeTab === 'flight' ? 'active' : ''}`} onClick={() => setActiveTab('flight')}>
          <span className="material-icons">flight</span>
        </div>
        <div className={`tab-item ${activeTab === 'hotel' ? 'active' : ''}`} onClick={() => setActiveTab('hotel')}>
          <span className="material-icons">hotel</span>
        </div>
        <div className={`tab-item ${activeTab === 'cruise' ? 'active' : ''}`} onClick={() => setActiveTab('cruise')}>
          <span className="material-icons">directions_boat</span>
        </div>
      </div>
      
      <h2 className="booking-title">Find your perfect vacation now</h2>
      
      <form className="booking-form" onSubmit={handleSubmit}>
        <div className="form-field">
          <label htmlFor="from">From</label>
          <div className="input-with-icon">
            <input 
              ref={fromInputRef}
              type="text" 
              id="from" 
              placeholder="City or Airport"
              value={from}
              onChange={(e) => setFrom(e.target.value)}
              onFocus={handleFocus}
              required
            />
            <button type="button" className="list-button">
              <span className="material-icons">list</span>
            </button>
          </div>
        </div>
        
        <div className="form-field">
          <label htmlFor="to">To</label>
          <div className="input-with-icon">
            <input 
              ref={toInputRef}
              type="text" 
              id="to" 
              placeholder="Destination or hotel"
              value={to}
              onChange={(e) => setTo(e.target.value)}
              onFocus={handleFocus}
              required
            />
            <button type="button" className="list-button">
              <span className="material-icons">list</span>
            </button>
          </div>
        </div>
        
        <div className="form-field">
          <label htmlFor="dates">Dates</label>
          <div className="date-field" onClick={handleFocus}>
            <div className="date-display">
              <span>{departDate}</span>
              <span className="date-separator"></span>
              <span>{returnDate}</span>
            </div>
            <button type="button" className="calendar-button">
              <span className="material-icons">calendar_month</span>
            </button>
          </div>
        </div>
        
        <div className="form-field">
          <label htmlFor="guests">Rooms & Guests</label>
          <div className="guests-display" onClick={handleFocus}>
            <span>{rooms} Room, {adults} Adults{children > 0 ? `, ${children} Children` : ''}</span>
            <button type="button" className="guests-button">
              <span className="material-icons">people</span>
            </button>
          </div>
        </div>
        
        <button type="submit" className="search-button">
          Search
        </button>
      </form>

      {showNoResults && (
        <NoResultsModal
          onClose={() => setShowNoResults(false)}
          alternativeDates={alternativeDates}
        />
      )}
    </div>
  );
}

export default BookingPage; 