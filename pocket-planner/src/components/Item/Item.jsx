import React from 'react'
import PropTypes from 'prop-types';
import './Item.css'; // Import the CSS file

const Item = ({onClick, title, info, picture}) => {
  return (
    <div className='item-container-style' onClick={onClick}>
      <div className='item-text-content-style'>
        <h2>{title}</h2>
        <p>{info}</p>
      </div>
      <img src={picture} alt={title} className='item-picture-style' />
      </div>
  )
}

export default Item