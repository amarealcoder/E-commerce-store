import React from 'react';
import styles from './SearchResults.module.css';
import Product from '../components/Product';

import chevronRight from '../images/chevron-left.png';
import cart from '../images/shopping-cart.png';
import filter from '../images/sliders.png';
import Rating from '../components/Rating';

const SearchResults = () => {
  return (
    <div>
      <section className={styles.container1}>
        <header className={styles.headerContainer}>
          <img src={chevronRight} alt='a right angle' />
          <img src={cart} />
        </header>

        <div className={styles.title}>
          <p>Headphone</p>
          <h3>TMA-2 Wireless</h3>
        </div>
        <div className={styles.filterContainer}>
          <button>
            <img src={filter} alt='' />
            Filter
          </button>
          <ul>
            <li>Popularity</li>
            <li>Newest</li>
            <li>Most Expensive</li>
            <li>Popularity</li>
            <li>Newest</li>
            <li>Most Expensive</li>
          </ul>
        </div>
      </section>

      <section className={styles.container2}>
        <Product>
          <div className={styles.rating}>
            <Rating />
          </div>
        </Product>

        <Product>
          <div className={styles.rating}>
            <Rating />
          </div>
        </Product>

        <Product>
          <div className={styles.rating}>
            <Rating />
          </div>
        </Product>

        <Product>
          <div className={styles.rating}>
            <Rating />
          </div>
        </Product>
      </section>
    </div>
  );
};
export default SearchResults;
