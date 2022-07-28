import styles from './Comments.module.css';

import avatar from '../../images/Avatar.jpg';
import Star from '../../images/star-filled.png';

const Comments = () => {
  return (
    <div className={styles.productReviews}>
      <div className={styles.reviewContent}>
        <div className={styles.reviewer}>
          {/* <img src={avatar} alt='avatar' /> */}

          <p className={styles.name}>Madelina</p>
          <span>I month ago</span>
        </div>
        <div className={styles.starRating}>
          {[...Array(5)].map((star, index) => {
            return (
              <img src={Star} key={index} className={styles.star} alt='star' />
            );
          })}
        </div>
        <p className={styles.comment}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
      </div>

      <div className={styles.reviewContent}>
        <div className={styles.reviewer}>
          {/* <img src={avatar} alt='avatar' /> */}

          <p className={styles.name}>Madelina</p>
          <span>I month ago</span>
        </div>
        <div className={styles.starRating}>
          {[...Array(5)].map((star, index) => {
            return (
              <img src={Star} key={index} className={styles.star} alt='star' />
            );
          })}
        </div>
        <p className={styles.comment}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
      </div>

      <div className={styles.reviewContent}>
        <div className={styles.reviewer}>
          {/* <img src={avatar} alt='avatar' /> */}

          <p className={styles.name}>Madelina</p>
          <span>I month ago</span>
        </div>
        <div className={styles.starRating}>
          {[...Array(5)].map((star, index) => {
            return (
              <img src={Star} key={index} className={styles.star} alt='star' />
            );
          })}
        </div>
        <p className={styles.comment}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
      </div>

      <div className={styles.reviewContent}>
        <div className={styles.reviewer}>
          {/* <img src={avatar} alt='avatar' /> */}

          <p className={styles.name}>Madelina</p>
          <span>I month ago</span>
        </div>
        <div className={styles.starRating}>
          {[...Array(5)].map((star, index) => {
            return (
              <img src={Star} key={index} className={styles.star} alt='star' />
            );
          })}
        </div>
        <p className={styles.comment}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
      </div>
    </div>
  );
};
export default Comments;
