import styles from './Product.module.css';

import headSet from '../images/headset.png';

const Product = () => {
  return (
    <div className={styles.products}>
      <img src={headSet} alt='a product image' />
      <p>TMA-2 HD Wirelss</p>
      <span>USD 350</span>
    </div>
  );
};
export default Product;
