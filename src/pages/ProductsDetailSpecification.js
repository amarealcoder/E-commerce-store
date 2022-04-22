import styles from './ProductsDetailSpecification.module.css';
import React from 'react';
import ProductsHeader from '../components/products/ProductsHeader';
import ProductsTitleBadge from '../components/products/ProductsTitleBadge';
import ProductsSpecification from '../components/products/ProductsSpecification';
import Button from '../components/ui/Button';
import { useGetProductsQuery } from '../services/productsApi';
import { useParams, useHistory } from 'react-router-dom';

const ProductsDetailSpecification = () => {
  const { isSuccess, data } = useGetProductsQuery();
  const { productId } = useParams();
  const  history = useHistory();

  return (
    <div className={styles.productsSpecification}>
      
      {isSuccess && data && data.filter(product => +productId === product.id)
      .map(product => <React.Fragment key={product.id}>
      <section>
        <ProductsHeader onClick={() => history.push(`/${productId}`)}/>
        <ProductsTitleBadge title={product.title} />
      </section>
      <section className={styles.productFeatures}>
        <p className={styles.title}>{product.title}</p>
        <p>
          {product.description}
        </p>
       
        <ProductsSpecification title={product.title} image={product.image} description={product.description}/>
      </section>
      </React.Fragment>)}
      
      
      <div className={styles.action}>
        <Button>Add to cart</Button>
      </div>
    </div>
  );
};
export default ProductsDetailSpecification;
