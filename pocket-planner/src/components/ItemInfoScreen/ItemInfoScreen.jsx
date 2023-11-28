import React from 'react';
import styles from './ItemInfoScreen.module.css'; // Ensure this file is in the same directory
import ringImage from '../assets/ring.jpg'; // Adjust the path if necessary

function ItemInfoScreen() {
  return (
    <div className={styles.container}>
      <header>
        <a href="/back" className={styles.headerLink}>Back</a>
        <h1>Big Blue Ring</h1>
      </header>
      <img src={ringImage} alt="Big Blue Ring" className={styles.image} />
      <div className={styles.details}>
        <p>Gorgeous massive blue ring. It only took $471,000 to construct this masterpiece. Referred to as Calgary’s pride and joy by locals.</p>
        <div className={styles.location}>Location: Deerfoot Trail 16 km away</div>
        <div className={styles.contact}>Contact: (403)-111-222</div>
        <div className={styles.hours}>Hours: Open 24 hours</div>
      </div>
      <button className={styles.addButton}>Add To Itinerary</button>
    </div>
  );
}

export default ItemInfoScreen;
