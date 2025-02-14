// "use client";

// import { useRouter } from "next/navigation";

// const Dashboard = () => {
//   const router = useRouter();

//   const menus = [
//     { name: "Siswa", path: "/siswa" },
//     { name: "Guru", path: "/guru" },
//     { name: "Kelas", path: "/kelas" },
//   ];

//   return (
//     <div className="p-8">
//       <h1 className="text-2xl font-bold mb-4">Dashboard</h1>
//       <div className="grid grid-cols-2 gap-4">
//         {menus.map((menu) => (
//           <div
//             key={menu.name}
//             className="p-6 bg-blue-500 text-white rounded-lg cursor-pointer hover:bg-blue-600 transition"
//             onClick={() => router.push(menu.path)}
//           >
//             <h2 className="text-xl font-semibold">{menu.name}</h2>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Dashboard;
"use client";
import { useSession, signOut } from "next-auth/react";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();

  const menus = [
    { name: "Siswa", path: "/siswa" },
    { name: "Guru", path: "/guru" },
    { name: "Kelas", path: "/kelas" },
  ];
  const { data: session } = useSession();

  return (
    <div>
      {session ? (
        <>
          <h1>Welcome, {session.user.username}</h1>
          <button onClick={() => signOut()}>Sign Out</button>
          <h1 className="text-2xl font-bold mb-4">Dashboard</h1>
          <div className="grid grid-cols-2 gap-4">
            {menus.map((menu) => (
              <div
                key={menu.name}
                className="p-6 bg-blue-500 text-white rounded-lg cursor-pointer hover:bg-blue-600 transition"
                onClick={() => router.push(menu.path)}
              >
                <h2 className="text-xl font-semibold">{menu.name}</h2>
              </div>
            ))}
          </div>
        </>
      ) : (
        <><p>You are not signed in</p><Link href={"/auth/login"}>login</Link></>
      )}
    </div>
  );
}