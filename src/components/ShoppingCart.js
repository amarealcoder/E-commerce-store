import styles from './ShoppingCart.module.css';

import chevronRight from '../images/chevron-left.png';
import trash from '../images/trash.png';
import headset from '../images/headset.png';
import Button from './Button';

const ProductsHeader = () => {
  return (
    <div className={styles.container}>
      <header className={styles.headerContainer}>
        <img src={chevronRight} alt='a right angle' />
        <h4>Shopping Cart</h4>
        <img src={trash} />
      </header>
      <section className={styles.cartItems}>
        <div className={styles.content}>
          <div className={styles.imageContainer}>
            <img src={headset} alt='' />
          </div>
          <div className={styles.imageInfo}>
            <p>TMA-2 Comfort Wireless</p>
            <p className={styles.amount}>USD 305</p>
            <div className={styles.actionGroup}>
              <div className={styles.buttons}>
                <button>-</button>
                <span>1</span>
                <button>+</button>
              </div>
              <img src={trash} alt='' />
            </div>
          </div>
        </div>

        <div className={styles.content}>
          <div className={styles.imageContainer}>
            <img src={headset} alt='' />
          </div>
          <div className={styles.imageInfo}>
            <p>TMA-2 Comfort Wireless</p>
            <p className={styles.amount}>USD 305</p>
            <div className={styles.actionGroup}>
              <div className={styles.buttons}>
                <button>-</button>
                <span>1</span>
                <button>+</button>
              </div>
              <img src={trash} alt='' />
            </div>
          </div>
        </div>
      </section>
      <div className={styles.total}>
        <p className={styles.totalItems}>Total 1 Item</p>
        <p className={styles.totalAmount}>USD 305</p>
      </div>
      <Button>Proceed to Checkout </Button>
    </div>
  );
};
export default ProductsHeader;
