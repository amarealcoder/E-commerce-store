import styles from './Home.module.css';

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
          <input
            type='text'
            placeholder='Search something'
            className={styles.homeInput}
          />
        </div>
      </section>

      <section className={styles.homeProdDisplay}>
        <ul>
          <li>headphones</li>
          <li>headband</li>
          <li>earpods</li>
          <li>headphones</li>
          <li>headband</li>
          <li>earpods</li>
          <li>headphones</li>
          <li>headband</li>
          <li>earpods</li>
        </ul>

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
          <div className={styles.featuredProducts}>
            <img src={headSet} alt='a product image' />
            <p>TMA-2 HD Wirelss</p>
            <span>USD 350</span>
          </div>

          <div className={styles.featuredProducts}>
            <img src={headSet} alt='a product image' />
            <p>TMA-2 HD Wirelss</p>
            <span>USD 350</span>
          </div>

          <div className={styles.featuredProducts}>
            <img src={headSet} alt='a product image' />
            <p>TMA-2 HD Wirelss</p>
            <span>USD 350</span>
          </div>
        </div>
      </section>
    </div>
  );
};
export default Home;
