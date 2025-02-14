import prisma from "@/utils/db";

export async function GET() {
  try {
    const mataPelajaran = await prisma.mataPelajaran.findMany({
      include: {
        guru: {
          include: { guru: true },
        },
      },
    });

    const formattedMataPelajaran = mataPelajaran.map((mp) => ({
      id: mp.id,
      nama: mp.nama,
      guru: mp.guru.map((g) => ({
        id: g.guru.id,
        nama: g.guru.nama,
      })),
    }));

    return Response.json(formattedMataPelajaran);
  } catch (error) {
    console.error("Error:", error);
    return Response.json({ error: "Gagal mengambil data mata pelajaran" }, { status: 500 });
  }
}
