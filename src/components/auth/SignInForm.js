import styles from './AuthForm.module.css';
import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../services/firebaseAuth';

import Button from '../ui/Button';
import bgImage from '../../images/bgImage.png';
import Loader from '../ui/Loader';

const SignInForm = () => {
  const history = useHistory();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);

  //already has account user
  const handleSignIn = async (event) => {
    event.preventDefault();
    setLoading(true);
    try {
      const user = await signInWithEmailAndPassword(auth, email, password);
      history.replace('/home');
      return user;
    } catch (error) {
      console.log(error.message);
    }
    setLoading(false);
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
        <h1 className={styles.audio}>Buzzymart</h1>
        <h3 className={styles.para}>Modular, durable and elite products</h3>
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
                <p onClick={() => history.push('/change-password')}>
                  Forgot Password
                </p>
              </div>
              <div className={styles.formActions}>
                <Button onClick={(event) => handleSignIn(event)}>
                  Sign In
                </Button>

                <p className={styles.formQuestion}>
                  Don't have an account?
                  <span onClick={() => history.push('/')}>Sign Up here</span>
                </p>
              </div>
            </>
          )}
        </form>
      </section>
    </div>
  );
};

export default SignInForm;
