import { create } from 'zustand';

const useProductsDetailsModal = create((set) => ({
    productDetailsId: "0",
    isProductDetailsModalOpen: false,
    setProductDetailsId: (arg) => set({ id: arg }),
    setProductDetailsModalOpen: (arg) => set({ isOpen: arg }),
}));

export { useProductsDetailsModal };
