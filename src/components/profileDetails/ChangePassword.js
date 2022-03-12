import styles from './ChangePassword.module.css';
import Button from '../Button';

import { useRef, useContext } from 'react';
import { useHistory } from 'react-router-dom';
import AuthContext from '../../store/AuthContext';

const API_KEY = process.env.REACT_APP_API_KEY;

const ChangePassword = () => {
  const newPasswordRef = useRef();
  const history = useHistory();
  const authCtx = useContext(AuthContext);

  const changePasswordHandler = (e) => {
    e.preventDefault();
    const newPassword = newPasswordRef.current.value;
    console.log(newPassword);

    fetch(
      `https://identitytoolkit.googleapis.com/v1/accounts:update?key=${API_KEY}`,
      {
        method: 'POST',
        body: JSON.stringify({
          idToken: authCtx.token,
          // idToken: localStorage.getItem('token'),
          password: newPassword,
          returnSecureToken: false,
        }),
        headers: {
          'Content-Type': 'application/json',
        },
      }
    ).then(res => {
      console.log(res);
      if (res.ok) {
        console.log('password reset');
        history.push('/');
      } else {
        // show error modal
        return res.json().then((data) => {
          console.log(data);
        });
      }
    })
    
  };

  return (
    <form onSubmit={changePasswordHandler} className={styles.container}>
      <h1>User Profile</h1>
      <h3>Change your password to a new one</h3>
      <input
        type='password'
        id='new-password'
        placeholder='New Password'
        ref={newPasswordRef}
        // minLength='7'
      />
      <Button>Change Password</Button>
    </form>
  );
};
export default ChangePassword;
