// components/PostModal.js
import React, {useState} from 'react';
import styles from './postModal.module.css';
import {ITEMS_CATEG} from "@/component/home/homeItems";
import {useCreateItem} from "@/hooks/useCreate";
import Loading from "@/component/loading";
import {useAuthStore} from "@/lib/store";

type Props = {
    onClose: () => void;
}
const defImg = [
    {
        name: 'ELECTRONICS',
        img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQhKgXXKvX_Rw0d4rR2VvlJpeC8lF8zkY_yBQ&s'
    },
    {
        name: 'BOOKS',
        img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTcKzE-QAIb2ySeA3tbSrrlH1wBm8c9lcHWPg&s'
    },
    {
        name: 'GAMES',
        img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRbST6ZcM8pI9j23LhdLnp-STDxUaPn0WqLZA&s'
    },
    {
        name: 'ARTS',
        img: 'https://static.vecteezy.com/system/resources/previews/000/141/712/non_2x/vector-default-avatar-headshot-icons.jpg'
    },
    {
        name: 'MEN_FASHION',
        img: 'https://tds-images.thedailystar.net/sites/default/files/styles/big_202/public/images/2022/11/08/men_fashion.png'
    },
    {
        name: 'WOMEN_FASHION',
        img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQn-_dyFsVkWOkpl0IwvnC0eo-m148uTzzdpw&s'
    }
]

const MAP: { [name: string]: string } = {
    'Electronics': 'ELECTRONICS',
    'Books': 'BOOKS',
    'Games': 'GAMES',
    "Arts": 'ARTS',
    "Women's Fashion": 'MEN_FASHION',
    "Men's Fashion": 'WOMEN_FASHION'
}

const PostModal = ({onClose}: Props) => {
    const [title, setTitle] = useState('');
    const [location, setLocation] = useState('');
    const [description, setDescription] = useState('');
    const [postType, setPostType] = useState('Choose');
    const [error, setError] = useState('');
    const {mutate: postItem, isLoading} = useCreateItem()
    const {userId} = useAuthStore()

    const filtered = defImg.find((item) => item.name === MAP[postType])

    const handlePostSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        if (!title || !location || !postType) {
            setError('All fields are required.');
            return;
        }

        // Mock post submission logic
        postItem({
            url: `https://dropheart-backend-z8c0.onrender.com/api/create/item`, param: {
                item_name: title,
                location_id: location,
                item_description: description,
                item_type: MAP[postType],
                user_id: userId,
                image_path: filtered?.img
            }, method: 'POST'
        })
        setError('');
        onClose(); // Close modal after successful post submission
    };

    if (isLoading) return <div className={'loading_wrapper'}><Loading/></div>

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
                                ITEMS_CATEG.map((item: string, index: number) => <option value={item}
                                                                                         key={index}>{item}</option>)
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
