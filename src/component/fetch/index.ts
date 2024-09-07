
export const postData = async ({
                                   url,
                                   param,
                                   method = "POST",
                                   type = 1,
                               }: {
    url: string;
    /* eslint-disable @typescript-eslint/no-explicit-any */
    param?: any;
    method?: string;
    type?: number;
}) => {
    let response;

    if (type === 1) {
        response = await fetch(url, {
            // credentials: "include",
            method: method,
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(param),
        });
    } else if (type === 2) {
        response = await fetch(url, {
            // credentials: "include",
            method: method,
            body: param,
        });
    } else {
        throw new Error("Invalid request type");
    }

    // Check if the response was successful
    if (!response.ok) {
        // Extract the error message if available
        const errorData = await response.json();
        const errorMessage =
            errorData.message || `Request failed with status ${response.status}`;
        throw new Error(errorMessage);
    }

    return response.json();
};
