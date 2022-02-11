import styles from './AuthForm.module.css';

const AuthForm = () => {
  return (
    <form className={styles.formContainer}>
      <input
        type='text'
        id='email'
        placeholder='Email'
        className={styles.emailInput}
      />
      <input
        type='text'
        id='name'
        placeholder='Password'
        className={styles.passwordInput}
      />

      <p className={styles.forgotPwd}>Forgot Password</p>

      <div className={styles.formActions}>
        <button>Sign In</button>
        <p className={styles.formQuestion}>
          Didn't have any accout? <a href=''>Sign Up here</a>
        </p>
      </div>
     
    </form>
  );
};

export default AuthForm;
