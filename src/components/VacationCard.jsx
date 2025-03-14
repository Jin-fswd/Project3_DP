import React from 'react';
import '../styles/VacationCard.css';

function VacationCard({ image, title, buttonText, onClick }) {
  return (
    <div className="vacation-card">
      <div className="vacation-card-image-container">
        <img src={image} alt={title} className="vacation-card-image" />
      </div>
      <div className="vacation-card-content">
        <h3 className="vacation-card-title">{title}</h3>
        <button 
          className="vacation-card-button"
          onClick={onClick}
        >
          {buttonText}
        </button>
      </div>
    </div>
  );
}

export default VacationCard; 