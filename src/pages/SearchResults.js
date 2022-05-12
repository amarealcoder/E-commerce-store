import React, { useState, useEffect, useCallback } from 'react';
import { useHistory } from 'react-router-dom';
import styles from './SearchResults.module.css';
import { useGetProductsQuery } from '../services/productsApi';
import useFilter from '../hooks/useFilter';

import Product from '../components/products/Product';
import ProductsHeader from '../components/products/ProductsHeader';

import filter from '../images/sliders.png';
import Rating from '../components/ui/Rating';
import FilterModal from './FilterModal';
import { FaSpinner } from 'react-icons/fa';

const SearchResults = () => {
  const history = useHistory(); 
  const [isOpen, setIsOpen] = useState(false);
  const { data, isSuccess, isLoading } = useGetProductsQuery();
  const [filtered, setFiltered] = useState([]);
  const filteredCategory = useFilter(data, 'category')
  const [pageTitle, setPageTitle] = useState('');
  const [pageCategory, setPageCategory] = useState('')

  const handleFilter = useCallback((category, title) => {
    const filteredCategory = isSuccess && data?.filter(item => item.category === category);
    setFiltered(filteredCategory);
    setPageTitle(title)
    setPageCategory(category)
  }, [isSuccess, data]) 

  useEffect(() => {
    isSuccess && handleFilter(filteredCategory.category)
    setFiltered(data);
    setPageTitle(pageTitle)
    setPageCategory(pageCategory)
  }, [isSuccess, data, filteredCategory.category, handleFilter, pageCategory, pageTitle])

  return (
    <div>
      {isOpen && <FilterModal  setIsOpen={setIsOpen} />}
      <section className={styles.container1}>
        <ProductsHeader onClick={() => history.push('/')} />
        
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
            {isSuccess && filteredCategory.map(item => <li key={item.id} onClick={() => handleFilter(item.category, item.title)}>{item.category}
            </li>)}
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
                  left: '50%'
                }}
                className={styles.loadingIcon}
              />
            </span>
          )}
        {isSuccess && data && filtered?.map(item => <Product key={item.id} image={item.image} title={item.title} price={item.price}>
          <div className={styles.rating}>
            <Rating rating={item.rating.rate} count={item.rating.count}/>
          </div>
        </Product>)}
      </section>
    </div>
  );
};
export default SearchResults;
