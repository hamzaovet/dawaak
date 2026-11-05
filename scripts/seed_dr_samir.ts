import { prisma } from "../lib/prisma";

async function main() {
  console.log("🚀 Starting Dr. Samir & Platform Admin Seeder...");

  // 1. Create or Update Platform Admin (Owner)
  const owner = await prisma.platformAdmin.upsert({
    where: { username: "owner" },
    update: {
      name: "حمزة عباس (المالك العام)",
      email: "hamzaovet@gmail.com",
      password: "dawaak2026",
      role: "OWNER",
    },
    create: {
      name: "حمزة عباس (المالك العام)",
      username: "owner",
      email: "hamzaovet@gmail.com",
      password: "dawaak2026",
      role: "OWNER",
    },
  });
  console.log("✅ Platform Admin upserted:", owner.username, owner.email);

  // 2. Create or Update Dr. Samir New Pharmacy
  // Data strictly from the business card:
  // Name: صيدلية د / سمير الجديدة
  // Slogan: معاً لحياة صحية أفضل
  // Phones: 01289439659, 01068790620, 0222584083
  // Address: 464 شارع سكة الوايلي - حدائق القبة توصيل الادوية للمنازل
  // Service: 24 HOUR SERVICE
  const drSamir = await prisma.pharmacy.upsert({
    where: { slug: "dr-samir-hadayek-el-qobba" },
    update: {
      nameAr: "صيدلية د. سمير الجديدة",
      nameEn: "Dr. Samir New Pharmacy",
      licenseNumber: "LIC-CA-2024-9912",
      ownerName: "د. سمير",
      phone: "0222584083",
      whatsapp: "01289439659",
      email: "drsamir.pharmacy@gmail.com",
      address: "464 شارع سكة الوايلي — حدائق القبة، القاهرة",
      city: "حدائق القبة",
      governorate: "القاهرة",
      lat: 30.0825,
      lng: 31.2882,
      logoUrl: "https://images.unsplash.com/photo-1586015555751-63c29994c6a7?w=300",
      coverUrl: "https://images.unsplash.com/photo-1576602976047-174e57a47881?w=1200",
      rating: 5.0,
      isOpen: true,
      deliveryAvailable: true,
      deliveryFee: 15.0,
      deliveryTimeEstimate: "20 - 30 دقيقة",
      workingHours: "24 ساعة / خدمة ليلية وتوصيل للمنازل",
      isVerified: true,
      subscriptionPlan: "FOUNDER_FREE_2026",
      chainName: "صيدليات د. سمير",
      branchName: "فرع سكة الوايلي - حدائق القبة",
      subscriptionStart: new Date("2026-01-01"),
      subscriptionEnd: new Date("2026-12-31T23:59:59Z"),
      subscriptionStatus: "ACTIVE",
      monthlyFee: 499.0,
      branchesCount: 1,
      isFounderPromo: true,
    },
    create: {
      slug: "dr-samir-hadayek-el-qobba",
      nameAr: "صيدلية د. سمير الجديدة",
      nameEn: "Dr. Samir New Pharmacy",
      licenseNumber: "LIC-CA-2024-9912",
      ownerName: "د. سمير",
      phone: "0222584083",
      whatsapp: "01289439659",
      email: "drsamir.pharmacy@gmail.com",
      address: "464 شارع سكة الوايلي — حدائق القبة، القاهرة",
      city: "حدائق القبة",
      governorate: "القاهرة",
      lat: 30.0825,
      lng: 31.2882,
      logoUrl: "https://images.unsplash.com/photo-1586015555751-63c29994c6a7?w=300",
      coverUrl: "https://images.unsplash.com/photo-1576602976047-174e57a47881?w=1200",
      rating: 5.0,
      isOpen: true,
      deliveryAvailable: true,
      deliveryFee: 15.0,
      deliveryTimeEstimate: "20 - 30 دقيقة",
      workingHours: "24 ساعة / خدمة ليلية وتوصيل للمنازل",
      isVerified: true,
      subscriptionPlan: "FOUNDER_FREE_2026",
      chainName: "صيدليات د. سمير",
      branchName: "فرع سكة الوايلي - حدائق القبة",
      subscriptionStart: new Date("2026-01-01"),
      subscriptionEnd: new Date("2026-12-31T23:59:59Z"),
      subscriptionStatus: "ACTIVE",
      monthlyFee: 499.0,
      branchesCount: 1,
      isFounderPromo: true,
    },
  });
  console.log("✅ Dr. Samir Pharmacy upserted:", drSamir.nameAr, drSamir.slug);

  // 3. Upsert Staff for Dr. Samir
  const staff = await prisma.pharmacyStaff.upsert({
    where: { username: "samir" },
    update: {
      pharmacyId: drSamir.id,
      name: "د. سمير",
      password: "password123",
      role: "manager",
      phone: "01289439659",
      isActive: true,
    },
    create: {
      pharmacyId: drSamir.id,
      name: "د. سمير",
      username: "samir",
      password: "password123",
      role: "manager",
      phone: "01289439659",
      isActive: true,
    },
  });
  console.log("✅ Dr. Samir Staff upserted:", staff.username);

  // 4. Create Courier for Dr. Samir
  const existingCourier = await prisma.courier.findFirst({
    where: { pharmacyId: drSamir.id, phone: "01068790620" },
  });
  if (!existingCourier) {
    await prisma.courier.create({
      data: {
        pharmacyId: drSamir.id,
        name: "كابتن أحمد سعيد (دليفري سكة الوايلي)",
        phone: "01068790620",
        vehicleType: "motorcycle",
        isAvailable: true,
        totalOrders: 38,
      },
    });
    console.log("✅ Dr. Samir Courier created");
  }

  // 5. Populate Dr. Samir's Inventory with medicines
  const allMeds = await prisma.medicine.findMany();
  console.log(`Found ${allMeds.length} medicines to link to Dr. Samir's inventory...`);

  for (const med of allMeds) {
    const existingInv = await prisma.pharmacyInventory.findUnique({
      where: {
        pharmacyId_medicineId: {
          pharmacyId: drSamir.id,
          medicineId: med.id,
        },
      },
    });

    if (!existingInv) {
      await prisma.pharmacyInventory.create({
        data: {
          pharmacyId: drSamir.id,
          medicineId: med.id,
          stockQuantity: 40,
          isAvailable: true,
          price: med.officialPrice,
          expiryDate: "2027-12",
        },
      });
    }
  }
  console.log("✅ Dr. Samir Inventory stocked successfully!");

  // 6. Update other pharmacies with Founder Promo until end of 2026
  await prisma.pharmacy.updateMany({
    where: { slug: { not: "dr-samir-hadayek-el-qobba" } },
    data: {
      subscriptionEnd: new Date("2026-12-31T23:59:59Z"),
      isFounderPromo: true,
      subscriptionStatus: "ACTIVE",
      monthlyFee: 499.0,
    },
  });
  console.log("✅ Other partner pharmacies updated with Founder Promo 2026!");

  console.log("🎉 Seeding Dr. Samir & Platform Admin completed successfully!");
}

main()
  .catch((e) => {
    console.error("Error seeding Dr. Samir:", e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
