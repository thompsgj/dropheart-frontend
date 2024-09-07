// components/SignUpModal.js
import {useState} from 'react';
import styles from './signup.module.css';

type Props = {
    onClose: () => void;
    onOpen:()=>void
}

const SignUpModal = ({onClose,onOpen}: Props) => {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleSignUp = (e: React.FormEvent) => {
        e.preventDefault();

        if (!username || !email || !password) {
            setError('All fields are required.');
            return;
        }
        if (!validateEmail(email)) {
            setError('Invalid email format.');
            return;
        }

        // Mock sign-up logic (replace with real backend request)
        console.log('Signing up with:', {username, email, password});
        setError('');
        onClose(); // Close modal after successful sign-up
    };

    const validateEmail = (email: string) => {
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return regex.test(email);
    };

    return (
        <div className={styles.overlay}>
            <div className={styles.modal}>
                <div className={styles.header}>
                    <h2>Create an Account</h2>
                    <button className={styles.closeButton} onClick={onClose}>×</button>
                </div>
                <form onSubmit={handleSignUp} className={styles.form}>
                    {error && <div className={styles.error}>{error}</div>}

                    <div className={styles.inputGroup}>
                        <label htmlFor="username">Username</label>
                        <input
                            type="text"
                            id="username"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            className={styles.input}
                        />
                    </div>

                    <div className={styles.inputGroup}>
                        <label htmlFor="email">Email</label>
                        <input
                            type="email"
                            id="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className={styles.input}
                        />
                    </div>

                    <div className={styles.inputGroup}>
                        <label htmlFor="password">Password</label>
                        <input
                            type="password"
                            id="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className={styles.input}
                        />
                    </div>

                    <button type="submit" className={styles.signUpButton}>Sign Up</button>
                </form>

                <div className={styles.footer}>
                    <p>Already have an account? <span onClick={()=>{
                        onOpen()
                        onClose()
                    }}>Log In</span></p>
                </div>
            </div>
        </div>
    );
};

export default SignUpModal;
