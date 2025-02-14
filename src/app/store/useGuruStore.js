import { create } from "zustand";

export const useGuruStore = create((set) => ({
  guru: [],
  fetchGuru: async () => {
    try {
      const res = await fetch("/api/guru");
      const data = await res.json();
      set({ guru: data });
    } catch (error) {
      console.error("Gagal mengambil data guru:", error);
    }
  },
}));
