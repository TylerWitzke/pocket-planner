import React from 'react'
import PropTypes from 'prop-types';
import './Item.css'; // Import the CSS file

const Item = ({ label, onClick, paddingBottom, paddingTop }) => {
  return (
    <div
    className="item-container"
    style={{
        paddingBottom: paddingBottom,
        paddingTop: paddingTop
      }}
      >
    <button
      onClick={onClick}
      className="item"
    >
      {label}
    </button>
    </div>
  )
}

export default Item