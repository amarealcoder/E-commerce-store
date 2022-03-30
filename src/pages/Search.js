import styles from './Search.module.css';
import { NavLink, useHistory } from 'react-router-dom';
import { useState } from 'react';
import { useGetProductsQuery } from '../services/productsApi';

import Input from '../components/ui/Input';
import Rating from '../components/ui/Rating';

import chevronRight from '../images/chevron-left.png';
import cart from '../images/shopping-cart.png';
import clock from '../images/clock.png';
import cancel from '../images/x.png';
// import headset from '../images/headset.png';

const Search = (props) => {
  const histroy = useHistory();
  const { data, isSuccess, error, isError } = useGetProductsQuery();
  const [searchFilter, setSearchFilter] = useState([]);
  const [latestSearch, setLatestSearch] = useState([]);

  const handleChange = (e) => {
    const searchItem = e.target.value;
    const filteredSearchResults =
      isSuccess &&
      data &&
      data.filter((product) =>
        product.title.toLowerCase().includes(searchItem.toLowerCase())
      );
    if (searchItem === '') {
      setSearchFilter([]);
    } else {
      setSearchFilter(filteredSearchResults);
    }
  };
  const handleProductsDisplay = (title) => {
    console.log(title)
    let newArray = new Array(title);
    
    console.log(newArray);
    setLatestSearch(newArray)
    history.push('/product-overview');
}
  return (
    <div className={styles.searchContainer}>
      <section className={styles.searchInputSection}>
        <header className={styles.searchHeader}>
          <NavLink to='/'>
            <img src={chevronRight} alt='a right angle' />
          </NavLink>
          <h2>Search</h2>
          <img src={cart} />
        </header>
        <div className={styles.inputContainer}>
          <Input onChange={handleChange} />
        </div>
      </section>

      {/* {latestSearch &&
        latestSearch.map((title) => ( */}
          <section className={styles.searchResult}>
            <p className={styles.searchTitle}>Latest search</p>
            <div>
              <img src={clock} />
              <p className={styles.prodTitle}>kkk</p>
              <img src={cancel} />
            </div>
          </section>
        {/* ))} */}

      {searchFilter.length !== 0 && (
        <section className={styles.popularProducts}>
          <p className={styles.popularTitle}>Popular products</p>
          {searchFilter.map((product) => (
            <div
              key={product.id}
              onClick={() => handleProductsDisplay(product)}
              className={styles.popularProdContainer}
            >
              <div className={styles.prodImageContainer}>
                <img src={product.image} alt={product.title} />
              </div>
              <div>
                <p className={styles.prodItem}>{product.title}</p>
                <p className={styles.prodPrice}>USD {product.price}</p>
                <Rating
                  rating={product.rating.rate}
                  count={product.rating.count}
                />
              </div>
            </div>
          ))}
        </section>
      )}
    </div>
  );
};
export default Search;
