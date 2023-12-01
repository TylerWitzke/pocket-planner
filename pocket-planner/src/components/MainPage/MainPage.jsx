import React from 'react';
import './MainPage.css';
import ItineraryWidget from '../ItineraryWidget/ItineraryWidget';
import GeneralButton from '../GeneralButton/GeneralButton';
import { useNavigate } from 'react-router'

const MainPage = ({items}) => {
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
            items={items}
        />
    </div>
  );
};

export default MainPage;