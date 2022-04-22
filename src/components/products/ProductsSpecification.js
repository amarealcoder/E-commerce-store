import styles from './ProductsSpecification.module.css';
import React from 'react';

const ProductsSpecification = (props) => {

  return (
    <div className={styles.productsContainer}>
      <img src={props.image} alt={props.title} />
      <div>
        <p className={styles.productsTitle}>{props.title}</p>
        <p>
          {props.description}
        </p>
      </div>
    </div>
      
  );
};
export default ProductsSpecification;

