import React from 'react'
import './Browse.css'
import Item from '../Item/Item'
import pocketPlannerImage from '../assets/pocket-planner.png'
import calawayAttraction from '../assets/calaway_attraction.jpg'

const Browse = () => {
  return (
    <div className='outer-container'>
      <Item
        onClick={()=>{console.log("fook item 1")}}
        title="My sick example item"
        info="This example item is so dope"
        image={calawayAttraction}/>

      <Item
        onClick={()=>{console.log("fook item 2")}}
        title="My less sick other example item"
        info="This example item is less dope than the first"
        image={pocketPlannerImage}/>
    </div>
  )
}

export default Browse