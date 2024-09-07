// Fetch data using the fetch API
export const fetchData = async (endpoint:any) => {
    const response = await fetch(endpoint);
    if (!response.ok) {
        throw new Error('Network response was not ok');
    }
    return response.json(); // Parse the response as JSON
};
