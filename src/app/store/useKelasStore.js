"use client";

import { create } from "zustand";

const useKelasStore = create((set) => ({
  kelas: [],
  fetchKelas: async () => {
    try {
      const response = await fetch("/api/kelas");
      const data = await response.json();
      set({ kelas: data });
    } catch (error) {
      console.error("Error fetching kelas:", error);
    }
  },
}));

export default useKelasStore;
