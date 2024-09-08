import {useMutation} from "react-query";
import {postData} from '@/component/fetch'

export const useCreateItem = () => {

    return useMutation({
        mutationFn: postData,
        onSuccess: (data) => {
            console.log(data)
        },
        onError: (error) => {
            // Handle error (e.g., show an error message)
            console.error('Error posting data:', error);
        },
    });
};