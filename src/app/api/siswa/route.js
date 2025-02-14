import prisma from "@/utils/db";

export async function GET() {
  try {
    const siswa = await prisma.siswa.findMany({
      include: { kelas: true },
    });
    return Response.json(siswa);
  } catch (error) {
    return Response.json({ error: "Gagal mengambil data siswa" }, { status: 500 });
  }
}

export async function POST(request) {
  const { nama, kelasId } = await request.json();
  const siswa = await prisma.siswa.create({
    data: {
      nama,
      kelas: { connect: { id: kelasId } },
    },
  });
  return Response.json(siswa);
}