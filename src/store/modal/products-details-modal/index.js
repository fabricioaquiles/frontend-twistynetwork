import { create } from 'zustand';

const useProductsDetailsModal = create((set) => ({
    productDetailsData: "0",
    isProductDetailsModalOpen: false,
    setProductDetailsData: (arg) => set({ productDetailsData: arg }),
    setProductDetailsModalOpen: (arg) => set({ isProductDetailsModalOpen: arg }),
}));

export { useProductsDetailsModal };
