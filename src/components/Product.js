import styles from './Product.module.css';
import { useState, useEffect } from 'react';

// import headSet from '../images/headset.png';

const productsAPI = process.env.REACT_APP_PRODUCTSAPI_KEY;

const Product = (props) => {
  const [productItems, setProductItems] = useState([]);

  useEffect(() => {
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
  }, []);

  return (
    <div className={styles.productsContainer}>
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
