import { useState, useRef } from 'react';

import styles from './AuthForm.module.css';
import Button from './Button';

import facebookIcon from '../images/facebookIcon.png';
import googleIcon from '../images/googleIcon.png';
import appleIcon from '../images/appleIcon.png';

const API_KEY = process.env.REACT_APP_API_KEY;
// console.log(API_KEY);

const AuthForm = () => {
  const emailInputRef = useRef();
  const passwordInputRef = useRef();

  const [isSignedIn, setIsSignedIn] = useState(true);
  const [isLoading, setIsLoading] = useState(false);

  const authModeHandler = () => {
    setIsSignedIn((prevState) => !prevState);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    const userEmail = emailInputRef.current.value;
    const userPassword = passwordInputRef.current.value;

    //could add validation here

    setIsLoading(true);
    let url;
    if (isSignedIn) {
      url = `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${API_KEY}`;
    } else {
      url = `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${API_KEY}`;
    }

    fetch(url, {
      method: 'POST',
      body: JSON.stringify({
        email: userEmail,
        password: userPassword,
        returnSecureToken: true,
      }),
      headers: {
        'content-Type': 'application/json',
      },
    })
      .then((res) => {
        setIsLoading(false);
        if (res.ok) {
          console.log('sent');
          return res.json()
        } else {
          res.json().then((data) => {
            //show error modal
            console.log(data)
            let errorMessage = 'Authentication failed';
            // if (data && data.error && data.error.message) {
            //   errorMessage = data.error.message;
            // }
            throw new Error(errorMessage);
            // console.log(errorMessage);
          });
        }
      })
      .then((data) => {
        console.log(data);
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  return (
    <form onSubmit={submitHandler} className={styles.formContainer}>
      <input
        type='email'
        id='email'
        placeholder='Email'
        className={styles.emailInput}
        ref={emailInputRef}
        required
      />
      <input
        type='password'
        id='name'
        placeholder='Password'
        className={styles.passwordInput}
        ref={passwordInputRef}
        required
      />

      {isSignedIn ? (
        <p className={styles.forgotPwd}>Forgot Password</p>
      ) : (
        <div className={styles.socialIcons}>
          <img src={appleIcon} alt='' />
          <img src={facebookIcon} alt='' />
          <img src={googleIcon} alt='' />
        </div>
      )}

      <div className={styles.formActions}>
        {!isLoading && <Button>{isSignedIn ? 'Sign In' : 'Sign Up'}</Button>}
        {isLoading && <p className={styles.forgotPwd}>Sending request...</p>}
        <p className={styles.formQuestion}>
          {isSignedIn ? `Don't have any account?` : 'Already have an account?'}
          <span onClick={authModeHandler} href=''>
            {isSignedIn ? 'Sign Up here' : 'Sign In here'}
          </span>
        </p>
      </div>
    </form>
  );
};

export default AuthForm;
