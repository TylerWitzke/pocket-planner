// AttractionItem.jsx

import React from "react";
import PropTypes from "prop-types";
import "./AttractionItem.css"; // Import the CSS file

const AttractionItem = ({
  title,
  picture,
  description,
  locationName,
  locationDistance,
  contact,
  hours,
  onClick,
}) => {
  return (
    <div className="attraction-item-container" onClick={onClick}>
      <div className="attraction-item-text-content">
        <h2 className="attraction-item-title">{title}</h2>
        <div className="attraction-item-picture-container">
          <img src={picture} alt={title} className="attraction-item-picture" />
        </div>
        <div className="attraction-item-details-container">
          {/* Container for details */}
          <p className="attraction-item-info">{description}</p>
          <div className="attraction-item-info">
            {/* Location details */}
            <span className="info-label">Location</span>
            <div className="location-details">
              <span className="info-value" style={{ color: "blue" }}>
                {locationName}
              </span>
              {locationDistance && (
                <span className="info-value" style={{ color: "black" }}>
                  {locationDistance}
                </span>
              )}
            </div>
          </div>
          <div className="attraction-item-info">
            {/* Contact details */}
            <span className="info-label">Contact</span>
            <span className="info-value" style={{ color: "blue" }}>
              {contact}
            </span>
          </div>
          <div className="contact-hours-container">
            {/* Container for hours */}
            <span className="info-label">Hours:</span>
            <span className="attraction-item-info">{hours}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AttractionItem;
