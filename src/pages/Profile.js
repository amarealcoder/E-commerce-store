import styles from './Profile.module.css';
import chevronRight from '../images/chevron-left.png';
import profileImage from '../images/Avatar.png';
const Profile = () => {
  return (
    <div className={styles.container}>
      <section>
        <header className={styles.headerContainer}>
          <img src={chevronRight} alt='a right angle' />
          <h2>Profile</h2>
          <span></span>
        </header>
        <div className={styles.profileHeader}>
          <img src={profileImage} alt='' />
          <div>
            <h2>Andrea Alamata</h2>
            <p>example123@example.com</p>
          </div>
        </div>
      </section>
      <section className={styles.profileActions}>
        <p className={styles.general}>General</p>
        <p>Edit profile</p>
        <hr />
        <p>Notifications</p>
        <hr />
        <p>Wishlist</p>
        <hr />

        <p className={styles.legal}>Legal</p>
        <p>Terms of use</p>
        <hr />
        <p>Privacy policy</p>
        <hr />

        <p className={styles.personal}>Personal</p>
        <p>Report a bug</p>
        <hr />
        <p>Log out</p>
      </section>
    </div>
  );
};
export default Profile;
