import styles from './Auth.module.css';
import bgImage from '../images/authImg.png';
import AuthForm from '../components/AuthForm';

const Authentication = () => {
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
             <AuthForm />
          </section>  

    </div>
  );
};

export default Authentication;
