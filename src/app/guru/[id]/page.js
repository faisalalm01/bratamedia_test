"use client";

import { useEffect } from "react";
import { useParams } from "next/navigation";
import useGuruStore from "../../store/useGuruStore";

const GuruDetail = () => {
  const { id } = useParams();
  const { selectedGuru, fetchGuruDetail } = useGuruStore();

  useEffect(() => {
    if (id) fetchGuruDetail(id);
  }, [id]);

  if (!selectedGuru) return <p>Loading...</p>;

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-4">Detail Guru</h1>
      <p><strong>Nama:</strong> {selectedGuru.nama}</p>
      <p><strong>Kelas:</strong> {selectedGuru.kelas.nama}</p>

      <h2 className="text-xl font-semibold mt-4">Mata Pelajaran:</h2>
      <ul className="list-disc pl-5">
        {selectedGuru.mataPelajaran.map((mp) => (
          <li key={mp.id}>{mp.mataPelajaran.nama}</li>
        ))}
      </ul>
    </div>
  );
};

export default GuruDetail;
