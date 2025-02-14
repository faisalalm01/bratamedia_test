"use client";

import { create } from "zustand";

const useGuruStore = create((set) => ({
  guru: [],
  selectedGuru: null,
  fetchGuru: async () => {
    try {
      const response = await fetch("/api/guru");
      const data = await response.json();
      set({ guru: data });
    } catch (error) {
      console.error("Error fetching guru:", error);
    }
  },
  fetchGuruDetail: async (id) => {
    try {
      const response = await fetch(`/api/guru/${id}`);
      const data = await response.json();
      set({ selectedGuru: data });
    } catch (error) {
      console.error("Error fetching guru detail:", error);
      set({ selectedGuru: null });
    }
}
}));

export default useGuruStore;
