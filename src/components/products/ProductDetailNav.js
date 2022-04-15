import { NavLink } from 'react-router-dom';
import styles from './ProductDetailNav.module.css';

const ProductDetailNav = () => {
    return <ul className={styles.nav}>
        <NavLink to=''>Overview</NavLink>
        <NavLink to=''>Features</NavLink>
        <NavLink to=''>Specification</NavLink>
    </ul>
        
    
}
export default ProductDetailNav;