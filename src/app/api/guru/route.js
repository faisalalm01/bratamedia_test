import prisma from "@/utils/db";

export async function GET() {
  try {
    const guru = await prisma.guru.findMany({
      include: {
        kelas: true,
        mataPelajaran: {
          include: { mataPelajaran: true },
        },
      },
    });

    const formattedGuru = guru.map((g) => ({
      id: g.id,
      nama: g.nama,
      kelas: { id: g.kelas.id, nama: g.kelas.nama },
      mataPelajaran: g.mataPelajaran.map((mp) => ({
        id: mp.mataPelajaran.id,
        nama: mp.mataPelajaran.nama,
      })),
    }));

    return Response.json(formattedGuru);
  } catch (error) {
    console.error("Error:", error);
    return Response.json({ error: "Gagal mengambil data guru" }, { status: 500 });
  }
}
