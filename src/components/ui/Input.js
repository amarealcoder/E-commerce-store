import styles from './Input.module.css';

const Input = () => {
    return (
      <div className={styles.inputContainer}>
        <input
          type='text'
          placeholder='Search something'
          className={styles.searchInput}
        />
      </div>
    );
}
export default Input;