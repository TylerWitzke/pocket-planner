import React from 'react'
import './Browse.css'
import Item from '../Item/Item'
import pocketPlannerImage from '../assets/pocket-planner.png'
import calawayAttraction from '../assets/calaway_attraction.jpg'

const Browse = () => {
  return (
    <div className='outer-container'>
        <div className='item-container'>
            {/* <Item label="Test item 1" onClick={()=>{console.log("fook item 1")}} paddingTop="20px" paddingBottom="20px"/>
            <Item label="Test item 2" onClick={()=>{console.log("fook item 2")}} paddingTop="20px" paddingBottom="20px"/>
            <Item label="Test item 3" onClick={()=>{console.log("fook item 3")}} paddingTop="20px" paddingBottom="20px"/> */}

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
    </div>
  )
}

export default Browse