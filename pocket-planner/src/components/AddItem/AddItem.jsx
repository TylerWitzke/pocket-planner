import React, {useState }from 'react';
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

export let dateInfo = {
    month: '',
    day: '',
    year: '',
    hour: '',
    minute: ''
}

const AddItem = ({ title, image }) => {
    const [month, setMonth] = useState('');
    const [day, setDay] = useState('');
    const [year, setYear] = useState('');
    const [hour, setHours] = useState('');
    const [minute, setMinutes] = useState('');
    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);
    const index = queryParams.get('itemid');
    const navigate = useNavigate();
    const redirectBack = () => {
        navigate(-1);
    };

    const onSubmit = () => {
        dateInfo.day = day;
        dateInfo.month = month;
        dateInfo.year = year;
        dateInfo.hour = hour;
        dateInfo.minute = minute;
        navigate('/attractionconfirmation?itemid='+index)
    }

    return (
        <div className="AddItem-page-style">
            <a href="#" onClick={redirectBack} className="back-link">Back</a>
            <div>
                <h1 className="AddItem-title-style" style={{ textAlign: 'center' }}>Add {attraction_items[parseInt(index, 10)].title}</h1>
                <img src={attraction_items[parseInt(index, 10)].picture} alt={attraction_items[parseInt(index, 10)].title} className='AddItem-image-style'/>
            </div>
            
            <p className="p-top-margin">When do you want get to {attraction_items[parseInt(index, 10)].title}?</p>

            <div className="dropdown-group">
                <Dropdown title="Month" list={months} updateState={setMonth}/>
                <Dropdown title="Day" list={days} updateState={setDay}/>
                <Dropdown title="Year" list={years} updateState={setYear}/>
            </div>

            <p>How long will you be at {attraction_items[parseInt(index, 10)].title}?</p>

            <div className="dropdown-group">
                <Dropdown title="Hours" list={hours} updateState={setHours}/>
                <Dropdown title="Minutes" list={minutes} updateState={setMinutes}/>
            </div>

            <GeneralButton 
                label="Add Item" 
                onClick={onSubmit} 
                paddingTop="140px"
                width="350px"
                height="55px"
                border="10px"/>
        </div>
    );
};

export default AddItem;