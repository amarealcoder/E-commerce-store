import styles from './Search.module.css';
import { useHistory } from 'react-router-dom';
import { useState } from 'react';
import { useGetProductsQuery } from '../services/productsApi';

import Input from '../components/ui/Input';
import Rating from '../components/ui/Rating';
import ProductsHeader from '../components/products/ProductsHeader';
import ShoppingCart from '../components/ui/ShoppingCart';

import clock from '../images/clock.png';
import cancel from '../images/x.png';
import { FaCartPlus, FaChevronLeft } from 'react-icons/fa';

const Search = (props) => {
  const history = useHistory();
  const { data, isSuccess } = useGetProductsQuery();
  const [searchFilter, setSearchFilter] = useState([]);
  const [searches, setSearches] = useState('');
  const [isOpen, setIsOpen] = useState(false);

  const setPrevCount = JSON.parse(localStorage.getItem('cart-count') || '0');
  const setPrevCartItems = JSON.parse(localStorage.getItem('cart') || '[]');
  const prevSearch = JSON.parse(localStorage.getItem('latestSearch' || '[]'));

  const [cartCount, setCartCount] = useState(setPrevCount);
  const [cartItems, setCartItems] = useState(setPrevCartItems);
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
    setLatestSearch(cancel);
  };
  return (
    <div className={styles.searchContainer}>
      {isOpen && (
        <ShoppingCart
          setCartCount={setCartCount}
          setCartItems={setCartItems}
          cartItems={cartItems}
          setIsOpen={setIsOpen}
        />
      )}
      <ProductsHeader>
        <FaChevronLeft
          style={{ cursor: 'pointer' }}
          size={25}
          onClick={() => history.goBack()}
        />
        <h2>Search</h2>

        <div>
          <FaCartPlus
            size={30}
            style={{ cursor: 'pointer' }}
            onClick={() => setIsOpen(true)}
          />
          <span>{cartCount}</span>
        </div>
      </ProductsHeader>

      <Input autoFocus onChange={handleChange} />

      <section className={styles.searchResult}>
        <p className={styles.searchTitle}>Latest search</p>
        {latestSearch &&
          latestSearch.map((item) => (
            <div key={item.id}>
              <img src={clock} alt='clock' />
              <p
                className={styles.prodTitle}
                onClick={() => history.push(`/details/${item.id}`)}
              >
                {item.title}
              </p>
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
        <section>
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
              <div className={styles.popularRatesContainer}>
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
