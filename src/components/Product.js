import styles from './Product.module.css';
import { useState, useEffect } from 'react';

import { FaSpinner } from 'react-icons/fa';

const productsAPI = process.env.REACT_APP_PRODUCTSAPI_KEY;

const Product = (props) => {
  const [productItems, setProductItems] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);

    fetch(productsAPI)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        console.log(data);
        setProductItems(data);
      })
      .catch((err) => {
        console.log(err);
      });
    setIsLoading(false);
  }, []);

  return (
    <div className={styles.productsContainer}>
      {!isLoading && (
        <FaSpinner
          style={{ fontSize: '50px' }}
          className={styles.loadingIcon}
        />
      )}
      {productItems.map((item) => (
        <div key={item.id} className={styles.products}>
          <img src={item.image} alt={item.title} />
          <p>{item.title}</p>
          <span>USD {item.price}</span>
          {props.children}
        </div>
      ))}
    </div>
  );
};
export default Product;
