const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

async function main() {
  console.log("🌱 Seeding database...");

  // Tambah Kelas
  const kelas10A = await prisma.kelas.create({
    data: {
      nama: "Kelas 10A",
    },
  });

  const kelas10B = await prisma.kelas.create({
    data: {
      nama: "Kelas 10B",
    },
  });

  // Tambah Guru
  const guru1 = await prisma.guru.create({
    data: {
      nama: "Pak Joko",
      kelasId: kelas10A.id,
    },
  });

  const guru2 = await prisma.guru.create({
    data: {
      nama: "Bu Rina",
      kelasId: kelas10B.id,
    },
  });

  // Tambah Mata Pelajaran
  const matematika = await prisma.mataPelajaran.create({
    data: { nama: "Matematika" },
  });

  const fisika = await prisma.mataPelajaran.create({
    data: { nama: "Fisika" },
  });

  const kimia = await prisma.mataPelajaran.create({
    data: { nama: "Kimia" },
  });

  // Relasi Guru - Mata Pelajaran
  await prisma.guruMataPelajaran.createMany({
    data: [
      { guruId: guru1.id, mataPelajaranId: matematika.id },
      { guruId: guru1.id, mataPelajaranId: fisika.id },
      { guruId: guru2.id, mataPelajaranId: kimia.id },
    ],
  });

  // Tambah Siswa
  await prisma.siswa.createMany({
    data: [
      { nama: "Budi Santoso", kelasId: kelas10A.id },
      { nama: "Siti Aminah", kelasId: kelas10A.id },
      { nama: "Rudi Hartono", kelasId: kelas10B.id },
      { nama: "Linda Susanti", kelasId: kelas10B.id },
    ],
  });

  console.log("✅ Seeding selesai!");
}

main()
  .catch((e) => {
    console.error("❌ Error saat seeding:", e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
