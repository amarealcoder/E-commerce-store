import styles from './Home.module.css';

import menuIcon from '../images/menu-variant.svg';
import logoIcon from '../images/Logo.svg';
import avatarIcon from '../images/Avatar.svg';

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
      </section>
    </div>
  );
};
export default Home;
