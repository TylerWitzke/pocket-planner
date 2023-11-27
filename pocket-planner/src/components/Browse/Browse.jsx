import React from 'react'
import './Browse.css'
import Item from '../Item/Item'

const Browse = () => {
  return (
    <div className='outer-container'>
        <div className='item-container'>
            <Item label="Test item 1" onClick={()=>{console.log("fook item 1")}} paddingTop="20px" paddingBottom="20px"/>
            <Item label="Test item 2" onClick={()=>{console.log("fook item 2")}} paddingTop="20px" paddingBottom="20px"/>
            <Item label="Test item 3" onClick={()=>{console.log("fook item 3")}} paddingTop="20px" paddingBottom="20px"/>
        </div>
    </div>
  )
}

export default Browse