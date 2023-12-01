import React from 'react';
import logo from './logo.svg';
import './App.css';
import LoginSignup from './components/LoginSignup/LoginSignup';
import Signup from './components/Signup/Signup';
import Login from './components/Login/Login';
import ForgotPassword from './components/ForgotPassword/ForgotPassword';
//import RadioButton from './components/RadioButton/RadioButton';
import Item from './components/Item/Item';
import Browse from './components/Browse/Browse'
import ItemInfo from './components/ItemInfo/ItemInfo';
import ItineraryItemInfo from './components/ItineraryItemInfo/ItineraryItemInfo';
import SearchBar from './components/SearchBar/SearchBar';
import ItemInfoScreen from './components/ItemInfoScreen/ItemInfoScreen';
import TestAddItem from './components/TestAddItem/TestAddItem';
import TestMain from './components/TestMain/TestMain';
import TestItemInfo from './components/TestItemInfo/TestItemInfo';
import TestItineraryItemInfo from './components/TestItineraryItemInfo/TestItineraryItemInfo';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import BrowseItinerary from './components/BrowseItineraryScreen/BrowseItinerary';
import EventConfirmationScreen from './components/EventConfirmationScreen/EventConfirmationScreen';
import AttractionConfirmationScreen from './components/AttractionConfirmationScreen/AttractionConfirmationScreen';
import BasicDateCalendar from './components/BasicDateCalendar/BasicDateCalendar';
import BrowseAttractions from './components/BrowseAttractions/BrowseAttractions';



const test = false;

function App() {
  return (
    // <div>
    //   { test && <LoginSignup/>}
    //   { test && <Signup/>}
    //   { test && <Login/>}
    //   { test && <ForgotPassword/>}
    //   {/* { test && <RadioButton options={[{ label: 'Option 1', value: 'first' }, { label: 'Option 2', value: 'second' }]} />} */}
    //   { test && <ItemInfoScreen/>}
    //   { test && <TestAddItem/>}
    //   { !test && <TestMain/>}
    //   { test && <BrowseAttractions/>}
    //   { test && <TestItemInfo/>}
    //   { test && <TestItineraryItemInfo/>}
    // </div>

    <Router>
    <Routes>
      <Route path="/" element={<LoginSignup />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/login" element={<Login />} />
      <Route path="/forgot-password" element={<ForgotPassword />} />
      <Route path="/BrowseItinerary" element={<BrowseItinerary/>} />
      <Route path="/BrowseAttractions" element={<BrowseAttractions/>} />
      <Route path="/EventConfirmation" element={<EventConfirmationScreen/>} />
      <Route path="/AttractionConfirmation" element={<AttractionConfirmationScreen/>} />
      <Route path="/search-bar" element={<SearchBar/>} />
      <Route path="/itinerary-item/:id" element={ItineraryItemInfo} />
      <Route path="/item-info/:type/:id" element={ItemInfo} />
      <Route path="/c" element={<BasicDateCalendar/>} />
    </Routes>
  </Router>
  );
}

export default App;
