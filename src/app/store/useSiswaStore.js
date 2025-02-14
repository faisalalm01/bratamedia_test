"use client";

import { create } from "zustand";

const useSiswaStore = create((set) => ({
  siswa: [],
  fetchSiswa: async () => {
    try {
      const response = await fetch("/api/siswa");
      const data = await response.json();
      set({ siswa: data });
    } catch (error) {
      console.error("Error fetching siswa:", error);
    }
  },
}));

export default useSiswaStore;
