import prisma from "@/utils/db";

export async function GET() {
  try {
    const kelas = await prisma.kelas.findMany({
      include: { siswa: true, guru: true },
    });
    return Response.json(kelas);
  } catch (error) {
    return Response.json({ error: "Gagal mengambil data kelas" }, { status: 500 });
  }
}

export async function POST(request) {
  const { nama } = await request.json();
  const kelas = await prisma.kelas.create({
    data: { nama },
  });
  return NextResponse.json(kelas);
}

