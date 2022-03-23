import styles from './Home.module.css';
import { useState } from 'react';
import { useGetProductsQuery } from '../services/productsApi';
import { NavLink } from 'react-router-dom';

import Product from '../components/products/Product';
import Input from '../components/ui/Input';
import FilterList from '../components/products/FilterList';

import menuIcon from '../images/menu-variant.png';
import logoIcon from '../images/Logo.png';
import avatarIcon from '../images/Avatar.png';
import headSet from '../images/headset.png';
import rightArrow from '../images/arrow-right.png';

import { FaSpinner, FaTimes } from 'react-icons/fa';

const Home = (props) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { data, error, isLoading, isError, isSuccess } = useGetProductsQuery()

  console.log(data)

  const openNavMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <section className={styles.homeContainer}>
        <nav className={styles.headerIcons}>
          {!isMenuOpen ? (
            <img src={menuIcon} alt='menu icon' onClick={openNavMenu} />
          ) : (
            <FaTimes
              // style={{ fontSize: '30px' }}
              onClick={openNavMenu}
            />
          )}

          {isMenuOpen && (
            <ul className={styles.navContainer}>
              <NavLink to='/search' activeClassName={styles.isActive}>
                Search
              </NavLink>
              {/* <NavLink to='/products' activeClassName={styles.isActive}>
                Products
              </NavLink> */}
              <NavLink to='/profile' activeClassName={styles.isActive}>
                Profile
              </NavLink>
            </ul>
          )}
          <img src={logoIcon} alt='logo icon' />

          <NavLink to='/profile'>
            <img src={avatarIcon} alt='profile icon' />
          </NavLink>
        </nav>
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
          {isLoading && (
            <FaSpinner
              style={{ fontSize: '50px' }}
              className={styles.loadingIcon}
            />
          )}
          {isError && <p>{error.message}</p>}
          {isSuccess && data && data.map(product => <Product key={product.id} image={product.image} title={product.title} price={product.price}/>)}
        </div>
      </section>
    </>
  );
};

export default Home;

/* const Navbar = () => {
  const [navOpen, setNavOpen] = useState(false);

  const openNav = () => {
    setNavOpen(!navOpen)
  }

 

  return (
    <aside className={styles.aside}>
      <div className={styles.logoContainer}>
        <img src={logo} alt='logo' />

        {!navOpen ? (
          <FaAlignJustify
            style={{ fontSize: '30px', color: '#fff' }}
            onClick={openNav}
            className={styles.toggleIcon}
          />
        ) : (
          <FaTimes
           
            onClick={openNav}
            className={styles.toggleIcon}
          />
        )}
      </div>

      <div className={`${!navOpen && styles.asideContent}`}>
        <div className={styles.asideWallet}>
          <div className={styles.asideWalletContainer}>
            <div className={styles.asideWalletContent}>
              <div className={styles.asideWalletImg}>
                <img src={wallet} alt='wallet' />
              </div>
              <div className={styles.asideWalletBallanceContainer}>
                <p>Wallet Balance</p>
                <p className={styles.asideWalletAmount}>$15,001.00</p>
              </div>
            </div>
            <AiFillEye color={'fff'} />
          </div>
          <hr />

          <div className={styles.asideWalletContainer}>
            <div className={styles.asideWalletContent}>
              <div className={styles.asideWalletImg}>
                <AiTwotoneStar
                  style={{
                    color: '#F59E0B',
                    textAlign: 'center',
                    marginTop: '4px',
                  }}
                />
              </div>
              <div className={styles.asideWalletBallanceContainer}>
                <p>Awarded Points</p>
                <p className={styles.asideWalletAmount}>35</p>
              </div>
            </div>
          </div>
          <hr />

          <div className={styles.actionButtons}>
            <button className={styles.btn1}>Pay-In</button>
            <button className={styles.btn2}>Pay-Out</button>
          </div>
        </div>

        <NavContainer />
        <AsideCard />
      </div>
    </aside>
  );
};

export default Navbar;*/
