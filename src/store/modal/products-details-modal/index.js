import { produce } from 'immer';
import { create } from 'zustand';

const useProductsDetailsModal = create((set) => ({
    productsDetails: {
        id: "0",
        isOpen: false,
    },
    setProductsDetails: (arg) => set({ productsDetails: arg }),
    setIsOpenProductDetails: (arg) => set(
        produce((state) => {
            state.productDetails.isOpen = arg
        })
    )
}));

export { useProductsDetailsModal };
