"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import useGuruStore from "../store/useGuruStore";

const GuruList = () => {
  const { guru, fetchGuru } = useGuruStore();
  const router = useRouter();

  useEffect(() => {
    fetchGuru();
  }, []);

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-4">Daftar Guru</h1>
      <table className="w-full border-collapse border border-gray-300">
        <thead>
          <tr className="bg-gray-200">
            <th className="border p-2">Nama</th>
            <th className="border p-2">Kelas</th>
            <th className="border p-2">Aksi</th>
          </tr>
        </thead>
        <tbody>
          {guru.map((item) => (
            <tr key={item.id} className="border">
              <td className="border p-2">{item.nama}</td>
              <td className="border p-2">{item.kelas.nama}</td>
              <td className="border p-2">
                <button
                  className="bg-blue-500 text-white p-2 rounded"
                  onClick={() => router.push(`/guru/${item.id}`)}
                >
                  Lihat Detail
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default GuruList;
