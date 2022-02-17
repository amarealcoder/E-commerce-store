import styles from './ProductsSpecification.module.css';

import headSet from '../images/headset.png';

const ProductsSpecification = () => {
  return (
    <div className={styles.productsContainer}>
      <img src={headSet} alt='' />
      <div>
        <p className={styles.productsTitle}>APTX hd Wireless audio</p>
        <p>
          The Aptx® HD codec transmits 24-bit hi-res audio, equal to or better
          than CD quality.
        </p>
      </div>
    </div>
  );
};
export default ProductsSpecification;
