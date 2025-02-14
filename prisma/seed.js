const { PrismaClient } = require("@prisma/client");
const bcrypt = require("bcrypt");

const prisma = new PrismaClient();

async function main() {
  console.log("🌱 Seeding database...");

  // Create classes
  const kelas10A = await prisma.kelas.create({
    data: { nama: "Kelas 10A" },
  });

  const kelas10B = await prisma.kelas.create({
    data: { nama: "Kelas 10B" },
  });

  const kelas11A = await prisma.kelas.create({
    data: { nama: "Kelas 11A" },
  });

  const kelas11B = await prisma.kelas.create({
    data: { nama: "Kelas 11B" },
  });

  // Create teachers
  const guru1 = await prisma.guru.create({
    data: { nama: "Pak Joko", kelasId: kelas10A.id },
  });

  const guru2 = await prisma.guru.create({
    data: { nama: "Bu Rina", kelasId: kelas10B.id },
  });

  const guru3 = await prisma.guru.create({
    data: { nama: "Pak Sigit", kelasId: kelas11A.id },
  });

  const guru4 = await prisma.guru.create({
    data: { nama: "Bu Maya", kelasId: kelas11B.id },
  });

  // Create subjects
  const matematika = await prisma.mataPelajaran.create({
    data: { nama: "Matematika" },
  });

  const fisika = await prisma.mataPelajaran.create({
    data: { nama: "Fisika" },
  });

  const kimia = await prisma.mataPelajaran.create({
    data: { nama: "Kimia" },
  });

  const biologi = await prisma.mataPelajaran.create({
    data: { nama: "Biologi" },
  });

  const bahasaIndonesia = await prisma.mataPelajaran.create({
    data: { nama: "Bahasa Indonesia" },
  });

  // Link teachers with subjects
  await prisma.guruMataPelajaran.createMany({
    data: [
      { guruId: guru1.id, mataPelajaranId: matematika.id },
      { guruId: guru1.id, mataPelajaranId: fisika.id },
      { guruId: guru2.id, mataPelajaranId: kimia.id },
      { guruId: guru2.id, mataPelajaranId: bahasaIndonesia.id },
      { guruId: guru3.id, mataPelajaranId: biologi.id },
      { guruId: guru3.id, mataPelajaranId: matematika.id },
      { guruId: guru4.id, mataPelajaranId: bahasaIndonesia.id },
      { guruId: guru4.id, mataPelajaranId: fisika.id },
    ],
  });

  // Create students
  await prisma.siswa.createMany({
    data: [
      { nama: "Budi Santoso", kelasId: kelas10A.id },
      { nama: "Siti Aminah", kelasId: kelas10A.id },
      { nama: "Rudi Hartono", kelasId: kelas10B.id },
      { nama: "Linda Susanti", kelasId: kelas10B.id },
      { nama: "Ahmad Yusuf", kelasId: kelas11A.id },
      { nama: "Dewi Anggraeni", kelasId: kelas11A.id },
      { nama: "Gina Pratiwi", kelasId: kelas11B.id },
      { nama: "Ariansyah", kelasId: kelas11B.id },
      { nama: "Eka Pramudya", kelasId: kelas10A.id },
      { nama: "Mia Ramadhani", kelasId: kelas10B.id },
      { nama: "Hana Putri", kelasId: kelas11A.id },
      { nama: "Yudi Prasetyo", kelasId: kelas11B.id },
    ],
  });

  
  // tambahkan data user
  const hashedPassword = await bcrypt.hash("password123", 10);

  await prisma.user.create({
    data: {
      username: "admin",
      password: hashedPassword,
    },
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
