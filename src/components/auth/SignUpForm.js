import styles from './AuthForm.module.css';
import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
} from 'firebase/auth';
import { auth } from '../../services/firebaseAuth';

import Button from '../ui/Button';
import bgImage from '../../images/bgImage.png';

import facebookIcon from '../../images/facebookIcon.png';
import googleIcon from '../../images/googleIcon.png';
import appleIcon from '../../images/appleIcon.png';
import Loader from '../ui/Loader';

const provider = new GoogleAuthProvider();

const SignUpForm = () => {
  const history = useHistory();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);

  //first time user
  const handleSignUp = async (event) => {
    event.preventDefault();
    setLoading(true);
    try {
      const user = await createUserWithEmailAndPassword(auth, email, password);
      history.replace('/home');
      return user;
    } catch (error) {
      console.log(error.message);
    }
    setLoading(false);
  };
  const signInWithGoogle = async () => {
    try {
      const googleUser = await signInWithPopup(auth, provider);
      console.log(googleUser);
      history.push('/home');
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div
      className={styles.bg}
      style={{
        background: `url(${bgImage})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        minHeight: '100vh',
        minWidth: '100vw',
        position: 'fixed',
      }}
    >
      <section className={styles.tag}>
        <h1 className={styles.audio}>Audio</h1>
        <h3 className={styles.para}>Its modular and designed to last</h3>
      </section>
      <section>
        <form className={styles.formContainer}>
          <input
            type='email'
            placeholder={'Email'}
            className={styles.emailInput}
            required
            value={email}
            onChange={(event) => setEmail(event.target.value)}
          />

          <input
            type='password'
            placeholder={'Password'}
            className={styles.passwordInput}
            required
            value={password}
            onChange={(event) => setPassword(event.target.value)}
          />
          {loading ? (
            <Loader />
          ) : (
            <>
              <div className={styles.socialIcons}>
                <img
                  src={googleIcon}
                  alt='google icon'
                  onClick={() => signInWithGoogle()}
                />
                <img src={appleIcon} alt='apple icon' />
                <img src={facebookIcon} alt='facebook icon' />
              </div>
              <div className={styles.formActions}>
                <Button onClick={(event) => handleSignUp(event)}>
                  Sign Up
                </Button>

                <p className={styles.formQuestion}>
                  Already have an account?
                  <span onClick={() => history.push('/sign-in')}>
                    Sign In here
                  </span>
                </p>
              </div>
            </>
          )}
        </form>
      </section>
    </div>
  );
};

export default SignUpForm;
