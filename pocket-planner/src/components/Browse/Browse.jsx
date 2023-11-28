import React from 'react'
import './Browse.css'
import Item from '../Item/Item'
import calawayAttraction from '../assets/calaway_attraction.jpg'
import blueRingAttraction from '../assets/blue_ring_attraction.jpg'

const Browse = () => {
  return (
    <div className='outer-container'>
      <Item
        onClick={()=>{console.log("Calaway Park clicked")}}
        title="Calaway Park"
        info1="Amusement Park - 32.2 km"
        info2="Open 24 Hours"
        info3="5/5 Stars"
        picture={calawayAttraction}/>

      <Item
        onClick={()=>{console.log("Big Blue Ring clicked")}}
        title="Big Blue Ring"
        info1="Art Piece - 16 km"
        info2="Open 10am - 6pm"
        info3="4.5/5 Stars"
        picture={blueRingAttraction}/>
    </div>
  )
}

export default Browse