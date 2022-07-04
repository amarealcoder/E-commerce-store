import styles from './ChangePassword.module.css';
import { useState } from 'react';

import { sendPasswordResetEmail } from 'firebase/auth';
import { auth } from '../../services/firebaseAuth';

import Button from '../ui/Button';

const ChangePassword = () => {
  const [resetEmail, setResetEmail] = useState('');

  const handlePasswordReset = async (resetEmail) => {
    try {
      return await sendPasswordResetEmail(auth, resetEmail);
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <form className={styles.container}>
      <h1>User Profile</h1>
      <h3>Change your password to a new one</h3>

      <input
        type='email'
        placeholder='Type your email'
        value={resetEmail}
        required
        onChange={(e) => setResetEmail(e.target.value)}
      />
      <Button onClick={() => handlePasswordReset(resetEmail)}>
        Send Password Reset Email
      </Button>
    </form>
  );
};
export default ChangePassword;
