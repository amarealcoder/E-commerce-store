import styles from './ProductsHeader.module.css';

import chevronRight from '../../images/chevron-left.png';
import cart from '../../images/shopping-cart.png';

const ProductsHeader = () => {
    return (
      <header className={styles.headerContainer}>
        <img src={chevronRight} alt='a right angle' />
        <img src={cart} />
      </header>
    );
}
export default ProductsHeader; 