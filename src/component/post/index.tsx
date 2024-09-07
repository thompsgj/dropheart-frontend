// components/PostModal.js
import {useState} from 'react';
import styles from './postModal.module.css';
import {ITEMS_CATEG} from "@/component/home/homeItems";

type Props = {
    onClose: () => void;
}

const PostModal = ({onClose}: Props) => {
    const [title, setTitle] = useState('');
    const [location, setLocation] = useState('');
    const [description, setDescription] = useState('');
    const [postType, setPostType] = useState('Choose');
    const [error, setError] = useState('');

    const handlePostSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        if (!title || !location || !postType) {
            setError('All fields are required.');
            return;
        }

        // Mock post submission logic
        console.log('Creating post with:', {title, location, description, postType});
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
                        <label htmlFor="title">Title*</label>
                        <input
                            type="text"
                            id="title"
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                            className={styles.input}
                        />
                    </div>

                    <div className={styles.inputGroup}>
                        <label htmlFor="location">Location*</label>
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
                        <label htmlFor="postType">Item Type*</label>
                        <select
                            id="postType"
                            value={postType}
                            onChange={(e) => setPostType(e.target.value)}
                            className={styles.select}
                        >
                            {
                                ITEMS_CATEG.map((item: string, index: number) => <option value={item} key={index}>{item}</option>)
                            }
                        </select>
                    </div>

                    <button type="submit" className={styles.postButton}>Create Post</button>
                </form>
            </div>
        </div>
    );
};

export default PostModal;
