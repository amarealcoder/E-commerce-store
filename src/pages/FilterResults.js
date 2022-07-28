import React, { useState, useCallback } from 'react';
import { useHistory } from 'react-router-dom';
import styles from './FilterResults.module.css';
import { useGetProductsQuery } from '../services/productsApi';
import useFilter from '../hooks/useFilter';

import Product from '../components/products/Product';
import ProductsHeader from '../components/products/ProductsHeader';

import filter from '../images/sliders.png';
import Rating from '../components/ui/Rating';
import FilterModal from './FilterModal';
import { FaSpinner, FaChevronLeft } from 'react-icons/fa';

const SearchResults = () => {
  const history = useHistory();
  const [isOpen, setIsOpen] = useState(false);
  const { data, isSuccess, isLoading } = useGetProductsQuery();
  const [filtered, setFiltered] = useState([]);
  const filteredCategory = useFilter(data, 'category');
  const [pageTitle, setPageTitle] = useState('');
  const [pageCategory, setPageCategory] = useState('');
  const [isFiltered, setIsFiltered] = useState(false);

  const handleFilter = useCallback(
    (category, title) => {
      const filteredCategories =
        isSuccess && data?.filter((item) => item.category === category);
      setPageTitle(title);
      setPageCategory(category);
      setFiltered(filteredCategories);
    },
    [isSuccess, data]
  );

  const renderProducts = () => {
    if (!isFiltered) {
      return (
        isSuccess &&
        data?.map((item) => (
          <Product
            key={item.id}
            image={item.image}
            title={item.title}
            price={item.price}
            onClick={() => history.push(`/details/${item.id}`)}
          >
            <div className={styles.rating}>
              <Rating rating={item.rating.rate} count={item.rating.count} />
            </div>
          </Product>
        ))
      );
    } else {
      return (
        isSuccess &&
        data &&
        filtered?.map((item) => (
          <Product
            key={item.id}
            image={item.image}
            title={item.title}
            price={item.price}
            onClick={() => history.push(`/details/${item.id}`)}
          >
            <div className={styles.rating}>
              <Rating rating={item.rating.rate} count={item.rating.count} />
            </div>
          </Product>
        ))
      );
    }
  };

  return (
    <div>
      {isOpen && (
        <FilterModal
          setIsOpen={setIsOpen}
          setFiltered={setFiltered}
          setIsFiltered={setIsFiltered}
        />
      )}
      <section className={styles.container1}>
        <ProductsHeader>
          <FaChevronLeft
            style={{ cursor: 'pointer' }}
            onClick={() => history.goBack()}
          />
          <button
            style={{ marginLeft: '5%', marginBottom: '5px', cursor: 'pointer' }}
            onClick={() => setIsFiltered(false)}
          >
            See all
          </button>
        </ProductsHeader>
        <div className={styles.title}>
          <p>{isSuccess && pageCategory}</p>
          <h3>{isSuccess && pageTitle}</h3>
        </div>
        <div className={styles.filterContainer}>
          <button onClick={() => setIsOpen(true)}>
            <img src={filter} alt='filter icon' />
            Filter
          </button>
          <ul>
            {isSuccess &&
              filteredCategory.map((item) => (
                <li
                  key={item.id}
                  onClick={() => {
                    setIsFiltered(true);
                    handleFilter(item.category, item.title);
                  }}
                >
                  {item.category}
                </li>
              ))}
          </ul>
        </div>
      </section>

      <section className={styles.container2}>
        {isLoading && (
          <span>
            <FaSpinner
              style={{
                fontSize: '50px',
                position: 'absolute',
                left: '50%',
              }}
              className={styles.loadingIcon}
            />
          </span>
        )}
        {renderProducts()}
      </section>
    </div>
  );
};
export default SearchResults;
