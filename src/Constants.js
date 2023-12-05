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
const bigBlueRing2 = {
  onClick: () => { console.log("bigBlueRing"); },
  title: "Big Blue Ring Amen",
  info1: "Art Piece - 16km",
  info2: "Open 24 hours",
  info3: "Rating: 5/5",
  picture: big_blue_ring_attraction,
  id: 0,
  date: null
};

const calawayPark2 = {
  onClick: () => { console.log("calawayPark"); },
  title: "Calaway Park Amen",
  info1: "Amusement Park - 54.5 km",
  info2: "Open 10am - 9pm",
  info3: "Rating: 4/5",
  picture: calaway_park_attraction,
  id: 1,
  date: null
};

const calgaryTower2 = {
  onClick: () => { console.log("calgaryTower"); },
  title: "Calgary Tower Amen",
  info1: "Iconic building - 16km",
  info2: "Open  10am - 1am",
  info3: "Rating: 4/5",
  picture: calgary_tower_attraction,
  id: 2,
  date: null
};

const heritagePark2 = {
  onClick: () => { console.log("heritagePark"); },
  title: "Heritage Park Amen",
  info1: "Amusement park - 3.2km",
  info2: "Open 8am to 6pm",
  info3: "Rating: 2/5",
  picture: heritage_park_attraction,
  id: 3,
  date: null
};

const olympicPlaza2 = {
  onClick: () => { console.log("olympicPlaza"); },
  title: "Olympic Plaza Amen",
  info1: "Skating rink - 10km",
  info2: "Open 24 hours",
  info3: "Rating: 2/5",
  picture: oplympic_plaza_attraction,
  id: 4,
  date: null
};

export const amenitie_items = [bigBlueRing2,calawayPark2,calgaryTower2,heritagePark2,olympicPlaza2]

const bigBlueRingInfo2 = {
  title: 'Big Blue Ring Amen',
  picture: big_blue_ring_attraction,
  description: 'Gorgeous massive blue ring. It only took $471,000 to construct this masterpiece. Referred to as Calgary’s pride and joy by locals.',
  locationName: 'Deerfoot Trail',
  locationDistance: '16 km away',
  contact: '(403)-111-5222',
  hours: 'Open 24 hours',
};

const calawayParkInfo2 = {
  title: 'Calaway Park Amen',
  picture: calaway_park_attraction,
  description: 'Popular amusement park located just west of Calgary, Alberta, Canada. It is the largest outdoor family amusement park in Western Canada.',
  locationName: '245033 Range Rd 33',
  locationDistance: '54.5 km away',
  contact: '(403)-999-0232',
  hours: 'Open 10am - 9pm',
};

const calgaryTowerInfo2 = {
  title: 'Calgary Tower Amen',
  picture: calgary_tower_attraction,
  description: 'The Calgary Tower is an iconic landmark in downtown Calgary, Alberta, Canada. Standing at 191 meters, it offers panoramic views of the city and the surrounding Rocky Mountains.',
  locationName: 'Deerfoot Trail',
  locationDistance: '16 km away',
  contact: '(403)-111-2222',
  hours: 'Open  10am - 1am',
};

const heritageParkInfo2 = {
  title: 'Heritage Park Amen',
  picture: heritage_park_attraction,
  description: 'Heritage Park in Calgary, Alberta, is a living history museum that beautifully captures the essence of Western Canada’s past.',
  locationName: '1900 Heritage Dr SW',
  locationDistance: '3.2 km away',
  contact: '(587)-411-1122',
  hours: 'Open 8am to 6pm',
};

const olympicPlazaInfo2 = {
  title: 'Olympic Plaza Amen',
  picture: oplympic_plaza_attraction,
  description: 'Olympic Plaza in Calgary, Alberta, is a vibrant public space with historical significance as the site of the medal presentations during the 1988 Winter Olympics.',
  locationName: '228 8 Ave SE',
  locationDistance: '10 km away',
  contact: '(587)-111-2922',
  hours: 'Open 24 hours',
};

export const amenitie_items_info = [bigBlueRingInfo2, calawayParkInfo2, calgaryTowerInfo2, heritageParkInfo2, olympicPlazaInfo2]

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