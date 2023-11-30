import React from 'react'
import './Browse.css'
import Item from '../Item/Item'
import calawayAttraction from '../assets/calaway_attraction.jpg'
import blueRingAttraction from '../assets/blue_ring_attraction.jpg'

const Browse = ({items, height}) => {
  return (
    <div className='browse-container' style={{height:height}}>
       <ul>
        {items.map((item, index) => (
          <li key={index}>
            <Item onClick={item.onClick}
                  title={item.title}
                  info1={item.info1}
                  info2={item.info2}
                  info3={item.info3}
                  picture={item.picture} />
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Browse
