import {useMutation} from "react-query";
import {postData} from "@/component/fetch";
import {useRouter} from "next/router";

export const useItemUpdate = () => {
    const router = useRouter();

    return useMutation({
        mutationFn: postData,
        onSuccess: (data) => {
            router.replace('/')
            console.log(data)
        },
        onError: (error) => {
            // Handle error (e.g., show an error message)
            console.error('Error posting data:', error);
        },
        onSettled: () => router.replace('/')
    });
};