import styles from './ProductsDetailOverview.module.css';

import ProductsHeader from '../components/ProductsHeader';
import ProductsTitleBadge from '../components/ProductsTitleBadge';
import ProductDetailNav from '../components/ProductDetailNav';

import headSet from '../images/headset.png';
import Comments from '../components/Comments';
import Product from '../components/Product';
import Button from '../components/Button';

const ProductsDetailOverview = () => {
  return (
    <div className={styles.overview}>
      <section>
        <ProductsHeader />
        <ProductsTitleBadge />
        <ProductDetailNav />
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
