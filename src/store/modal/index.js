import { create } from 'zustand';

const useAuthModal = create((set) => ({
    isAuthModalOpen: false,
    setAuthModalOpen: (arg) => set({ isAuthModalOpen: arg }),
}));

export { useAuthModal };
