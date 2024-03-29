import styles from './AuthForm.module.css';
import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import {
  signInWithEmailAndPassword,
  sendPasswordResetEmail,
} from 'firebase/auth';
import { auth } from '../../services/firebaseAuth';

import Button from '../ui/Button';
import bgImage from '../../images/bgImage.png';
import Loader from '../ui/Loader';

const SignInForm = () => {
  const history = useHistory();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [message, setMessage] = useState('');

  //already has account user
  const handleSignIn = async (event) => {
    event.preventDefault();
    setLoading(true);
    try {
      const user = await signInWithEmailAndPassword(auth, email, password);
      history.replace('/home');
      setError('');
      return user;
    } catch (err) {
      setError(err.message);
    }
    setLoading(false);
  };

  const handlePasswordReset = async (email) => {
    try {
      const emailReset = await sendPasswordResetEmail(auth, email);
      setError('');
      setMessage('Please, check your email for your password reset');
      return emailReset;
    } catch (err) {
      setError(err.message);
      setMessage('');
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
        {message && <p className={styles.msg}>{message}</p>}
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
          <div>
            <div className={styles.socialIcons}>
              <p onClick={() => handlePasswordReset(email)}>Forgot Password</p>
            </div>
            <div className={styles.formActions}>
              <Button onClick={(event) => handleSignIn(event)}>Sign In</Button>

              <p className={styles.formQuestion}>
                Don't have an account?
                <span onClick={() => history.push('/')}>Sign Up here</span>
              </p>
              {error && <p className={styles.error}>{error}</p>}
            </div>
          </div>
        )}
      </form>
    </div>
  );
};

export default SignInForm;
