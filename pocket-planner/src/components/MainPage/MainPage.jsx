import React from 'react';
import './MainPage.css';
import ItineraryWidget from '../ItineraryWidget/ItineraryWidget';
import GeneralButton from '../GeneralButton/GeneralButton';
import { useNavigate } from 'react-router'

const MainPage = ({
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
    borderColItem2
}) => {
    /*
    const navigate = useNavigate();
    const redirectBack = () => {
        navigate(-1);
    };
    */

  return (
    <div className="main-page-container">
        <a href="#" onClick={console.log(/*redirectBack*/)} className="back-link">Back</a>
        
        <GeneralButton 
            className="general-button-style" 
            label="Events" 
            onClick={()=>{console.log("Go to events")}} 
            paddingBottom="10px" 
            paddingTop="10px"
            height="40px"
            width="375px"
            border="15px"/>
        <GeneralButton 
            className="general-button-style" 
            label="Amenities" 
            onClick={()=>{console.log("Go to amenities")}} 
            paddingBottom="10px" 
            paddingTop="10px"
            height="40px"
            width="375px"
            border="15px"/>
        <GeneralButton 
            className="general-button-style" 
            label="Attractions" 
            onClick={()=>{console.log("Go to attractions")}} 
            paddingBottom="10px" 
            paddingTop="10px"
            height="40px"
            width="375px"
            border="15px"/>

        {/* For testing: <Browse/> */}
        <ItineraryWidget
            onClick={()=>{console.log("Navigate to itinerary")}}

            onClickItem1={onClickItem1}
            titleItem1={titleItem1}
            info1Item1={info1Item1}
            info2Item1={info2Item1}
            info3Item1={info3Item1}
            pictureItem1={pictureItem1}
            borderColItem1={borderColItem1}

            onClickItem2={onClickItem2}
            titleItem2={titleItem2}
            info1Item2={info1Item2}
            info2Item2={info2Item2}
            info3Item2={info3Item2}
            pictureItem2={pictureItem2}
            borderColItem2={borderColItem2}
        />
    </div>
  );
};

export default MainPage;