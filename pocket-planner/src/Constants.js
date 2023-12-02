// Pictures
import big_blue_ring_attraction from './components/assets/blue_ring_attraction.jpg'
import calaway_park_attraction from './components/assets/calaway_attraction.jpg'
import calgary_tower_attraction from './components/assets/calgary_tower_attraction.jpg'
import heritage_park_attraction from './components/assets/heritage_park_attraction.jpg'
import oplympic_plaza_attraction from './components/assets/olympic_plaza_attraction.jpg'

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