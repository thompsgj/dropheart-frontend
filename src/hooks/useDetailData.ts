import {useQuery} from "react-query";
import {fetchData} from "@/component/fetch/post";

export const useDetailData = (key: string | string[], endpoint: string) => {
    return useQuery([key], () => fetchData(endpoint), {
        onError: (error) => {
            console.error('Error fetching data:', error);
        },
        onSuccess: (data) => {
            console.log('Data fetched successfully:', data);
        },
    });
};
