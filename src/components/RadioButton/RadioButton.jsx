// RadioButton.jsx
import React, { useState } from "react";

const RadioButton = ({ options, onChange }) => {
  const [selectedOption, setSelectedOption] = useState(null);

  const handleOptionChange = (option) => {
    setSelectedOption(option);
    onChange(option);
  };

  return (
    <div className="radio-button">
      {options.map((option) => (
        <label key={option.value} className="radio-button-label">
          <input
            type="radio"
            id={option.value} // Add unique id for each input
            value={option.value}
            checked={selectedOption === option.value}
            onChange={() => handleOptionChange(option.value)}
          />
          {option.label}
        </label>
      ))}
    </div>
  );
};

export default RadioButton;
