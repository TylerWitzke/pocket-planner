import React from "react";
import PropTypes from "prop-types";
import "./InputBox.css"; // Import the CSS file for styling

const InputBox = ({ icon, placeholder, value, onChange, type }) => {
  return (
    <div className="input-box-container">
      {icon && <img src={icon} alt="Icon" className="icon" />}
      <input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className="input-box"
      />
    </div>
  );
};

InputBox.propTypes = {
  icon: PropTypes.string, // URL or import for the icon
  placeholder: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func,
};

export default InputBox;
