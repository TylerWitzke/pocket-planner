import React, { useState } from "react";
import "./Dropdown.css";

const Dropdown = ({ title, list, updateState }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState(title);

  const toggleDropdown = () => setIsOpen(!isOpen);

  const handleItemClick = (item) => {
    setSelectedItem(item);
    updateState(item);
    setIsOpen(false);
  };

  return (
    <div className="dropdown-page-style">
      <div className="dropdown-title" onClick={toggleDropdown}>
        {selectedItem}
      </div>
      {isOpen && (
        <div className="dropdown-list-wrapper">
          <div className="dropdown-list">
            {list.map((item, index) => (
              <div
                key={index}
                className="dropdown-item"
                onClick={() => handleItemClick(item)}
              >
                {item}
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Dropdown;
