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
  const history = useHistory();
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
  const handleLatestSearch = (id) => {
    console.log(id)
  
    const latestSearch = isSuccess && data && data.filter(product => product.id === id)
    console.log(latestSearch)
    setLatestSearch(latestSearch);

    history.push(`/search/${id}`);
  };
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

     
      <section className={styles.searchResult}>
        <p className={styles.searchTitle}>Latest search</p>
        {latestSearch.map((search) => (
          <div>
            <img src={clock} />
            <p className={styles.prodTitle}>{search.title}</p>
            <img src={cancel} />
          </div>
        ))}
      </section>
      

      {searchFilter.length !== 0 && (
        <section className={styles.popularProducts}>
          <p className={styles.popularTitle}>Popular products</p>
          {searchFilter.map((product) => (
            <div
              key={product.id}
              onClick={() => handleLatestSearch(product.id)}
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
