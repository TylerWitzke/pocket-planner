import React from 'react';
import './AddItem.css';
import Dropdown from '../Dropdown/Dropdown';
import GeneralButton from '../GeneralButton/GeneralButton';
import { useNavigate } from 'react-router'
import { attraction_items } from '../../Constants';
import { useLocation } from 'react-router-dom';

const months = ["Month", "Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", 
                "Aug", "Sep", "Oct", "Nov", "Dec"];
const days = ["Day", ...Array.from({ length: 31 }, (_, i) => i + 1)];

const currentYear = new Date().getFullYear();
const years = ["Year", ...Array.from({ length: 10 }, (_, i) => currentYear + i)];

const hours = ["Hours", ...Array.from({ length: 24 }, (_, i) => i + "hr")];
const minutes = ["Minutes", ...Array.from({ length: 60 }, (_, i) => i + "min")];

const AddItem = ({ title, image }) => {
    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);
    const index = queryParams.get('itemid');
    const navigate = useNavigate();
    const redirectBack = () => {
        navigate(-1);
    };

    return (
        <div className="AddItem-page-style">
            <a href="#" onClick={redirectBack} className="back-link">Back</a>
            <div>
                <h1 className="AddItem-title-style" style={{ textAlign: 'center' }}>Add {attraction_items[parseInt(index, 10)].title}</h1>
                <img src={attraction_items[parseInt(index, 10)].picture} alt={attraction_items[parseInt(index, 10)].title} className='AddItem-image-style'/>
            </div>
            
            <p className="p-top-margin">When do you want get to {attraction_items[parseInt(index, 10)].title}?</p>

            <div className="dropdown-group">
                <Dropdown title="Month" list={months}/>
                <Dropdown title="Day" list={days}/>
                <Dropdown title="Year" list={years}/>
            </div>

            <p>How long will you be at {attraction_items[parseInt(index, 10)].title}?</p>

            <div className="dropdown-group">
                <Dropdown title="Hours" list={hours}/>
                <Dropdown title="Minutes" list={minutes} />
            </div>

            <GeneralButton 
                label="Add Item" 
                onClick={()=>{console.log("Navigate to item confirmation")}} 
                paddingTop="140px"
                width="350px"
                height="55px"
                border="10px"/>
        </div>
    );
};

export default AddItem;