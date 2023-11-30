// using this to test

import React from 'react';
import MainPage from '../MainPage/MainPage';
import calawayAttraction from '../assets/calaway_attraction.jpg'
import stampedersLogo from '../assets/stampeders_logo.png'

const TestMain = () => {
    return (
        <MainPage
            onClickItem1={()=>{console.log("Stampeders game clicked")}}
            titleItem1="Calgary Stampeders"
            info1Item1="Saturday, October 14th 7:30pm"
            info2Item1="McMahon Stadium"
            info3Item1="1817 Crowchild Trail NW"
            pictureItem1={stampedersLogo}
            borderColItem1="1px solid black"

            onClickItem2={()=>{console.log("Calaway Park clicked")}}
            titleItem2="Calaway Park"
            info1Item2="Sunday, October 15th 9:30am"
            info2Item2="Calaway Park"
            info3Item2="245033 Range Rd 33"
            pictureItem2={calawayAttraction}
            borderColItem2="1px solid black"
        />  
    );
};

export default TestMain;