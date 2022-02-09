import styles from './Search.module.css';

import Input from '../components/Input';

import chevronRight from '../images/chevron-left.png';
import cart from '../images/shopping-cart.png';
import clock from '../images/clock.png';
import cancel from '../images/x.png';
import headset from '../images/headset.png';
import star from '../images/star-filled.png';
import dots from '../images/more-vertical.png';

const Search = () => {
  return (
    <div className={styles.searchContainer}>
      <section className={styles.searchInputSection}>
        <header className={styles.searchHeader}>
          <img src={chevronRight} alt='a right angle' />
          <h2>Search</h2>
          <img src={cart} />
        </header>
        <div className={styles.inputContainer}>
          <Input />
        </div>
      </section>

      <section className={styles.searchResult}>
        <p className={styles.searchTitle}>Latest search</p>
        <div>
          <img src={clock} />
          <p className={styles.prodTitle}>TMA-2 wireless</p>
          <img src={cancel} />
        </div>
        <div>
          <img src={clock} />
          <p className={styles.prodTitle}>TMA-2 wireless</p>
          <img src={cancel} />
        </div>
      </section>

      <section className={styles.popularProducts}>
        <p className={styles.popularTitle}>Popular products</p>
        <div className={styles.popularProdContainer}>
          <div className={styles.prodImageContainer}>
            <img src={headset} alt='a black headset' />
          </div>
          <div>
            <p className={styles.prodItem}>TMA-2 comfort wireless</p>
            <p className={styles.prodPrice}>USD 220</p>
            <div className={styles.reviewsContainer}>
              <img src={star} alt='star icon' />
              <span>4.6</span>
              <p>86 Reviews</p>
              <img src={dots} alt='' />
            </div>
          </div>
        </div>

        <div className={styles.popularProdContainer}>
          <div className={styles.prodImageContainer}>
            <img src={headset} alt='a black headset' />
          </div>
          <div>
            <p className={styles.prodItem}>TMA-2 comfort wireless</p>
            <p className={styles.prodPrice}>USD 220</p>
            <div className={styles.reviewsContainer}>
              <img src={star} alt='star icon' />
              <span>4.6</span>
              <p>86 Reviews</p>
              <img src={dots} alt='' />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
export default Search;
