import React, { useState } from 'react';
import './App.css';
import LoginSignup from './components/LoginSignup/LoginSignup';
import Signup from './components/Signup/Signup';
import Login from './components/Login/Login';
import ForgotPassword from './components/ForgotPassword/ForgotPassword';
import ItemInfo from './components/ItemInfo/ItemInfo';
import ItineraryItemInfo from './components/ItineraryItemInfo/ItineraryItemInfo';
import SearchBar from './components/SearchBar/SearchBar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import BrowseItinerary from './components/BrowseItineraryScreen/BrowseItinerary';
import EventConfirmationScreen from './components/EventConfirmationScreen/EventConfirmationScreen';
import AttractionConfirmationScreen from './components/AttractionConfirmationScreen/AttractionConfirmationScreen';
import BasicDateCalendar from './components/BasicDateCalendar/BasicDateCalendar';
import BrowseAttractions from './components/BrowseAttractions/BrowseAttractions';
import MainPage from './components/MainPage/MainPage';
import EventItemScreen from './components/EventItemScreen/EventItemScreen'
import AttractionItemScreen from './components/AttractionItemScreen/AttractionItemScreen'
import BrowseEvents from './components/BrowseEvents/BrowseEvents'
import BrowseAmenities from './components/BrowseAmenities/BrowseAmenities'


// Pictures
import calgary_stampeders from './components/assets/stampeders_logo.png'
import calaway_attraction from './components/assets/calaway_attraction.jpg'
import ex_machina from './components/assets/ex_machina.jpg'
import AddItem from './components/AddItem/AddItem';
import AmenitiesItemScreen from './components/AmenitiesItemScreen/AmenitiesItemScreen';

function App() {
  const [myArray, setMyArray] = useState([]);

  const appendElement = (newEvent) => {
    const insertIndex = myArray.findIndex(item => newEvent.date < item.date);

    // If insertIndex is -1, it means the new event is the latest, so push it to the end
    if (insertIndex === -1) {
      setMyArray([...myArray, newEvent]);
    } else {
      // Otherwise, insert the new event at the correct position
      setMyArray([...myArray.slice(0, insertIndex), newEvent, ...myArray.slice(insertIndex)]);
    }
  };

  return (
    <Router basename="/pocket-planner">
    <Routes>
      <Route path="/" element={<LoginSignup />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/login" element={<Login />} />
      <Route path="/forgot-password" element={<ForgotPassword />} />
      <Route path="/main" element={<MainPage items={myArray}/>} />
      <Route path="/itinerary" element={<BrowseItinerary items={myArray}/>} />
      <Route path="/attractions" element={<BrowseAttractions/>} />
      <Route path="/events" element={<BrowseEvents/>} />
      <Route path="/amenities" element={<BrowseAmenities/>} />
      <Route path="/eventconfirmation" element={<EventConfirmationScreen updateListFunction={appendElement}/>} />
      <Route path="/attractionconfirmation" element={<AttractionConfirmationScreen updateListFunction={appendElement}/>} />
      <Route path="/search-bar" element={<SearchBar/>} />
      <Route path="/itineraryItem" element={<ItineraryItemInfo/>} />
      <Route path="/item-info/:type/:id" element={ItemInfo} />
      <Route path="/c" element={<BasicDateCalendar items={myArray}/>} />
      <Route path="/attractionttemscreen" element={<AttractionItemScreen/>} />
      <Route path="/amenitieitemscreen" element={<AmenitiesItemScreen/>} />
      <Route path="/eventitemscreen" element={<EventItemScreen/>} />
      <Route path="/additem" element={<AddItem/>} />

    </Routes>
  </Router>
  );
}

export default App;
