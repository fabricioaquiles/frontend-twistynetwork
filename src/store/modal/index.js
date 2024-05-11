import {create} from 'zustand';

const useAuthModalStore = create((set) => ({
    isOpen: false,
    setIsOpen: (arg) => set({isOpen: arg}),
}));

export {useAuthModalStore}