import {useMutation} from "react-query";
import {postData} from '@/component/fetch'
import {useAuthStore, useModalStore} from "@/lib/store";

export const useRegister = () => {
    const {setToken, setUserId} = useAuthStore()
    const {closeModal} = useModalStore()
    return useMutation({
        mutationFn: postData,
        onSuccess: (data) => {
            setToken(data.access)
            setUserId(data.user_id)
            closeModal('signUp')
            closeModal('login')
        },
        onError: (error) => {
            // Handle error (e.g., show an error message)
            console.error('Error posting data:', error);
        },
    });
};