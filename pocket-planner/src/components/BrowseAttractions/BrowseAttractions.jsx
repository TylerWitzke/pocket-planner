import React from 'react'

import './BrowseAttractions.css';  // Import the CSS file
import calgary_stampeders from '../assets/stampeders_logo.png'
import calaway_attraction from '../assets/calaway_attraction.jpg'
import ex_machina from '../assets/ex_machina.jpg'
import SearchBar from '../SearchBar/SearchBar';
import Browse from '../Browse/Browse';
import { useNavigate } from 'react-router'
import { attraction_items } from '../../Constants';

const BrowseAttractions = () => {
    

    const navigate = useNavigate();
    const redirectBack = () => {
        navigate(-1);
    };

    const routeToAttractionScreen = (id) => {
        navigate('/attractionttemscreen?attractionid='+id)
    }

    const handleSearch = (searchTerm) => {
    console.log(`Searching for: ${searchTerm}`);
    };

    return (
        <div>
            <a href="#" onClick={redirectBack}>
                Back
            </a>
            <div className="browse-attraction-container">
              {/* Header */}
              <h2>Attractions</h2>

              {/* Search Bar */}
              <SearchBar placeholder="Search..." onSearch={handleSearch} />

              <h2>Browse Example</h2>
              <Browse items={attraction_items} height={"450px"} onClick={routeToAttractionScreen}/>
            </div>
        </div>
      );
}

export default BrowseAttractions