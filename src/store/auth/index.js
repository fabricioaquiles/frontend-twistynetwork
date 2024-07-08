import { create } from "zustand";
import { createJSONStorage, persist } from 'zustand/middleware';

export const useAuth = create(
    persist(
        (set) => ({
            userName: null,
            setUserName: (arg) => set({ userName: arg })
        }),
        {
            name: 'user-storage', // name of the item in the storage (must be unique)
            storage: createJSONStorage(() => sessionStorage), // (optional) by default, 'localStorage' is used
        },
    ),
)

export { useAuth };
