"use client";

import { useEffect } from "react";
import useKelasStore from "@/app/store/useKelasStore";

const KelasList = () => {
  const { kelas, fetchKelas } = useKelasStore();

  useEffect(() => {
    fetchKelas();
  }, []);

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Daftar Kelas</h1>
      <ul>
        {kelas.map((k) => (
          <li key={k.id} className="border p-2 mb-2">
            {k.nama} - {k.siswa.length} siswa
          </li>
        ))}
      </ul>
    </div>
  );
};

export default KelasList;
