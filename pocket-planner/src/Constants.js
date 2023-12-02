// Pictures
import big_blue_ring_attraction from './components/assets/blue_ring_attraction.jpg'
import calaway_park_attraction from './components/assets/calaway_attraction.jpg'
import calgary_tower_attraction from './components/assets/calgary_tower_attraction.jpg'
import heritage_park_attraction from './components/assets/heritage_park_attraction.jpg'
import oplympic_plaza_attraction from '.components/assets/olympic_plaza_attraction.jpg'

const bigBlueRing = {
    onClick: () => { console.log("bigBlueRing"); },
    title: "Big Blue Ring",
    info1: "11",
    info2: "2233ed3",
    info3: "fjbeq-",
    picture: big_blue_ring_attraction,
    id: 1
};

const calawayPark = {
    onClick: () => { console.log("calawayPark"); },
    title: "Calaway Park",
    info1: "Sunday, October 15th 9:30am",
    info2: "Calaway Park - 245033 Range Rd 33",
    info3: "",
    picture: calaway_park_attraction,
    id: 2
};

const calgaryTower = {
    onClick: () => { console.log("calgaryTower"); },
    title: "Calgary Tower",
    info1: "rjgbwip",
    info2: "afhbv",
    info3: "",
    picture: calgary_tower_attraction,
    id: 3
};

const heritagePark = {
    onClick: () => { console.log("heritagePark"); },
    title: "Heritage Park",
    info1: "dfa",
    info2: "aqrehqy",
    info3: "",
    picture: heritage_park_attraction,
    id: 4
};

const olympicPlaza = {
    onClick: () => { console.log("olympicPlaza"); },
    title: "Olympic Plaza",
    info1: "dfsfsva",
    info2: "ppp",
    info3: "",
    picture: oplympic_plaza_attraction,
    id: 5
};


const items = [bigBlueRing,calawayPark,calgaryTower,heritagePark,olympicPlaza]