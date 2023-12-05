// GeneralButton.js
import React from "react";
import PropTypes from "prop-types";
import "./GeneralButton.css"; // Import the CSS file

const GeneralButton = ({
  label,
  onClick,
  paddingBottom,
  paddingTop,
  height,
  width,
  border,
}) => {
  return (
    <div
      className="general-button-container"
      style={{
        paddingBottom: paddingBottom,
        paddingTop: paddingTop,
      }}
    >
      <button
        onClick={onClick}
        className="button"
        style={{
          height: height,
          width: width,
          borderRadius: border,
        }}
      >
        {label}
      </button>
    </div>
  );
};

GeneralButton.propTypes = {
  label: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  disabled: PropTypes.bool,
};

GeneralButton.defaultProps = {
  disabled: false,
};

export default GeneralButton;
