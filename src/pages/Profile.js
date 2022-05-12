import { useHistory } from 'react-router-dom';
import styles from './Profile.module.css';
import chevronRight from '../images/chevron-left.png';
import profileImage from '../images/Avatar.png';
import { NavLink } from 'react-router-dom';

const Profile = () => {
  const history = useHistory();

  // const changePasswordHandler = () => {
  //   history.push('/password-change');
  // };

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
        <NavLink to='/password-change'>
          <p className={styles.profileInfo}>Edit profile</p>
        </NavLink>
        <hr />
        <p className={styles.profileInfo}>Notifications</p>
        <hr />
        <p className={styles.profileInfo}>Wishlist</p>
        <hr />

        <p className={styles.legal}>Legal</p>
        <p className={styles.profileInfo}>Terms of use</p>
        <hr />
        <p className={styles.profileInfo}>Privacy policy</p>
        <hr />

        <p className={styles.personal}>Personal</p>
        <p className={styles.profileInfo}>Report a bug</p>
        <hr />
        <p className={styles.profileInfo}>Log out</p>
      </section>
    </div>
  );
};
export default Profile;
