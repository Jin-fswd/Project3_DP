import React from 'react';
import '../styles/HorizontalCard.css';

function HorizontalCard({ image, title, buttonText, onClick }) {
  return (
    <div className="horizontal-card">
      <div className="horizontal-card-image-container">
        <img src={image} alt={title} className="horizontal-card-image" />
      </div>
      <div className="horizontal-card-content">
        <h3 className="horizontal-card-title">{title}</h3>
        <div className="horizontal-card-arrow">
          <span className="material-icons">chevron_right</span>
        </div>
      </div>
    </div>
  );
}

export default HorizontalCard;