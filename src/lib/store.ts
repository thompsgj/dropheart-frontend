// store/useAuthStore.ts
import {create} from 'zustand';
import {persist} from 'zustand/middleware';

interface AuthState {
    token: string | null;
    userId: string | null;
    setToken: (token: string) => void;
    setUserId: (userId: string) => void;
    clearAuth: () => void;
}

export const useAuthStore = create<AuthState>()(
    persist(
        (set) => ({
            token: null,
            userId: null,
            setToken: (token: string) => set({token}),
            setUserId: (userId: string) => set({userId}),
            clearAuth: () => set({token: null, userId: null}),
        }),
        {
            name: 'auth', // Name of the storage (can be any string)
            getStorage: () => localStorage, // Use localStorage instead of sessionStorage
        }
    )
);


// store/useModalStore.ts

interface ModalState {
    login: boolean;
    signUp: boolean;
    post: boolean;
    notification: boolean;
    search: boolean;
    mobileNav: boolean;
    openModal: (modal: keyof ModalState) => void;
    closeModal: (modal: keyof ModalState) => void;
}

export const useModalStore = create<ModalState>((set) => ({
    login: false,
    signUp: false,
    post: false,
    notification: false,
    search: false,
    mobileNav: false,
    openModal: (modal) => set((state) => ({ ...state, [modal]: true })),
    closeModal: (modal) => set((state) => ({ ...state, [modal]: false })),
}));
