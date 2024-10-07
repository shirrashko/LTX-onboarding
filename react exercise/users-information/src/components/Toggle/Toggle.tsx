import React, { useState } from 'react';
import listIcon from '../../assets/list-icon.svg';
import gridIcon from '../../assets/grid-icon.svg';
import './Toggle.scss';

const Toggle = () => {
  const [isGridView, setIsGridView] = useState(true);

  const handleToggle = () => {
    setIsGridView(!isGridView); // Toggle between Grid and List views
  };

  return (
    <div className="toggle">
      <div
        className={`toggle-button ${isGridView ? 'grid-active' : 'list-active'}`}
        onClick={handleToggle}
      >
        <span className="toggle-ellipse" />
        <img src={gridIcon} alt="Grid Icon" className="grid-icon" />
        <img src={listIcon} alt="List Icon" className="list-icon" />
      </div>
    </div>
  );
};

export default Toggle;