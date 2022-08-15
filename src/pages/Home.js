import styles from './Home.module.css';
import { useEffect, useState, useCallback } from 'react';
import { useHistory, NavLink } from 'react-router-dom';
import { useGetProductsQuery } from '../services/productsApi';
import useFilter from '../hooks/useFilter';

import Product from '../components/products/Product';
import Input from '../components/ui/Input';
import Loader from '../components/ui/Loader';

import menuIcon from '../images/menu-variant.png';
import avatarIcon from '../images/Avatar.jpg';
import { FaTimes, FaArrowRight } from 'react-icons/fa';

const Home = ({ user }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [category, setCategory] = useState([]);
  const [activeCategory, setActiveCategory] = useState('');

  const history = useHistory();

  const { data, error, isLoading, isError, isSuccess } = useGetProductsQuery();
  const filteredCategory = useFilter(data, 'category');

  const handleOpenMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleFilteredProducts = useCallback(
    (category) => {
      const filteredProductsCategory =
        isSuccess && data?.filter((product) => product.category === category);
      setCategory(filteredProductsCategory);

      setActiveCategory(category);
    },
    [isSuccess, data]
  );

  useEffect(() => {
    isSuccess && handleFilteredProducts(filteredCategory[0].category);
    // eslint-disable-next-line
  }, [isSuccess, handleFilteredProducts]);

  const userEmailSplit = user?.email || '';
  const userName = userEmailSplit.split('@')[0];

  const displayNameSplit = user?.displayName || '';
  const userDisplayName = displayNameSplit.split(' ')[0];

  return (
    <>
      <section className={styles.homeContainer}>
        <nav className={styles.headerIcons}>
          {!isMenuOpen ? (
            <img
              src={menuIcon}
              alt='menu icon'
              onClick={handleOpenMenu}
              style={{ cursor: 'pointer' }}
            />
          ) : (
            <FaTimes onClick={handleOpenMenu} style={{ cursor: 'pointer' }} />
          )}

          {isMenuOpen && (
            <ul className={styles.navContainer}>
              <NavLink to='/search' activeClassName={styles.isActive}>
                Search
              </NavLink>
              <NavLink to='/profile' activeClassName={styles.isActive}>
                Profile
              </NavLink>
              <NavLink to='/filter-results' activeClassName={styles.isActive}>
                See all
              </NavLink>
            </ul>
          )}
          <h1>Buzzymart</h1>

          <NavLink to='/profile'>
            <div>
              <img
                src={user?.photoURL || avatarIcon}
                alt='profile icon'
                className={styles.profilePic}
              />
            </div>
          </NavLink>
        </nav>
        <div>
          <p>Hi {userDisplayName || userName}</p>
          <h2>What are you looking for today?</h2>
        </div>
        <div className={styles.searchContainer}>
          <Input
            onFocus={() => history.push('/search')}
            placeholder={'Search something'}
            data={data}
          />
        </div>
      </section>

      <section className={styles.homeProdDisplay}>
        <ul className={styles.category}>
          {isSuccess &&
            data &&
            filteredCategory.map((item) => (
              <NavLink
                className={() =>
                  activeCategory === item.category ? styles.active : ''
                }
                key={item.id}
                to='/home'
                onClick={() => handleFilteredProducts(item.category)}
              >
                {item.category}
              </NavLink>
            ))}
        </ul>
        <div className={styles.prodContainer}>
          {isSuccess &&
            data &&
            category.map((product) => (
              <div key={product.id} className={styles.prodList}>
                <div className={styles.prodDesc}>
                  <h2>{product.title}</h2>
                  <div className={styles.shopNow}>
                    <NavLink to={`/details/${product.id}`}>
                      Shop now
                      <FaArrowRight
                        style={{
                          marginLeft: '10px',
                          bottom: '-3px',
                          position: 'relative',
                        }}
                      />
                    </NavLink>
                  </div>
                </div>

                <div className={styles.prodImage}>
                  <img src={product.image} alt={product.title} />
                </div>
              </div>
            ))}
        </div>

        <div className={styles.featured}>
          <p>Featured Products</p>
          <span>
            <NavLink to='/filter-results'>See all</NavLink>
          </span>
        </div>

        <div className={styles.featuredContainer}>
          {isLoading && <Loader />}
          {isError && <p className={styles.error}>{error.status}</p>}
          {isSuccess &&
            data &&
            data
              .slice(0, 5)
              .map((product) => (
                <Product
                  key={product.id}
                  image={product.image}
                  title={product.title}
                  price={product.price}
                  onClick={() => history.push(`/details/${product.id}`)}
                />
              ))}
        </div>
      </section>
    </>
  );
};

export default Home;
