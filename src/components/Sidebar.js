import Link from "next/link";

export default function Sidebar() {
  return (
    <aside className="w-64 bg-gray-800 text-white h-screen p-5">
      <h2 className="text-xl font-bold mb-4">Dashboard</h2>
      <ul>
        <li className="mb-2">
          <Link href="/" className="block p-2 rounded hover:bg-gray-700">Home</Link>
        </li>
        <li className="mb-2">
          <Link href="/siswa" className="block p-2 rounded hover:bg-gray-700">Siswa</Link>
        </li>
        <li className="mb-2">
          <Link href="/guru" className="block p-2 rounded hover:bg-gray-700">Guru</Link>
        </li>
      </ul>
    </aside>
  );
}
