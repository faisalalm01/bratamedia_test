import { create } from "zustand";

export const useSiswaStore = create((set) => ({
  siswa: [],
  fetchSiswa: async () => {
    try {
      const res = await fetch("/api/kelas");
      const data = await res.json();
      const formattedData = data.flatMap((kelas) =>
        kelas.siswa.map((siswa) => ({
          id: siswa.id,
          nama: siswa.nama,
          kelas: kelas.nama,
        }))
      );
      set({ siswa: formattedData });
    } catch (error) {
      console.error("Gagal mengambil data siswa:", error);
    }
  },
}));
