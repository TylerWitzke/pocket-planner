import React from "react";
import ItemInfo from "../ItemInfo/ItemInfo";
import blue_ring_image from "../assets/blue_ring_attraction.jpg";

const ItemInfoTest = () => {
  return (
    <ItemInfo
      name="Big Blue Ring"
      description="Gorgeous massive blue ring. It only took $471,000 to
            construct this masterpiece. Referred to as 'Calgary's pride and
            joy' by locals."
      location="Intersection of 96 Ave NE and Deerfoot Trail"
      contact="(403)-123-4567"
      hours="Open 24/7"
      image={blue_ring_image}
      onAddToItinerary={() => console.log("Add this item to itinerary")} // Corrected syntax here
      onBack={() => console.log("Go back")} // You need to define what onBack should do or pass a function
    />
  );
};

export default ItemInfoTest;
