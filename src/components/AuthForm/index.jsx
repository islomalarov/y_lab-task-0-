import { useState } from 'react';
import styles from './page.module.css';
import { mockFetch } from '../../lib/mockFetch';
import FormInput from '../InputForm';

const AuthForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      const response = await mockFetch(email, password);
      if (response.ok) {
        setMessage('Login successful');
        setEmail('');
        setPassword('');
      } else {
        setEmail('');
        setPassword('');
        throw new Error('Login failed');
      }
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };
  return (
    <div className={styles.container}>
      <form onSubmit={handleSubmit} className={styles.form}>
        <h2 className={styles.title}>Login</h2>
        <FormInput inputValue={email} setInputValue={setEmail} inputType="email" />
        <FormInput inputValue={password} setInputValue={setPassword} inputType="password" />
        <div className={styles.infoBlock}>
          {message && <p className={styles.message}>{message}</p>}
          {error && <p className={styles.error}>{error}</p>}
        </div>
        <button type="submit" className={styles.button} disabled={loading}>
          {loading ? 'Logging in...' : 'Login'}
        </button>
      </form>
    </div>
  );
};

export default AuthForm;
