import { create } from 'zustand';

const useProductsDetailsModal = create((set) => ({
    productDetailsId: "0",
    isProductDetailsModalOpen: false,
    setProductDetailsId: (arg) => set({ productDetailsId: arg }),
    setProductDetailsModalOpen: (arg) => set({ isProductDetailsModalOpen: arg }),
}));

export { useProductsDetailsModal };
