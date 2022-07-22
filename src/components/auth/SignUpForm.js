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

import googleIcon from '../../images/googleIcon.png';
import Loader from '../ui/Loader';

const provider = new GoogleAuthProvider();

const SignUpForm = () => {
  const history = useHistory();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  //first time user
  const handleSignUp = async (event) => {
    event.preventDefault();
    setLoading(true);
    try {
      const user = await createUserWithEmailAndPassword(auth, email, password);
      history.replace('/home');
      setError('');
      return user;
    } catch (err) {
      setError(err.message);
    }
    setLoading(false);
  };
  const signInWithGoogle = async () => {
    try {
      const user = await signInWithPopup(auth, provider);
      setError('');
      history.push('/home');
      return user;
    } catch (err) {
      setError(err.message);
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
      <section className={styles.authHeader}>
        <h1>Buzzymart</h1>
        <h3>Modular, durable and elite products</h3>
      </section>

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
            </div>

            <div className={styles.formActions}>
              <Button onClick={(event) => handleSignUp(event)}>Sign Up</Button>

              <p className={styles.formQuestion}>
                Already have an account?
                <span onClick={() => history.push('/sign-in')}>
                  Sign In here
                </span>
              </p>
              {error && <p className={styles.error}>{error}</p>}
            </div>
          </>
        )}
      </form>
    </div>
  );
};

export default SignUpForm;
