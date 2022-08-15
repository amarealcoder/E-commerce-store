import styles from './ShoppingCart.module.css';
import ReactDom from 'react-dom';
import { FaTrash } from 'react-icons/fa';

import Button from './Button';
import ProductsHeader from '../products/ProductsHeader';
import React from 'react';

const CartOverlay = ({ setIsOpen }) => {
  return (
    <div onClick={() => setIsOpen(false)} className={styles.cartOverlay}></div>
  );
};

const Cart = ({ setIsOpen, cartItems, setCartItems, setCartCount }) => {
  const isCartEmpty = cartItems.length === 0;

  const handlePlus = (id) => {
    const plusCount = cartItems.map((item) =>
      item.id === id
        ? {
            ...item,
            quantity: (item.quantity += 1),
            totalQtyPrice: (item.quantity *= item.price),
          }
        : item
    );
    setCartItems(plusCount);
    console.log(plusCount);
    setCartCount((prevCount) => prevCount + 1);
  };

  const handleMinus = (id) => {
    const minusCount = cartItems.map((item) =>
      item.id === id
        ? {
            ...item,
            quantity: (item.quantity -= 1),
            totalQtyPrice: (item.totalQtyPrice -= item.price),
          }
        : item
    );

    setCartItems(minusCount);

    setCartCount((prevCount) => prevCount - 1);
  };

  const handleDeleteItem = (id) => {
    const deleteItem = cartItems.filter((item) => item.id !== id);
    setCartItems(deleteItem);

    const resetCount = cartItems.find((item) => item.id === id);
    setCartCount((prevCount) => prevCount - resetCount.quantity);
  };

  const handleDeleteCart = () => {
    setCartCount(0);
    setCartItems([]);
  };
  //get all cart prices
  const cartPrices = cartItems.map((item) => item.totalQtyPrice);

  //Add all cart prices
  const sumTotalPrice = cartPrices
    .reduce((previousValue, currentValue) => previousValue + currentValue, 0)
    .toLocaleString();

  return (
    <div className={styles.container}>
      <ProductsHeader>
        <h2 onClick={() => setIsOpen(false)}> x</h2>
        <h4>Shopping Cart</h4>
        <FaTrash
          onClick={() => handleDeleteCart()}
          style={{ cursor: 'pointer' }}
        />
      </ProductsHeader>

      {isCartEmpty && <p className={styles.cartEmpty}>Your cart is empty</p>}

      <section className={styles.cartItems}>
        {cartItems?.map((product) => (
          <div key={product.id} className={styles.content}>
            <div className={styles.imageContainer}>
              <img src={product.image} alt={product.title} />
            </div>
            <div className={styles.imageInfo}>
              <p>{product.title}</p>
              <p className={styles.amount}>
                USD {product?.totalQtyPrice.toLocaleString() || ''}
              </p>

              <div className={styles.actionGroup}>
                <div className={styles.buttons}>
                  <button
                    disabled={product.quantity === 1 ? true : false}
                    onClick={() => {
                      handleMinus(product.id);
                    }}
                  >
                    -
                  </button>
                  <span>{product.quantity}</span>
                  <button
                    onClick={() => {
                      handlePlus(product.id);
                    }}
                  >
                    +
                  </button>
                </div>
                <FaTrash
                  onClick={() => handleDeleteItem(product.id)}
                  style={{ cursor: 'pointer' }}
                />
              </div>
            </div>
          </div>
        ))}
      </section>
      <div className={styles.total}>
        <p className={styles.totalItems}>Total {cartItems.length}</p>
        <p className={styles.totalAmount}>USD {sumTotalPrice}</p>
      </div>
      <div className={styles.buttonContainer}>
        <Button disabled={isCartEmpty ? true : false}>
          Proceed to Checkout{' '}
        </Button>
      </div>
    </div>
  );
};

const ShoppingCart = ({ cartItems, setIsOpen, setCartItems, setCartCount }) => {
  return (
    <React.Fragment>
      {ReactDom.createPortal(
        <CartOverlay setIsOpen={setIsOpen} />,
        document.getElementById('cartOverlay-root')
      )}
      {ReactDom.createPortal(
        <Cart
          setCartCount={setCartCount}
          setIsOpen={setIsOpen}
          cartItems={cartItems}
          setCartItems={setCartItems}
        />,
        document.getElementById('cart-root')
      )}
    </React.Fragment>
  );
};
export default ShoppingCart;
