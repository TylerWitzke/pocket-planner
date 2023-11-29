import React from 'react';
import styles from './ItineraryItemInfo.module.css';

const ItineraryItemInfo = ({ name, location, contact, date, time, duration, image, onEdit, onDelete, onBackToMenu }) => {
  return (
    <div className={styles.container}>
      <button onClick={onBackToMenu} className={styles.backButton}>Back</button>
      <h1 className={styles.title}>{name}</h1>
      {image && <img src={image} alt={name} className={styles.image} />}
      <div className={styles.info}>
        <div className={styles.detail}><strong>Location:</strong> {location}</div>
        <div className={styles.detail}><strong>Contact:</strong> {contact}</div>
        <div className={styles.detail}><strong>Date & Time:</strong> {date} {time}</div>
        <div className={styles.detail}><strong>Duration:</strong> {duration}</div>
      </div>
      <button onClick={onEdit} className={styles.editButton}>Edit this Item</button>
      <button onClick={onDelete} className={styles.deleteButton}>Delete this Item</button>
      <button onClick={onBackToMenu} className={styles.backToMenuButton}>Back to Main Menu</button>
    </div>
  );
};

export default ItineraryItemInfo;
