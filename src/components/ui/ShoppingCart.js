import styles from './ShoppingCart.module.css';
import ReactDom from 'react-dom';

import { FaTrash } from 'react-icons/fa';

import Button from './Button';
import ProductsHeader from '../products/ProductsHeader';
import React from 'react';

const CartOverlay = ({setIsOpen}) => {
  return <div onClick={() => setIsOpen(false)} className={styles.cartOverlay}></div>
}

const Cart = ({setIsOpen, cartItems}) => {
  
   return (
    <div className={styles.container}>
      <ProductsHeader> 
        <h2 onClick={() => setIsOpen(false)}> x</h2>
        <h4>Shopping Cart</h4>
        <FaTrash style={{cursor: 'pointer'}}/>
      </ProductsHeader>
      <section className={styles.cartItems}>
        {cartItems?.map(product => <div key={product.id} className={styles.content}>
          <div className={styles.imageContainer}>
            <img src={product.image} alt={product.title} />
          </div>
          <div className={styles.imageInfo}>
            <p>{product.title}</p>
            <p className={styles.amount}>{product.price}</p>
            <div className={styles.actionGroup}>
              <div className={styles.buttons}>
                <button >-</button>
                <span>{product.quantity}</span>
                <button>+</button>
              </div>
              <FaTrash />
            </div>
          </div>
        </div>
        )}
      </section>
      <div className={styles.total}>
        <p className={styles.totalItems}>Total 1 Item</p>
        <p className={styles.totalAmount}>USD 305</p>
      </div>
      <div className={styles.buttonContainer}>
        <Button>Proceed to Checkout </Button>
      </div>
    </div>
  );
};


const ShoppingCart = ({cartItems, setIsOpen}) => {
  return <React.Fragment>
    {ReactDom.createPortal(<CartOverlay setIsOpen={setIsOpen}/>, document.getElementById('cartOverlay-root'))}
    {ReactDom.createPortal(<Cart setIsOpen={setIsOpen}  cartItems={cartItems} />, document.getElementById('cart-root'))}
    </React.Fragment>
  
}
export default ShoppingCart;

 