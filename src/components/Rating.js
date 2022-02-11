import styles from './Rating.module.css';
import star from '../images/star-filled.png';
import dots from '../images/more-vertical.png';

const Rating = () => {
  return (
    <div className={styles.reviewsContainer}>
      <img src={star} alt='star icon' className={styles.star} />
      <span>4.6</span>
      <p>86 Reviews</p>

      <img src={dots} alt='' />
    </div>
  );
};
export default Rating;
