// ItineraryItem.jsx

import React from "react";
import PropTypes from "prop-types";
import "./ItineraryItem.css"; // Update the import

const ItineraryItem = ({
  title,
  picture,
  locationName,
  contact,
  dateTime,
  duration,
}) => {
  return (

    <div className="itinerary-item-container">
      <div className="itinerary-item-text-content">
        <h2 className="itinerary-item-title">{title}</h2>
        <div className="itinerary-item-picture-container">
          <img src={picture} alt={title} className="itinerary-item-picture" />
        </div>
        <div className="itinerary-item-details-container">
          <div className="itinerary-item-info">
            {/* Location details */}
            <span className="info-label">Location:</span>
            <div className="location-details">
              <span className="info-value" style={{ color: "blue" }}>
                {locationName}
              </span>
            </div>
          </div>

          <div className="itinerary-item-info">
            {/* Contact details */}
            <span className="info-label">Contact:</span>
            <span className="info-value" style={{ color: "blue" }}>
              {contact}
            </span>
          </div>

          <div className="contact-hours-container">
            {/* Container for hours */}
            <span className="info-label">Date & Time:</span>
            <span className="itinerary-item-info">{dateTime}</span>
          </div>

          <div className="contact-hours-container">
            {/* Container for hours */}
            <span className="info-label">Duration:</span>
            <span className="itinerary-item-info">{duration}</span>
          </div>

        </div>
      </div>
    </div>
  );
};

export default ItineraryItem;
