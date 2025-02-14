"use client";

import { useEffect } from "react";
import useSiswaStore from "@/app/store/useSiswaStore";

const SiswaList = () => {
  const { siswa, fetchSiswa } = useSiswaStore();

  useEffect(() => {
    fetchSiswa();
  }, []);

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Daftar Siswa</h1>
      <ul>
        {siswa.map((s) => (
          <li key={s.id} className="border p-2 mb-2">
            {s.nama} - {s.kelas.nama}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SiswaList;
