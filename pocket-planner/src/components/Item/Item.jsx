import React from 'react'
import PropTypes from 'prop-types';
import './Item.css'; // Import the CSS file

const Item = ({onClick, title, info1, info2, info3, picture}) => {
  return (
    <div className='item-container-style' onClick={onClick}>
      <div className='item-text-content-style'>
        <h2 className='item-title-style'>{title}</h2>
        <p className='item-info-style'>{info1}</p>
        <p className='item-info-style'>{info2}</p>
        <p className='item-info-style'>{info3}</p>
      </div>
      <img src={picture} alt={title} className='item-picture-style' />
      </div>
  )
}

export default Item