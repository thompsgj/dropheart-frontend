import { useState } from 'react';

export interface ModalState {
    login: boolean;
    signUp: boolean;
    post: boolean;
    notification: boolean;
    search: boolean;
    mobileNav: boolean;
}

export const useModal = () => {
    const [state, setState] = useState<ModalState>({
        login: false,
        signUp: false,
        post: false,
        notification: false,
        search: false,
        mobileNav: false,
    });

    const openModal = (modal: keyof ModalState) => setState(prev => ({ ...prev, [modal]: true }));
    const closeModal = (modal: keyof ModalState) => setState(prev => ({ ...prev, [modal]: false }));
    const toggleModal = (modal: keyof ModalState) => setState(prev => ({ ...prev, [modal]: !prev[modal] }));

    return { state, openModal, closeModal, toggleModal };
};
