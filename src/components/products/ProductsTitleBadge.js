import styles from './ProductsTitleBadge.module.css';

const ProductsTitleBadge = (props) => {
    return <div className={styles.titleBadge}>
        <p>USD {props.price}</p>
        <h5>{props.title}</h5>
    </div>
}
export default ProductsTitleBadge;