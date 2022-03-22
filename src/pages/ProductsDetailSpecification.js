import styles from './ProductsDetailSpecification.module.css';

import ProductsHeader from '../components/products/ProductsHeader';
import ProductsTitleBadge from '../components/products/ProductsTitleBadge';
import ProductDetailNav from '../components/products/ProductDetailNav';
import ProductsSpecification from '../components/products/ProductsSpecification';
import Button from '../components/ui/Button';

const ProductsDetailSpecification = () => {
  return (
    <div className={styles.productsSpecification}>
      <section>
        <ProductsHeader />
        <ProductsTitleBadge />
        <ProductDetailNav />
      </section>
      <section className={styles.productFeatures}>
        <p className={styles.title}>Highly Detailed Audio</p>
        <p>
          The speaker unit contains a diaphragm that is precision-grown from NAC
          Audio bio-cellulose, making it stiffer, lighter and stronger than
          regular PET speaker units, and allowing the sound-producing diaphragm
          to vibrate without the levels of distortion found in other speakers.
        </p>
        <br />
        <p>
          The speaker unit contains a diaphragm that is precision-grown from NAC
          Audio bio-cellulose, making it stiffer, lighter and stronger than
          regular PET speaker units, and allowing the sound-producing diaphragm
          to vibrate without the levels of distortion found in other speakers.
        </p>
        <ProductsSpecification />
      </section>
      <div className={styles.action}>
        <Button>Add to cart</Button>
      </div>
    </div>
  );
};
export default ProductsDetailSpecification;
