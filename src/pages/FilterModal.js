import React, { useState } from 'react';
import ReactDom from 'react-dom';
import styles from './FilterModal.module.css';
import useFilter from '../hooks/useFilter';
import { useGetProductsQuery } from '../services/productsApi';

const Backdrop = (props) => {
  return <div className={styles.backdrop} onClick={() => props.setIsOpen(false)}></div>
}

const ModalOverlay = (props) => {
  const { isSuccess, data } = useGetProductsQuery();
  const filteredCategory = useFilter(data, 'category');
  const [activeCategory, setActiveCategory] = useState('');
  const [activeSort, setActiveSort] = useState('');

  const handleCategoryState = (category) => {
    setActiveCategory(category); 
  }

  const handleSortState = (sortBy) => {
    setActiveSort(sortBy)
    console.log(sortBy)
  }

  const handleFilterAll = () => {
    const selectfilteredCategory = isSuccess && data?.filter(item => item.category === activeCategory);
    console.log(selectfilteredCategory)
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
          {isSuccess && filteredCategory?.map(item => <span onClick={() => handleCategoryState(item.category)} key={item.id} className={` ${activeCategory === item.category ? styles.active : ''}`}>{item.category}</span>)}
        </div>
        <div className={styles.sortContainer}>
          <p className={styles.sortP}>Sort By</p>
          <div className={styles.sortContent}>
            <button onClick={() => handleSortState('popular')} className={` ${activeSort === 'popular' ? styles.active : ''}`}>Popularity</button>
            <button onClick={() => handleSortState('newest')} className={` ${activeSort === 'newest' ? styles.active : ''}`}>Newest</button>
            <button onClick={() => handleSortState('oldest')} className={` ${activeSort === 'oldest' ? styles.active : ''}`}>Oldest</button>
            <button onClick={() => handleSortState('highest price')} className={` ${activeSort === 'highest price' ? styles.active : ''}`}>Highest price</button>
            <button onClick={() => handleSortState('lowest price')} className={` ${activeSort === 'lowest price' ? styles.active : ''}`}>Lowest price</button>

          </div>
        </div>

        <div className={styles.rangeContainer}>
          <p>Price Range</p>
          <div className={styles.rangeContent}>
            <input type='number' placeholder='min-price'/>
            <input type='number' placeholder='max-price'/>
          </div>
        </div>
      </React.Fragment>

      <footer>
        <button onClick={() => handleFilterAll()} className={styles.filterButton}>Apply Filter</button>
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
export default FilterModal;
