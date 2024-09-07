// components/NotificationModal.js
import styles from './NotificationModal.module.css';

type Props = {
    notifications: {
        title: string;
        message: string;
        timestamp: string;
    }[];
    onClose: () => void;
}

const NotificationModal = ({notifications, onClose}: Props) => {
    const handleCloseModal = (e: React.MouseEvent<HTMLDivElement>) => {
        if ((e.target as HTMLElement).id === "overlay") {
            onClose(); // Close modal if clicking outside of it
        }
    };

    return (
        <div className={styles.overlay} id="overlay" onClick={handleCloseModal}>
            <div className={styles.modal}>
                <div className={styles.header}>
                    <h2>Notifications</h2>
                    <button className={styles.closeButton} onClick={onClose}>×</button>
                </div>
                <div className={styles.body}>
                    {notifications.length > 0 ? (
                        notifications.map((notification, index) => (
                            <div key={index} className={styles.notificationItem}>
                                <h4>{notification.title}</h4>
                                <p>{notification.message}</p>
                                <small>{notification.timestamp}</small>
                            </div>
                        ))
                    ) : (
                        <p className={styles.noNotification}>No new notifications</p>
                    )}
                </div>
            </div>
        </div>
    );
};

export default NotificationModal;
