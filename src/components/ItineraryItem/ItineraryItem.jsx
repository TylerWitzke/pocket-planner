// ItineraryItem.jsx

import React from "react";
import PropTypes from "prop-types";
import "./ItineraryItem.css"; // Update the import

const ItineraryItem = ({
  title,
  onClick,
  location,
  contact,
  dateTime,
  duration,
  picture,
}) => {
  return (
    <div className="container" onClick={onClick}>
      <div className="details">
        <h2 className="title">{title}</h2>
        <img src={picture} alt="Itinerary" className="image" />
        <p className="info" data-label="Location:">
          <span style={{ color: "blue" }}>{location}</span>
        </p>
        <p className="info" data-label="Contact:">
          <span style={{ color: "blue" }}>{contact}</span>
        </p>
        <p className="info" data-label="Date & Time:">
          {dateTime}
        </p>
        <p className="info" data-label="Duration:">
          {duration}
        </p>
      </div>
    </div>
  );
};

export default ItineraryItem;
