import styles from './Home.module.css';
import Product from '../components/Product';
import Input from '../components/Input';
import FilterList from '../components/FilterList';

import menuIcon from '../images/menu-variant.png';
import logoIcon from '../images/Logo.png';
import avatarIcon from '../images/Avatar.png';
import headSet from '../images/headset.png';
import rightArrow from '../images/arrow-right.png';

const Home = () => {
  return (
    <div>
      <section className={styles.homeContainer}>
        <header className={styles.headerIcons}>
          <img src={menuIcon} alt='menu icon' />

          <img src={logoIcon} alt='logo icon' />

          <img src={avatarIcon} alt='profile icon' />
        </header>

        <div>
          <p>Hi Andrea</p>
          <h2>What are you looking for today?</h2>
        </div>
        <div className={styles.searchContainer}>
          <Input />
        </div>
      </section>

      <section className={styles.homeProdDisplay}>
       <FilterList />

        <div className={styles.prodContainer}>
          <div className={styles.prodList}>
            <div className={styles.prodDesc}>
              <h2>TMA-2 Modular Headphone</h2>
              <div className={styles.shopNow}>
                <a href=''>
                  Shop now
                  <span>
                    <img src={rightArrow} />
                  </span>
                </a>
              </div>
            </div>
            <div className={styles.prodImage}>
              <img src={headSet} alt='a black headphone' />
            </div>
          </div>

          <div className={styles.prodList}>
            <div className={styles.prodDesc}>
              <h2>TMA-2 Modular Headphone</h2>
              <div className={styles.shopNow}>
                <a href=''>
                  Shop now
                  <span>
                    <img src={rightArrow} />
                  </span>
                </a>
              </div>
            </div>
            <div className={styles.prodImage}>
              <img src={headSet} alt='a black headphone' />
            </div>
          </div>
        </div>

        <div className={styles.featured}>
          <p>Featured Products</p>
          <a href=''>See all</a>
        </div>

        <div className={styles.featuredContainer}>
          <Product />
          <Product />
          <Product />
        </div>
      </section>
    </div>
  );
};
export default Home;
