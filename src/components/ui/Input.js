import styles from './Input.module.css';
const Input = (props) => {
  
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
