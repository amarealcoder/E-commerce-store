import { FaSpinner } from 'react-icons/fa';
import styles from './Loader.module.css';

const Loader = () => {
  return (
    <div className={styles.loaderContainer}>
      <span>
        <FaSpinner
          style={{
            fontSize: '50px',
            position: 'absolute',
            left: '50%',
          }}
          className={styles.loadingIcon}
        />
      </span>
    </div>
  );
};
export default Loader;
