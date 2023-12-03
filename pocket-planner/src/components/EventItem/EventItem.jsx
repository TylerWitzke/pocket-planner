import React from "react";
import PropTypes from "prop-types";
import "./EventItem.css";

const EventItem = ({ title, date, location, picture }) => {
  const isScotiabankSaddledome = location === "Scotiabank Saddledome";
  const isBuyTicketsOrDirections =
    title.includes("Buy Tickets") || title.includes("Directions");

  return (
    <div className="event-item">
      <h2 className="title">{title}</h2>
      <div className="image-container">
        <img src={picture} alt={title} />
      </div>
      <div className="content-container">
        <p className="date">
          Date: <br />
          <span className="black-text">{date}</span>
        </p>
        <p className="location">
          Location: <br />
          <span className={isScotiabankSaddledome ? "blue-text" : "black-text"}>
            {location}
          </span>
        </p>
        {isBuyTicketsOrDirections ? (
          <>
            <p className="blue-text">{title}</p>
            {title.includes("Directions") && (
              <p className="directions-padding">
                {/* Add padding for Directions */}
              </p>
            )}
          </>
        ) : (
          <>
            <p className="blue-text">Buy Tickets</p>
            <p className="blue-text directions-padding">Directions</p>
          </>
        )}
      </div>
    </div>
  );
};

export default EventItem;
