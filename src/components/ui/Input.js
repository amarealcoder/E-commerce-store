import styles from './Input.module.css';
import { useState } from 'react';
import { useGetProductsQuery } from '../../services/productsApi';

import clock from '../../images/clock.png';
import cancel from '../../images/x.png';
import Rating from './Rating';

const Input = (props) => {
  const { isSuccess, data } = useGetProductsQuery();
  const [displaySearchResults, setDisplaySearchResults] = useState([]);
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
