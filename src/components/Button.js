import styles from './Button.module.css';

const Button = (props) => {
  return (
    <div className={styles.buttonDiv}>
      <button className={styles.button}>{props.children}</button>
    </div>
  );
};
export default Button;
