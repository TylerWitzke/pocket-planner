import React from 'react';
import './AddItem.css';
import Dropdown from '../Dropdown/Dropdown';
import GeneralButton from '../GeneralButton/GeneralButton';
import { useNavigate } from 'react-router'

const months = ["Month", "Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", 
                "Aug", "Sep", "Oct", "Nov", "Dec"];
const days = ["Day", ...Array.from({ length: 31 }, (_, i) => i + 1)];

const currentYear = new Date().getFullYear();
const years = ["Year", ...Array.from({ length: 10 }, (_, i) => currentYear + i)];

const hours = ["Hours", ...Array.from({ length: 24 }, (_, i) => i + "hr")];
const minutes = ["Minutes", ...Array.from({ length: 60 }, (_, i) => i + "min")];

const AddItem = ({ title, image }) => {
    /*
    const navigate = useNavigate();
    const redirectBack = () => {
        navigate(-1);
    };
    */

    return (
        <div className="AddItem-page-style">
            <a href="#" onClick={console.log(/*redirectBack*/)} className="back-link">Back</a>
            <div>
                <h1 className="AddItem-title-style" style={{ textAlign: 'center' }}>Add {title}</h1>
                <img src={image} alt={title} className='AddItem-image-style'/>
            </div>
            
            <p className="p-top-margin">When do you want get to {title}?</p>

            <div className="dropdown-group">
                <Dropdown title="Month" list={months}/>
                <Dropdown title="Day" list={days}/>
                <Dropdown title="Year" list={years}/>
            </div>

            <p>How long will you be at {title}?</p>

            <div className="dropdown-group">
                <Dropdown title="Hours" list={hours}/>
                <Dropdown title="Minutes" list={minutes} />
            </div>

            <GeneralButton label="Add Item" onClick={()=>{console.log("Navigate to item confirmation")}} paddingTop="120px"/>
        </div>
    );
};

export default AddItem;