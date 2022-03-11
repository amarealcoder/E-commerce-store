import styles from './Rating.module.css';

import { AiFillStar } from 'react-icons/ai';
import { BsThreeDotsVertical } from 'react-icons/bs';

const Rating = () => {
  return (
    <div className={styles.reviewsContainer}>
      <AiFillStar style={{color: 'yellow', fontSize: '20px'}}/>
      <span>4.6</span>
      <span>86 Reviews</span>
      <BsThreeDotsVertical />
    </div>
  );
};
export default Rating;
