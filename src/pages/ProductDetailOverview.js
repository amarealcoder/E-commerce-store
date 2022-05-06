import styles from './ProductDetailOverview.module.css';
import { useParams, useHistory, NavLink } from 'react-router-dom';
import { useGetProductsQuery } from '../services/productsApi';

import ProductsHeader from '../components/products/ProductsHeader';
import ProductsTitleBadge from '../components/products/ProductsTitleBadge';
import Comments from '../components/ui/Comments';
import Product from '../components/products/Product';
import Button from '../components/ui/Button';

const ProductsDetailOverview = () => {
  const { data, isSuccess, isLoading, isError, error } = useGetProductsQuery();
  const history = useHistory();
  const { productId } = useParams();

  return (
    <div className={styles.overview}>
      <section>
        {isSuccess &&
          data &&
          data
            .filter((product) => product.id === Number(productId))
            .map((product) => (
              <div key={product.id}>
                <ProductsHeader onClick={() => history.push('/')}/>
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
          <p className={styles.more}>See All</p>
        </div>
        <div className={styles.otherProductsImg}>
        {isSuccess && data && data.map(product => <Product key={product.id} image={product.image} price={product.price} title={product.title}/>)}
        </div>
      </section>
      <div className={styles.actionBtn}>
        <Button>Add to cart</Button>
      </div>
    </div>
  );
};

export default ProductsDetailOverview;
