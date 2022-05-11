import React, { useState } from 'react';
import ReactDom from 'react-dom';
// import { NavLink } from 'react-router-dom'
import styles from './FilterModal.module.css';
import Button from '../components/ui/Button';
import useFilter from '../hooks/useFilter';
import { useGetProductsQuery } from '../services/productsApi';


const Backdrop = (props) => {
  return <div className={styles.backdrop} onClick={() => props.setIsOpen(false)}></div>
}

const ModalOverlay = (props) => {
  const { isSuccess, data } = useGetProductsQuery();
  const filteredCategory = useFilter(data, 'category');
  const [activeCategory, setActiveCategory] = useState('');

  const handleFilter = (category) => {
    setActiveCategory(category)
  }

  return <React.Fragment>
    <div className={styles.modalContainer}>
      <header>
        <h2>Filter</h2>
        <h2 className={styles.cancel} onClick={() => props.setIsOpen(false)}>x</h2>
      </header>
      <React.Fragment>
        <p>Category</p>
        <div className={styles.filteredCategoryContainer}>
          {isSuccess && filteredCategory?.map(item => <span onClick={() => handleFilter(item.category)} key={item.id} className={` ${activeCategory === item.category ? styles.active : ''}`}>{item.category}</span>)}
        </div>
        <div className={styles.sortContainer}>
          <p className={styles.sortP}>Sort By</p>
          <div className={styles.sortContent}>
            <span onClick={() => handleFilter('popularity')}>Popularity</span>
            <span onClick={() => handleFilter('newest')}>Newest</span>
            <span onClick={() => handleFilter('oldest')}>Oldest</span>
            <span onClick={() => handleFilter('highest price')}>Highest price</span>
            <span onClick={() => handleFilter('lowest price')}>Lowest price</span>

          </div>
        </div>

        <div className={styles.rangeContainer}>
          <p>Price Range</p>
          <div className={styles.rangeContent}>
            <input type='number' placeholder='min-price' />
            <input type='number' placeholder='max-price' />
          </div>
        </div>
      </React.Fragment>

      <footer>
        <Button>Apply Filter</Button>
      </footer>
  </div>
</React.Fragment>
}

const FilterModal = (props) => {
  return  <React.Fragment>    
    {ReactDom.createPortal(<Backdrop setIsOpen={props.setIsOpen}/>, document.getElementById('backdrop-root'))}
    {ReactDom.createPortal(<ModalOverlay setIsOpen={props.setIsOpen}/>, document.getElementById('overlay-root'))}

  </React.Fragment>
  }
;
export default FilterModal;
