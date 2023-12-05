import React from "react";
import styles from "./ItemInfo.module.css";

const ItemInfo = ({
  name,
  description,
  location,
  contact,
  hours,
  image,
  onAddToItinerary,
  onBack,
}) => {
  return (
    <div className={styles.container}>
      <button onClick={onBack} className={styles.backButton}>
        Back
      </button>
      <h1 className={styles.title}>{name}</h1>
      {image && <img src={image} alt={name} className={styles.image} />}
      <p className={styles.description}>{description}</p>
      <div className={styles.info}>
        <div className={styles.detail}>
          <strong>Location:</strong> {location}
        </div>
        <div className={styles.detail}>
          <strong>Contact:</strong> {contact}
        </div>
        <div className={styles.detail}>
          <strong>Hours:</strong> {hours}
        </div>
      </div>
      <button onClick={onAddToItinerary} className={styles.addButton}>
        Add To Itinerary
      </button>
    </div>
  );
};

export default ItemInfo;
