const generateUniqueUserId = () => {
    return Math.floor(Math.floor(Math.random() * 100000) + Math.floor(Math.random() * 12100)); // Generate a unique ID
};

export default generateUniqueUserId;
