import React from 'react'
import './Browse.css'
import Item from '../Item/Item'

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
                  picture={item.picture} 
                  borderCol={item.borderCol}/>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Browse