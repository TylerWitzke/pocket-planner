// Pictures
import big_blue_ring_attraction from './components/assets/blue_ring_attraction.jpg'
import calaway_park_attraction from './components/assets/calaway_attraction.jpg'
import calgary_tower_attraction from './components/assets/calgary_tower_attraction.jpg'
import heritage_park_attraction from './components/assets/heritage_park_attraction.jpg'
import oplympic_plaza_attraction from './components/assets/olympic_plaza_attraction.jpg'

import calgary_stampeders_event from './components/assets/calgary_stampeders.png'
import taylor_swift_event from './components/assets/taylor_swift_event.jpg'
import dirty_dancing_event from './components/assets/dirty_dancing_event.jpg'
import calgary_hitmen_event from './components/assets/calgary_hitmen_event.png'
import morgan_wallen_event from './components/assets/morgan_wallen_event.jpg'

import barbarella_amenity from './components/assets/barbarella_amenity.jpg'
import anytime_fitness_amenity from './components/assets/anytime_fitness_amenity.jpg'
import market_mall_amenity from './components/assets/market_mall_amenity.jpg'
import foothills_medical_amenity from './components/assets/foothills_medical_amenity.jpg'
import seven_eleven_amenity from './components/assets/seven_eleven_amenity.jpg'

// Start attractions -----------------------------------------------------
const bigBlueRing = {
    onClick: () => { console.log("bigBlueRing"); },
    title: "Big Blue Ring",
    info1: "Art Piece - 16km",
    info2: "Open 24 hours",
    info3: "Rating: 5/5",
    picture: big_blue_ring_attraction,
    id: 0
};

const calawayPark = {
    onClick: () => { console.log("calawayPark"); },
    title: "Calaway Park",
    info1: "Amusement Park - 54.5 km",
    info2: "Open 10am - 9pm",
    info3: "Rating: 4/5",
    picture: calaway_park_attraction,
    id: 1
};

const calgaryTower = {
    onClick: () => { console.log("calgaryTower"); },
    title: "Calgary Tower",
    info1: "Iconic building - 16km",
    info2: "Open  10am - 1am",
    info3: "Rating: 4/5",
    picture: calgary_tower_attraction,
    id: 2
};

const heritagePark = {
    onClick: () => { console.log("heritagePark"); },
    title: "Heritage Park",
    info1: "Amusement park - 3.2km",
    info2: "Open 8am to 6pm",
    info3: "Rating: 2/5",
    picture: heritage_park_attraction,
    id: 3

};

const olympicPlaza = {
    onClick: () => { console.log("olympicPlaza"); },
    title: "Olympic Plaza",
    info1: "Skating rink - 10km",
    info2: "Open 24 hours",
    info3: "Rating: 2/5",
    picture: oplympic_plaza_attraction,
    id: 4
};

export const attraction_items = [bigBlueRing,calawayPark,calgaryTower,heritagePark,olympicPlaza]

const bigBlueRingInfo = {
    title: 'Big Blue Ring',
    picture: big_blue_ring_attraction,
    description: 'Gorgeous massive blue ring. It only took $471,000 to construct this masterpiece. Referred to as Calgary’s pride and joy by locals.',
    locationName: 'Deerfoot Trail',
    locationDistance: '16 km away',
    contact: '(403)-111-5222',
    hours: 'Open 24 hours',
  };

  const calawayParkInfo = {
    title: 'Calaway Park',
    picture: calaway_park_attraction,
    description: 'Popular amusement park located just west of Calgary, Alberta, Canada. It is the largest outdoor family amusement park in Western Canada.',
    locationName: '245033 Range Rd 33',
    locationDistance: '54.5 km away',
    contact: '(403)-999-0232',
    hours: 'Open 10am - 9pm',
  };

  const calgaryTowerInfo = {
    title: 'Calgary Tower',
    picture: calgary_tower_attraction,
    description: 'The Calgary Tower is an iconic landmark in downtown Calgary, Alberta, Canada. Standing at 191 meters, it offers panoramic views of the city and the surrounding Rocky Mountains.',
    locationName: 'Deerfoot Trail',
    locationDistance: '16 km away',
    contact: '(403)-111-2222',
    hours: 'Open  10am - 1am',
  };

  const heritageParkInfo = {
    title: 'Heritage Park',
    picture: heritage_park_attraction,
    description: 'Heritage Park in Calgary, Alberta, is a living history museum that beautifully captures the essence of Western Canada’s past.',
    locationName: '1900 Heritage Dr SW',
    locationDistance: '3.2 km away',
    contact: '(587)-411-1122',
    hours: 'Open 8am to 6pm',
  };

  const olympicPlazaInfo = {
    title: 'Olympic Plaza',
    picture: oplympic_plaza_attraction,
    description: 'Olympic Plaza in Calgary, Alberta, is a vibrant public space with historical significance as the site of the medal presentations during the 1988 Winter Olympics.',
    locationName: '228 8 Ave SE',
    locationDistance: '10 km away',
    contact: '(587)-111-2922',
    hours: 'Open 24 hours',
  };

  export const attraction_items_info = [bigBlueRingInfo, calawayParkInfo, calgaryTowerInfo, heritageParkInfo, olympicPlazaInfo]

// End attractions -----------------------------------------------------

// Start amenities -----------------------------------------------------
const barbarella = {
  title: "Barbarella Bar",
  info1: "Resturaunt - 2km",
  info2: "Open 11am - 10pm",
  info3: "Rating: 5/5",
  picture: barbarella_amenity,
  id: 0,
  date: null
};

const anytimeFitness = {
  title: "AnyTime Fitness",
  info1: "Gym - 5km",
  info2: "Open 24 hours",
  info3: "Rating: 4/5",
  picture: anytime_fitness_amenity,
  id: 1,
  date: null
};

const marketMall = {
  title: "Market Mall",
  info1: "Shopping Mall - 7.2km",
  info2: "Open  10am - 9pm",
  info3: "Rating: 3.5/5",
  picture: market_mall_amenity,
  id: 2,
  date: null
};

const foothillsMedical = {
  title: "Foothills Medical Center",
  info1: "Hospital - 11km",
  info2: "Open 24 hours",
  info3: "Rating: 2/5",
  picture: foothills_medical_amenity,
  id: 3,
  date: null
};

const sevenEleven= {
  title: "7-Eleven",
  info1: "Convenience Store - 13.4km",
  info2: "Open 24 hours",
  info3: "Rating: 2/5",
  picture: seven_eleven_amenity,
  id: 4,
  date: null
};

export const amenitie_items = [barbarella,anytimeFitness,marketMall,foothillsMedical,sevenEleven]

const barbarellaInfo = {
  title: "Barbarella Bar",
  description: 'Upscale casual restaurant in downtown Calgary serving you vibrant coastal cuisine and an escape to the Italian South, circa 1968',
  locationName: '240 8 Ave SW, Calgary, AB',
  locationDistance: '2 km away',
  contact: '(403)-111-5222',
  hours: "Open 11am - 10pm",
  picture: barbarella_amenity,
  id: 0,
};

const anytimeFitnessInfo = {
  title: "AnyTime Fitness",
  picture: anytime_fitness_amenity,
  description: 'With a focus on convenience and personalized fitness plans, Anytime Fitness aims to create a welcoming and supportive environment for individuals pursuing their health and wellness goals',
  locationName: '722 85 St SW, Calgary, AB',
  locationDistance: '5 km away',
  contact: '(403)-999-0232',
  hours: 'Open 24 hours',
};

const marketMallInfo = {
  title: "Market Mall",
  picture: market_mall_amenity,
  description: 'Boasting a diverse range of retail stores, dining options, and entertainment facilities, Market Mall offers a comprehensive shopping experience for visitors in the city.',
  locationName: '3625 Shaganappi Trail NW, Calgary, AB',
  locationDistance: '7.2 km away',
  contact: '(403)-111-2222',
  hours: 'Open  10am - 9pm',
};

const foothillsMedicalInfo = {
  title: "Foothills Medical Center",
  picture: foothills_medical_amenity,
  description: 'As one of the largest hospitals in the region, it serves as a hub for medical services, research, and education, providing comprehensive healthcare to the community and playing a crucial role in the Alberta health system.',
  locationName: '1900 Heritage Dr SW',
  locationDistance: '11 km away',
  contact: '(587)-411-1122',
  hours: 'Open 24 hours',
};

const sevenElevenInfo = {
  title: "7-Eleven",
  picture: seven_eleven_amenity,
  description: 'Offering a wide array of snacks, beverages, and everyday essentials, 7-Eleven is recognized for its convenience and accessibility, with numerous locations worldwide providing customers with 24/7 service.',
  locationName: '6408 Old Banff Coach Rd SW, Calgary, AB',
  locationDistance: '13.4 km away',
  contact: '(587)-111-2922',
  hours: 'Open 24 hours',
};

export const amenitie_items_info = [barbarellaInfo,anytimeFitnessInfo,marketMallInfo,foothillsMedicalInfo,sevenElevenInfo]

// End amenities -----------------------------------------------------

// Start Events -----------------------------------------------------
const calgaryStampeders = {
  onClick: () => { console.log("bigBlueRing"); },
  title: "Calgary Stampeders",
  info1: "vs Winnipeg Blye Bombers",
  info2: "Saturday Oct 14th at 7:00pm",
  info3: "McMahon stadium",
  picture: calgary_stampeders_event,
  id: 0,
  date: new Date(2023, 9, 14)
};

const taylorSwift= {
  onClick: () => { console.log("calawayPark"); },
  title: "Taylor Swift",
  info1: "The Eras Tour",
  info2: "Sunday Oct 15th at 8:30pm",
  info3: "Saddledome",
  picture: taylor_swift_event,
  id: 1,
  date: new Date(2023, 9, 15)
};

const dirtyDancing = {
  onClick: () => { console.log("calgaryTower"); },
  title: "Dirty Dancing",
  info1: "Live play",
  info2: "Monday Oct 16th at 6:30pm",
  info3: "Southern Alberta Jubilee Auditorium",
  picture: dirty_dancing_event,
  id: 2,
  date: new Date(2023, 9, 16)
};

const calgaryHitmen = {
  onClick: () => { console.log("heritagePark"); },
  title: "Calgary Hitmen",
  info1: "vs Edmonton Oil Kings",
  info2: "Tuesday Oct 17th at 4:30pm",
  info3: "Saddledome",
  picture: calgary_hitmen_event,
  id: 3,
  date: new Date(2023, 9, 17)
};

const morganWallen = {
  onClick: () => { console.log("olympicPlaza"); },
  title: "Morgan Wallen",
  info1: "One Night at a Time",
  info2: "Wednesday Oct 18th at 9:30pm",
  info3: "Saddledome",
  picture: morgan_wallen_event,
  id: 4,
  date: new Date(2023, 9, 18)
};

export const event_items = [calgaryStampeders,taylorSwift,dirtyDancing,calgaryHitmen,morganWallen]

// AHHHHHH THIS NEEDS TO BE CHANGED ----------------------------------------------------- change to event item info
// Currently using attractions because no time
const hi = {
  title: "Calgary Stampeders",
  date: "Wednesday Oct 18th at 9:30pm",
  location: "McMahon stadium",
  picture: calgary_stampeders_event,
};

const my = {
  title: "Taylor Swift",
  date: "ahh",
  location: "wdn",
  picture: taylor_swift_event,
};

const name = {
  title: "Dirty Dancing",
  date: "ahh",
  location: "wdn",
  picture: dirty_dancing_event,
};

const is = {
  title: 'Calgary Hitmen',
  date: "ahh",
  location: "wdn",
  picture: calgary_hitmen_event
};

const what = {
  title: "Morgan Wallen",
  date: "ahh",
  location: "wdn",
  picture: morgan_wallen_event,
};

export const event_items_info = [hi, my, name, is, what]

// End Events ----------------------------------------------------- still need to change event item info