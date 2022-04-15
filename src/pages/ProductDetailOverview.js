import styles from './ProductDetailOverview.module.css';
import { useParams, useHistory } from 'react-router-dom';
import { useGetProductsQuery } from '../services/productsApi';

import ProductsHeader from '../components/products/ProductsHeader';
import ProductsTitleBadge from '../components/products/ProductsTitleBadge';
import ProductDetailNav from '../components/products/ProductDetailNav';
import headSet from '../images/headset.png';
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
                <ProductDetailNav />
              </div>
            ))}
      </section>
      <section className={styles.productImages}>
        <img src={headSet} alt='' />
        <img src={headSet} alt='' />
        <img src={headSet} alt='' />
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
          <Product />
          <Product />
          <Product />
          <Product />
        </div>
      </section>
      <div className={styles.actionBtn}>
        <Button>Add to cart</Button>
      </div>
    </div>
  );
};

export default ProductsDetailOverview;
