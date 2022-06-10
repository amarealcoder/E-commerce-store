import styles from './ProductsHeader.module.css';

const ProductsHeader = ({children}) => {
    return (
      <header className={styles.headerContainer}>
        {children}
      </header>
    );
}
export default ProductsHeader; 