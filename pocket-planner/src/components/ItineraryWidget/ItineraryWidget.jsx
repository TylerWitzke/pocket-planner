import React from 'react'
import './ItineraryWidget.css'
import Item from '../Item/Item'

const ItineraryWidget = ({
    onClick,

    onClickItem1,
    titleItem1,
    info1Item1,
    info2Item1,
    info3Item1,
    pictureItem1,
    borderColItem1,

    onClickItem2,
    titleItem2,
    info1Item2,
    info2Item2,
    info3Item2,
    pictureItem2,
    borderColItem2,
}) => {
  return (
    <div className='outer-container' onClick={onClick}>
        <h1>Itinerary</h1>
        <Item
            onClick={onClickItem1}
            title={titleItem1}
            info1={info1Item1}
            info2={info2Item1}
            info3={info3Item1}
            picture={pictureItem1}
            borderCol={borderColItem1}/>

        <Item
            onClick={onClickItem2}
            title={titleItem2}
            info1={info1Item2}
            info2={info2Item2}
            info3={info3Item2}
            picture={pictureItem2}
            borderCol={borderColItem2}/>
    </div>
  )
}

export default ItineraryWidget