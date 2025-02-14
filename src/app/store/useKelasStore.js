import { create } from "zustand";

export const useKelasStore = create((set) => ({
  kelas: [],
  fetchKelas: async () => {
    try {
      const res = await fetch("/api/kelas");
      const data = await res.json();
      set({ kelas: data });
    } catch (error) {
      console.error("Gagal mengambil data kelas:", error);
    }
  },
}));
