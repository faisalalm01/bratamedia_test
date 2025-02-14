import prisma from "@/utils/db";

export async function GET(req, { params }) {
  const { id } = params;

  try {
    const guru = await prisma.guru.findUnique({
      where: { id },
      include: {
        kelas: true,
        mataPelajaran: {
          include: {
            mataPelajaran: true,
          },
        },
      },
    });

    if (!guru) {
      return Response.json({ error: "Guru tidak ditemukan" }, { status: 404 });
    }

    return Response.json(guru);
  } catch (error) {
    console.error("Error fetching detail guru:", error);
    return Response.json({ error: "Server error" }, { status: 500 });
  }
}
