import styles from './Rating.module.css';

import { AiFillStar } from 'react-icons/ai';
import { BsThreeDotsVertical } from 'react-icons/bs';

const Rating = (props) => {
  return (
    <div className={styles.reviewsContainer}>
      <AiFillStar style={{color: 'yellow', fontSize: '20px'}}/>
      <span>{props.rating}</span>
      <span>{props.count} Reviews</span>
      <BsThreeDotsVertical />
    </div>
  );
};
export default Rating;
