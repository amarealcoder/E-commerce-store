import styles from './Home.module.css';
import { useEffect, useState } from 'react';
import { useGetProductsQuery } from '../services/productsApi';
import { NavLink } from 'react-router-dom';

import Product from '../components/products/Product';
import Input from '../components/ui/Input';

import menuIcon from '../images/menu-variant.png';
import logoIcon from '../images/Logo.png';
import avatarIcon from '../images/Avatar.png';

import { FaSpinner, FaTimes, FaArrowRight } from 'react-icons/fa';
import useFilter from '../hooks/useFilter';

const Home = (props) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [category, setCategory] = useState([]);
  const [activeCategory, setActiveCategory] = useState('');

  const { data, error, isLoading, isError, isSuccess } = useGetProductsQuery();
  const filteredCategory = useFilter(data, 'category');

  const handleOpenMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleFilteredProducts = (category) => {
    console.log(category)
    const filteredProductsCategory =
      isSuccess &&
      data &&
      data.filter((product) => product.category === category);
    setCategory(filteredProductsCategory);

    setActiveCategory(category);
    console.log(activeCategory)
  };

  return (
    <>
      <section className={styles.homeContainer}>
        <nav className={styles.headerIcons}>
          {!isMenuOpen ? (
            <img src={menuIcon} alt='menu icon' onClick={handleOpenMenu} />
          ) : (
            <FaTimes onClick={handleOpenMenu} />
          )}

          {isMenuOpen && (
            <ul className={styles.navContainer}>
              <NavLink to='/search' activeClassName={styles.isActive}>
                Search
              </NavLink>

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
        <ul className={styles.category}>
          {isSuccess &&
            data &&
            filteredCategory.map((item, index) => (
              <NavLink
                activeClassName={
                  activeCategory === item.category && styles.active
                }
                key={item.id}
                to=''
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
                    <NavLink to='/'>
                      Shop now
                      <FaArrowRight
                        style={{ marginLeft: '10px', marginTop: '-5px' }}
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
            <NavLink to='/search-results'>See all</NavLink>
          </span>
        </div>

        <div className={styles.featuredContainer}>
          {isLoading && (
            <span>
              <FaSpinner
                style={{
                  fontSize: '50px'
                }}
                className={styles.loadingIcon}
              />
            </span>
          )}
          {isError && <p>{error.message}</p>}
          {isSuccess &&
            data &&
            data.map((product) => (
              <Product
                key={product.id}
                image={product.image}
                title={product.title}
                price={product.price}
              />
            ))}
        </div>
      </section>
    </>
  );
};

export default Home;
