import React from 'react'
import PropTypes from 'prop-types';
import './Item.css'; // Import the CSS file

const Item = ({onClick, title, info, image}) => {
  return (
    <div
        style={{
        cursor: 'pointer',
        padding: '10px',
        border: '1px solid #ccc',
        borderRadius: '5px',
        marginBottom: '10px',
        }}
        onClick={onClick}
    >
        <h3>{title}</h3>
        {info && <p>{info}</p>}
        {image && <img src={image} alt={title} style={{ maxWidth: '100%' }} />}
    </div>
  )
}

export default Item