import styles from './Product.module.css';

const Product = (props) => {
  return (
    <div onClick={props.onClick} className={styles.productsContainer}>
      <div key={props.id} className={styles.products}>
        <img src={props.image} alt={props.title} />
        <p>{props.title}</p>
        <p>USD {props.price}</p>
        {props.children}
      </div>
    </div>
  );
};
export default Product;
