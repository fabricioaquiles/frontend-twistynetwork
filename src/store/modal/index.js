import { create } from 'zustand';

const useAuthModal = create((set) => ({
    isAuthModalOpen: false,
    setAuthModalOpen: (arg) => set({ isOpen: arg }),
}));

export { useAuthModal };
