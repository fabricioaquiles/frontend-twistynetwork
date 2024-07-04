import { create } from "zustand";

const useAuth = create((set) => ({
    userName: null,
    setUserName: (arg) => set({ userName: arg })
}));

export { useAuth }