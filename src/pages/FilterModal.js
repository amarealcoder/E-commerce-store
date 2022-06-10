import React, { useState } from 'react';
import ReactDom from 'react-dom';
import styles from './FilterModal.module.css';
import useFilter from '../hooks/useFilter';
import { useGetProductsQuery } from '../services/productsApi';

const Backdrop = (props) => {
  return <div className={styles.backdrop} onClick={() => props.setIsOpen(false)}></div>
}

const ModalOverlay = ({setFiltered, setIsOpen, setIsFiltered}) => {
  const { isSuccess, data } = useGetProductsQuery();
  const filteredCategory = useFilter(data, 'category');
  const [activeCategory, setActiveCategory] = useState('');
  const [activeSort, setActiveSort] = useState('');
  const [isMinPrice, setIsMinPrice] = useState(0);
  const [isMaxPrice, setIsMaxPrice] = useState(0);


  const selectfilteredCategory = isSuccess && data?.filter(item => item.category === activeCategory);
   

  const handleCategoryState = (category) => {
    setActiveCategory(category); 
  }

  const handleSortState = (sortBy) => {
    setActiveSort(sortBy)
  }
 
  const handleMinPrice = (e) => {
    setIsMinPrice(e.target.value)
  }

  const handleMaxPrice = (e) => {
    setIsMaxPrice(e.target.value)
  }
  
  const handleFilterAll = () => {
    
    if(activeCategory && !activeSort && !isMinPrice && !isMaxPrice){
      setFiltered(selectfilteredCategory)
      console.log(selectfilteredCategory)
      

    }else if(activeSort === 'popular' && activeCategory){
      const sortPopularCategory =   selectfilteredCategory?.filter(item => item.rating.rate >= 4);
      setFiltered(sortPopularCategory)

    }else if(activeSort === 'newest' && activeCategory){
      const sortNewestCategory = selectfilteredCategory?.slice(-3)
      setFiltered(sortNewestCategory)

    }else if(activeSort === 'oldest' && activeCategory){
      const sortOldestCategory =   selectfilteredCategory?.slice(0, 3);
      setFiltered(sortOldestCategory)

    }else if(activeSort === 'highest price' && activeCategory){
      const highestPricesCategory = selectfilteredCategory?.filter(item => item.price >= 20);
    setFiltered(highestPricesCategory)

    }else if(activeSort  === 'lowest price' && activeCategory){
      const lowestPricesCategory = selectfilteredCategory.filter(item => item.price <= 20) 
    setFiltered(lowestPricesCategory)

    }else if(isMinPrice && isMaxPrice && activeCategory){
      const priceRange = selectfilteredCategory.filter(item => item.price >= isMinPrice && item.price <= isMaxPrice)
    setFiltered(priceRange)
     
    }else if(activeSort === 'popular' && !activeCategory ){
      const sortPopular =  data?.filter(item => item.rating.rate >= 4) 
      setFiltered(sortPopular)

    }else if(activeSort === 'newest' && !activeCategory){
      const sortNewest = data?.slice(-3);
      setFiltered(sortNewest)

    }else if(activeSort === 'oldest' && !activeCategory ){
      const sortOldest =  data?.slice(0, 3);
      setFiltered(sortOldest)

    }else if(activeSort  === 'highest price' && !activeCategory){
      const highestPrices = data?.filter(item => item.price >= 20);
      setFiltered(highestPrices)

    }else if(activeSort  === 'lowest price' && !activeCategory){
      const lowestPrices = data.filter(item => item.price <= 20);
      setFiltered(lowestPrices)

    }else if(isMinPrice && isMaxPrice && !activeCategory){
      const priceRange = data.filter(item => item.price >= isMinPrice && item.price <= isMaxPrice)
      setFiltered(priceRange)
      
    }

    setActiveSort('')
    setActiveCategory('')
    setIsMinPrice(0);
    setIsMaxPrice(0);
    setIsOpen(false);
    setIsFiltered(true)
  }

  return <React.Fragment>
    <div className={styles.modalContainer}>
      <header>
        <h2>Filter</h2>
        <h2 className={styles.cancel} onClick={() => setIsOpen(false)}>x</h2>
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
            <input type='number' placeholder='min-price' onChange={handleMinPrice}/>
            <input type='number' placeholder='max-price' onChange={handleMaxPrice}/>
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
    {ReactDom.createPortal(<ModalOverlay setIsOpen={props.setIsOpen} setFiltered={props.setFiltered} setIsFiltered={props.setIsFiltered}/>, document.getElementById('overlay-root'))}
  </React.Fragment>
}
export default FilterModal;
