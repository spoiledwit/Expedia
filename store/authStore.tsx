import { create } from "zustand";

type AuthStore = {
    status: "loading" | "error" | "success";
    auth: {
        id: string;
        name: string;
        email: string;
        isAdmin: boolean;
        countries: string[];
    } | null;

    setStatus: (status: "loading" | "error" | "success") => void;
    clearAuth: () => void;
};

const useAuthStore = create<AuthStore>((set) => ({
    status: "error",
    auth: null,
    clearAuth: () => set(() => ({ auth: null })),
    setStatus: (status) => set(() => ({ status })),
}));

export default useAuthStore;