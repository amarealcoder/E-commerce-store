import React, { useState, useEffect } from 'react';
import { FaChevronLeft, FaCartPlus } from 'react-icons/fa';
import styles from './ProductDetailOverview.module.css';
import { useParams, useHistory } from 'react-router-dom';
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

  const setPrevCartItems = JSON.parse(localStorage.getItem('cart') || '[]');
  const setPrevCount = JSON.parse(localStorage.getItem('cart-count') || '0');

  const [cartItems, setCartItems] = useState(setPrevCartItems);
  const [cartCount, setCartCount] = useState(setPrevCount);
  const [isOpen, setIsOpen] = useState(false);
  const [activeLink, setActiveLink] = useState('overview');

  const handleAddToCart = (id) => {
    // Increases cart count
    setCartCount((prevCount) => prevCount + 1);

    //add the quantity property
    const newData = data.map((item) => ({
      ...item,
      quantity: 1,
    }));

    //check item is already added before?
    const isExisting = cartItems.find((item) => item.id === id);

    if (isExisting) {
      const increaseQuantity = cartItems.map((item) =>
        item.id === id
          ? {
              ...item,
              quantity: item.quantity + 1,
              price: (item.quantity + 1) * item.price,
            }
          : item
      );
      setCartItems(increaseQuantity);
    } else {
      // filter out item to add
      const itemToAdd = newData.filter((item) => item.id === id);

      // push and spread item to cart state
      setCartItems((prevItem) => [...prevItem, ...itemToAdd]);
    }
  };
  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cartItems));
    localStorage.setItem('cart-count', JSON.stringify(cartCount));
  }, [cartItems, cartCount]);

  return (
    <React.Fragment>
      <div className={styles.overview}>
        {isOpen && (
          <ShoppingCart
            setCartCount={setCartCount}
            setCartItems={setCartItems}
            cartItems={cartItems}
            setIsOpen={setIsOpen}
          />
        )}
        <section>
          {data
            .filter((product) => product.id === Number(productId))
            .map((product) => (
              <div key={product.id}>
                <ProductsHeader>
                  <FaChevronLeft size={25} onClick={() => history.push('/')} />
                  <div>
                    <FaCartPlus size={25} onClick={() => setIsOpen(true)} />
                    <span>{cartCount}</span>
                  </div>
                </ProductsHeader>
                <div className={styles.productDetail}>
                  <div>
                    <ProductsTitleBadge
                      price={product.price}
                      title={product.title}
                    />
                  </div>
                  <div>
                    <div className={styles.nav}>
                      <p
                        className={
                          activeLink === 'overview' ? styles.active : ''
                        }
                        onClick={() => {
                          setActiveLink('overview');
                        }}
                      >
                        Overview
                      </p>
                      <p
                        className={
                          activeLink === 'features' ? styles.active : ''
                        }
                        onClick={() => {
                          setActiveLink('features');
                        }}
                      >
                        Features
                      </p>
                      <p
                        className={
                          activeLink === 'specification' ? styles.active : ''
                        }
                        onClick={() => {
                          setActiveLink('specification');
                        }}
                      >
                        Specification
                      </p>
                    </div>
                    <div className={styles.overviewImageContainer}>
                      <img
                        className={styles.overviewImg}
                        src={product.image}
                        alt={product.title}
                      />
                    </div>
                  </div>
                </div>
                <div className={styles.reviewsContainer}>
                  <p className={styles.reviewsDetail}>Reviews (120)</p>
                  {activeLink === 'overview' && <Comments />}
                  {activeLink === 'features' && (
                    <p className={styles.reviewsDetail}>
                      {product.description}
                    </p>
                  )}
                  {activeLink === 'specification' && (
                    <p className={styles.reviewsDetail}>
                      The {product.title} is really cool to use. It is durable
                      and everybody loves it. Try it and see!
                    </p>
                  )}
                  <p className={styles.seeAll}>See All Reviews</p>
                </div>
              </div>
            ))}
        </section>

        <section className={styles.otherProducts}>
          <div className={styles.otherProductsHeader}>
            <p>Another Product</p>
            <p
              onClick={() => history.push('/search-results')}
              className={styles.more}
            >
              See All
            </p>
          </div>
          <div className={styles.otherProductsImg}>
            {isSuccess &&
              data &&
              data.map((product) => (
                <Product
                  key={product.id}
                  image={product.image}
                  price={product.price}
                  title={product.title}
                />
              ))}
          </div>

          <div className={styles.actionBtn}>
            <Button onClick={() => handleAddToCart(Number(productId))}>
              Add to cart
            </Button>
          </div>
        </section>
      </div>
    </React.Fragment>
  );
};

export default ProductsDetailOverview;
