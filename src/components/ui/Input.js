import styles from './Input.module.css';
import { useState } from 'react';
import { useGetProductsQuery } from '../../services/productsApi';

const Input = (props) => {
  const { isSuccess, data } = useGetProductsQuery();
  return (
    <div className={styles.inputContainer}>
      <input
        type='text'
        placeholder={props.placeholder}
        className={styles.searchInput}
        onFocus={props.onFocus}
        data={props.data}
        onChange={props.onChange}
      />
    </div>
  );
};
export default Input;
