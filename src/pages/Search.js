import styles from './Search.module.css';
import { NavLink, useHistory } from 'react-router-dom';
import { useState } from 'react';
import { useGetProductsQuery } from '../services/productsApi';

import Input from '../components/ui/Input';
import Rating from '../components/ui/Rating';

import clock from '../images/clock.png';
import cancel from '../images/x.png';
import { FaCartPlus, FaChevronLeft } from 'react-icons/fa';

const Search = (props) => {
  const history = useHistory();
  const { data, isSuccess } = useGetProductsQuery();
  const [searchFilter, setSearchFilter] = useState([]);
  const [searches, setSearches] = useState('');

  const setPrevCount = JSON.parse(localStorage.getItem('cart-count') || '0');
  const prevSearch = JSON.parse(localStorage.getItem('latestSearch', []));

  const [latestSearch, setLatestSearch] = useState(prevSearch);

  const handleChange = (e) => {
    const searchItem = e.target.value;
    const filteredSearchResults =
      isSuccess &&
      data &&
      data.filter((product) =>
        product.title.toLowerCase().includes(searchItem.toLowerCase())
      );

    const notFound = searchFilter.map((item) => item.title !== searchItem);

    if (searchItem === '') {
      setSearchFilter([]);
      setSearches('Search is empty');
    } else {
      setSearchFilter(filteredSearchResults);
      setSearches('');
    }
    if (notFound) {
      setSearches('Searched item not found');
    }
  };

  const handleLatestSearch = (id) => {
    const latestSearch = data?.filter((product) => product.id === id);

    localStorage.setItem('latestSearch', JSON.stringify(latestSearch));

    setLatestSearch(latestSearch);

    history.push(`/details/${id}`);
  };

  const handleCancel = (id) => {
    const cancel = latestSearch?.filter((item) => item.id !== id);
    setLatestSearch(cancel)
  };
  return (
    <div className={styles.searchContainer}>
      <section className={styles.searchInputSection}>
        <header className={styles.searchHeader}>
          <NavLink to='/home'>
            <FaChevronLeft />
          </NavLink>
          <h2>Search</h2>
          <FaCartPlus size={22} /> <span>{setPrevCount}</span>
        </header>
        <div className={styles.inputContainer}>
          <Input autoFocus onChange={handleChange} />
        </div>
      </section>

      <section className={styles.searchResult}>
        <p className={styles.searchTitle}>Latest search</p>
        {latestSearch &&
          latestSearch.map((item) => (
            <div key={item.id}>
              <img src={clock} alt='clock' />
              <p className={styles.prodTitle}>{item.title}</p>
              <img
                src={cancel}
                alt='cancel'
                onClick={() => handleCancel(item.id)}
              />
            </div>
          ))}

        {searchFilter.length === 0 && <p>{searches}</p>}
      </section>

      {searchFilter.length !== 0 && (
        <section className={styles.popularProducts}>
          <p className={styles.popularTitle}>Popular products</p>
          {searchFilter.splice(0, 10).map((product) => (
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
