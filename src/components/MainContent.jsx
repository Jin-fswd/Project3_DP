import React from 'react';
import '../styles/MainContent.css';
import VacationCard from './VacationCard';
import HorizontalCard from './HorizontalCard';

function MainContent({ count, setCount }) {
  const handleVacationClick = () => {
    alert('All inclusive vacation package selected!');
  };

  const handleCubaClick = () => {
    alert('Cuba vacation package selected!');
  };

  const handleCaribbeanClick = () => {
    alert('Caribbean vacation package selected!');
  };

  return (
    <div className="app-container">
      <VacationCard 
        image="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=800&auto=format&fit=crop"
        title="ALL INCLUSIVE VACATIONS"
        buttonText="All inclusive vacations"
        onClick={handleVacationClick}
      />
      
      <HorizontalCard 
        image="https://images.unsplash.com/photo-1500759285222-a95626b934cb?q=80&w=800&auto=format&fit=crop"
        title="CUBA UNDER $999"
        onClick={handleCubaClick}
      />
      
      <HorizontalCard 
        image="https://images.unsplash.com/photo-1580237541049-2d715a09486e?q=80&w=800&auto=format&fit=crop"
        title="CARIBBEAN DEALS"
        onClick={handleCaribbeanClick}
      />
      
      <VacationCard 
        image="https://images.unsplash.com/photo-1540541338287-41700207dee6?q=80&w=800&auto=format&fit=crop"
        title="FAMILY VACATIONS"
        buttonText="View family packages"
        onClick={handleVacationClick}
      />
    
    </div>
  );
}

export default MainContent; 