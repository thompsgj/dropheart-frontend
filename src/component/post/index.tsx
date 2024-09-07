// components/PostModal.js
import { useState } from 'react';
import styles from './postModal.module.css';

type Props = {
    onClose: () => void;
}

const PostModal = ({ onClose }:Props) => {
    const [title, setTitle] = useState('');
    const [location, setLocation] = useState('');
    const [description, setDescription] = useState('');
    const [postType, setPostType] = useState('event');
    const [error, setError] = useState('');

    const handlePostSubmit = (e:React.FormEvent) => {
        e.preventDefault();

        if (!title || !location || !description || !postType) {
            setError('All fields are required.');
            return;
        }

        // Mock post submission logic
        console.log('Creating post with:', { title, location, description, postType });
        setError('');
        onClose(); // Close modal after successful post submission
    };

    return (
        <div className={styles.overlay}>
            <div className={styles.modal}>
                <div className={styles.header}>
                    <h2>Create New Post</h2>
                    <button className={styles.closeButton} onClick={onClose}>×</button>
                </div>
                <form onSubmit={handlePostSubmit} className={styles.form}>
                    {error && <div className={styles.error}>{error}</div>}

                    <div className={styles.inputGroup}>
                        <label htmlFor="title">Title</label>
                        <input
                            type="text"
                            id="title"
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                            className={styles.input}
                        />
                    </div>

                    <div className={styles.inputGroup}>
                        <label htmlFor="location">Location</label>
                        <input
                            type="text"
                            id="location"
                            value={location}
                            onChange={(e) => setLocation(e.target.value)}
                            className={styles.input}
                        />
                    </div>

                    <div className={styles.inputGroup}>
                        <label htmlFor="description">Description</label>
                        <textarea
                            id="description"
                            value={description}
                            onChange={(e) => setDescription(e.target.value)}
                            className={styles.textarea}
                        />
                    </div>

                    <div className={styles.inputGroup}>
                        <label htmlFor="postType">Type of Post</label>
                        <select
                            id="postType"
                            value={postType}
                            onChange={(e) => setPostType(e.target.value)}
                            className={styles.select}
                        >
                            <option value="event">Event</option>
                            <option value="job">Job</option>
                            <option value="offer">Offer</option>
                            <option value="request">Request</option>
                        </select>
                    </div>

                    <button type="submit" className={styles.postButton}>Create Post</button>
                </form>
            </div>
        </div>
    );
};

export default PostModal;
