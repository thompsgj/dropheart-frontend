import React, {useState} from 'react';
import styles from './login.module.css';
import {useLogin} from '@/hooks/useLogin'
import Loading from "@/component/loading";

type Props = {
    onClose: () => void;
    onOpen: () => void;
}

const LoginModal = ({onClose, onOpen}: Props) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const {mutate: login,isLoading} = useLogin()

    const handleLogin = (e: React.FormEvent) => {
        e.preventDefault();

        if (!email || !password) {
            setError('Both fields are required.');
            return;
        }
        if (!validateEmail(email)) {
            setError('Invalid email format.');
            return;
        }

        login({
            url: 'https://dropheart-backend-z8c0.onrender.com/auth/login/', param: {
                email, password
            }
        })
        setError('');
        onClose(); // Close modal after successful login
    };

    const validateEmail = (email: string) => {
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return regex.test(email);
    };

    if (isLoading) return <div className={'loading_wrapper'}><Loading/></div>


    return (
        <div className={styles.overlay}>
            <div className={styles.modal}>
                <div className={styles.header}>
                    <h2>Welcome Back</h2>
                    <button className={styles.closeButton} onClick={onClose}>×</button>
                </div>
                <form onSubmit={handleLogin} className={styles.form}>
                    {error && <div className={styles.error}>{error}</div>}
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
                    <button type="submit" className={styles.loginButton}>Login</button>
                </form>
                <div className={styles.footer}>
                    <p>Don &apos; t have an account? <span onClick={() => {
                        onOpen()
                        onClose()
                    }}>Sign up</span></p>
                </div>
            </div>
        </div>
    );
};

export default LoginModal;
