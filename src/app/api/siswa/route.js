import prisma from "@/utils/db";

export async function GET() {
  try {
    const siswa = await prisma.siswa.findMany({
      include: { kelas: true },
    });
    return Response.json({msg: "Sukses mengambil data siswa", status: 200, data: siswa});
  } catch (error) {
    return Response.json({msg: "Gagal mengambil data siswa", status: 500, error: error});
  }
}
