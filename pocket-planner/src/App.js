import React from 'react';
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

const itemInfoStampeders = {
  onClick: () => { console.log("Navigate to Stampeders item info"); },
  title: "Calgary Stampeders",
  info1: "Saturday, October 14th 7:30pm",
  info2: "McMahon Stadium - 1817 Crowchild Trail NW",
  info3: "",
  picture: calgary_stampeders
};

const itemInfoCalaway = {
  onClick: () => { console.log("Navigate to Calaway Park item info"); },
  title: "Calaway Park",
  info1: "Sunday, October 15th 9:30am",
  info2: "Calaway Park - 245033 Range Rd 33",
  info3: "",
  picture: calaway_attraction
};

const itemInfoExMachina = {
  onClick: () => { console.log("Navigate to Ex Machina item info"); },
  title: "Ex Machina",
  info1: "Sunday, October 15th 4:00pm",
  info2: "Scotiabank Theatre Chinook - 6455 Macleod Trail SW",
  info3: "",
  picture: ex_machina
};

const items = [itemInfoStampeders,itemInfoCalaway,itemInfoExMachina]




function App() {
  return (
    <Router>
    <Routes>
      <Route path="/" element={<LoginSignup />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/login" element={<Login />} />
      <Route path="/forgot-password" element={<ForgotPassword />} />
      <Route path="/main" element={<MainPage items={items}/>} />
      <Route path="/itinerary" element={<BrowseItinerary/>} />
      <Route path="/attractions" element={<BrowseAttractions/>} />
      <Route path="/events" element={<BrowseEvents/>} />
      <Route path="/amenities" element={<BrowseAmenities/>} />
      <Route path="/EventConfirmation" element={<EventConfirmationScreen/>} />
      <Route path="/AttractionConfirmation" element={<AttractionConfirmationScreen/>} />
      <Route path="/search-bar" element={<SearchBar/>} />
      <Route path="/itineraryItem" element={<ItineraryItemInfo/>} />
      <Route path="/item-info/:type/:id" element={ItemInfo} />
      <Route path="/c" element={<BasicDateCalendar/>} />
      <Route path="/attractionttemscreen" element={<AttractionItemScreen/>} />
      <Route path="/eventitemscreen" element={<EventItemScreen/>} />
    </Routes>
  </Router>
  );
}

export default App;
