import styles from './FilterModal.module.css';

import FilterList from '../components/FilterList';
import Button from '../components/Button';

const FilterModal = () => {
  return (
    
      <div className={styles.modalContainer}>
        <header>
          <h2>Filter</h2>
          <h2>x</h2>
        </header>
        <body>
          <p>Category</p>
          <FilterList className={styles.filterList} />

          <div className={styles.sortContainer}>
            <p className={styles.sortP}>Sort By</p>
            <div className={styles.sortContent}>
              <span>Popularity</span>
              <span>Newest</span>
              <span>Oldest</span>
              <span>High Price</span>
              <span>Low Price</span>
              <span>Review</span>
            </div>
          </div>

          <div className={styles.rangeContainer}>
            <p>Price Range</p>
            <div className={styles.rangeContent}>
              <input type='number' placeholder='min-price' />
              <input type='number' placeholder='max-price' />
            </div>
          </div>
        </body>

        <footer>
          <Button>Apply Filter</Button>
        </footer>
      </div>
  );
};

export default FilterModal;
