import styles from './Profile.module.css';
import { useHistory } from 'react-router-dom';
import { signOut } from 'firebase/auth';
import { auth } from '../../services/firebaseAuth';

import chevronRight from '../../images/chevron-left.png';
import { NavLink } from 'react-router-dom';

import avatarIcon from '../../images/Avatar.jpg';


const Profile = ({ user }) => {
  const history = useHistory();

  //to delete a user
  const logOut = async () => {
    try {
      await signOut(auth);
      history.push('/');
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <div className={styles.container}>
      <section>
        <header className={styles.headerContainer}>
          <img
            onClick={() => history.push('/home')}
            src={chevronRight}
            alt='a right angle'
          />
          <h2>Profile</h2>
          
        </header>
        <div className={styles.profileHeader}>
          <img src={user?.photoURL || avatarIcon} alt='user avatar' />
          <div>
            <h2>{user?.displayName}</h2>
            <p>{user?.email}</p>
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
        <p className={styles.profileInfo} onClick={logOut}>
          Log out
        </p>
      </section>
    </div>
  );
};
export default Profile;
