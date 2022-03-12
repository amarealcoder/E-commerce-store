import styles from './Product.module.css';

const Product = (props) => {
  return (
    <div className={styles.productsContainer}>
      <div key={props.id} className={styles.products}>
        <img src={props.image} alt={props.title} />
        <p>{props.title}</p>
        <span>USD {props.price}</span>
        {props.children}
      </div>
    </div>
  );
};
export default Product;
