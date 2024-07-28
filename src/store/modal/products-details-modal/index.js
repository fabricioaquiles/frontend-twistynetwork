import { create } from 'zustand';

const useProductsDetailsModal = create((set) => ({
    productDetailsData: {},
    isProductDetailsModalOpen: false,
    setProductDetailsData: (arg) => set({ productDetailsData: arg }),
    setProductDetailsModalOpen: (arg) => set({ isProductDetailsModalOpen: arg }),
}));

export { useProductsDetailsModal };
