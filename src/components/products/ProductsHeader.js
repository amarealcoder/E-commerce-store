import styles from './ProductsHeader.module.css';

import chevronRight from '../../images/chevron-left.png';
import cart from '../../images/shopping-cart.png';

const ProductsHeader = (props) => {
    return (
      <header className={styles.headerContainer}>
        <img onClick={props.onClick} src={chevronRight} alt='a right angle' />
        <img src={cart} alt='cart icon' />
      </header>
    );
}
export default ProductsHeader; 