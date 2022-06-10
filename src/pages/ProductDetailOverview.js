import React, {useState} from 'react';
import { FaChevronLeft, FaCartPlus } from 'react-icons/fa';
import styles from './ProductDetailOverview.module.css';
import { useParams, useHistory, NavLink } from 'react-router-dom';
import { useGetProductsQuery } from '../services/productsApi';

import ProductsHeader from '../components/products/ProductsHeader';
import ProductsTitleBadge from '../components/products/ProductsTitleBadge';
import Comments from '../components/ui/Comments';
import Product from '../components/products/Product';
import Button from '../components/ui/Button';
import ShoppingCart from '../components/ui/ShoppingCart';

const ProductsDetailOverview = () => {
  const { data, isSuccess } = useGetProductsQuery();
  const history = useHistory();
  const { productId } = useParams();

  const [cartItems, setCartItems] = useState([]);
  const [cartCount, setCartCount] = useState(0);
  const [isOpen, setIsOpen] = useState(false);
  
  const itemToAdd = isSuccess && data.filter(item => item.id === Number(productId))

  const handleAddToCart = () => {
    setCartCount(prevCount => prevCount + 1);
    setCartItems(prevItem => [...prevItem, ...itemToAdd]);
    console.log(cartItems)
  }
  return (
      <React.Fragment>
    <div className={styles.overview}>
      {isOpen && <ShoppingCart cartItems={cartItems} setIsOpen={setIsOpen}/>}
      <section>
        {data.filter(product => product.id === Number(productId)).map((product) => (
              <div key={product.id}>
                <ProductsHeader >
                  <FaChevronLeft size={25} onClick={() => history.push('/')}/>
                  <div>
                    <FaCartPlus size={25} onClick={() => setIsOpen(true)}/>
                    <span>{cartCount}</span>
                  </div>
                </ProductsHeader>
                <ProductsTitleBadge
                  price={product.price}
                  title={product.title}
                />
                <ul className={styles.nav}>
                  <NavLink to={`/${productId}/specification`}>Overview</NavLink>
                  <NavLink to={`/${productId}/specification`}>Features</NavLink>
                  <NavLink to={`/${productId}/specification`}>Specification</NavLink>
                </ul>
                <div className={styles.overviewImageContainer}>
                  <img className={styles.overviewImg} src={product.image} alt='' />
                </div>
              </div>
            ))}
      </section>
    
      <section className={styles.reviewsContainer}>
        <p>Reviews (120)</p>
        <Comments />
        <p className={styles.seeAll}>See All Reviews</p>
      </section>
      <section className={styles.otherProducts}>
        <div className={styles.otherProductsHeader}>
          <p>Another Product</p>
          <p onClick={() => history.push('/search-results')} className={styles.more}>See All</p>
        </div>
        <div className={styles.otherProductsImg}>
        {isSuccess && data && data.map(product => <Product key={product.id} image={product.image} price={product.price} title={product.title}/>)}
        </div>
      </section>
      
      <div className={styles.actionBtn}>
        <Button onClick={() => handleAddToCart()}>Add to cart</Button>
      </div>
    </div>
        
  </React.Fragment>);
};

export default ProductsDetailOverview;
