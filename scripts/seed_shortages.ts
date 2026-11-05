import { prisma } from "../lib/prisma";

async function main() {
  console.log("🌱 Enriching Shortage Radar Database with Authentic Egyptian Medicines...");

  // Shortage Medicines Catalog with EDA Official Alternatives
  const shortageData = [
    {
      tradeNameAr: "إلتروكسين 100 ميكروجرام (50 قرص)",
      tradeNameEn: "Eltroxin 100 mcg Tablets",
      genericName: "Levothyroxine Sodium",
      strength: "100 mcg",
      dosageForm: "أقراص فموية",
      category: "أدوية الغدة والهرمونات",
      officialPrice: 125.0,
      manufacturer: "GlaxoSmithKline (GSK)",
      isShortage: true,
      requiresPrescription: true,
      alternatives: JSON.stringify(["Euthyrox 100 mcg", "Thyroxine 100 mcg", "T4 100 mcg"]),
      description: "هرمون الغدة الدرقية التعويضي. شحيح جداً في السوق المصري بسبب قيود الاستيراد وتغير سلاسل الإمداد.",
    },
    {
      tradeNameAr: "إلتروكسين 50 ميكروجرام (50 قرص)",
      tradeNameEn: "Eltroxin 50 mcg Tablets",
      genericName: "Levothyroxine Sodium",
      strength: "50 mcg",
      dosageForm: "أقراص فموية",
      category: "أدوية الغدة والهرمونات",
      officialPrice: 95.0,
      manufacturer: "GlaxoSmithKline (GSK)",
      isShortage: true,
      requiresPrescription: true,
      alternatives: JSON.stringify(["Euthyrox 50 mcg", "Thyro 50 mcg"]),
      description: "هرمون الغدة الدرقية لجرعات الضبط الدقيق. مطلوب بكثرة لمرضى قصور الغدة الدرقية.",
    },
    {
      tradeNameAr: "كلكسان 40 مجم (0.4 مل) حقن معبأة",
      tradeNameEn: "Clexane 40 mg (0.4 ml) Syringes",
      genericName: "Enoxaparin Sodium",
      strength: "40 mg / 0.4 ml",
      dosageForm: "حقن معبأة مسبقاً تحت الجلد",
      category: "مضادات التجلط والسيولة",
      officialPrice: 280.0,
      manufacturer: "Sanofi",
      isShortage: true,
      requiresPrescription: true,
      alternatives: JSON.stringify(["Enoxa 40 mg", "Innohep 4500 IU", "Fragmin 5000 IU"]),
      description: "حقن مضادة للتجلط من مشتقات الهيبارين منخفض الوزن. ضرورية جداً لحالات الحمل الحرج وجلطات الأوردة والعمليات الجراحية.",
    },
    {
      tradeNameAr: "كلكسان 60 مجم (0.6 مل) حقن معبأة",
      tradeNameEn: "Clexane 60 mg (0.6 ml) Syringes",
      genericName: "Enoxaparin Sodium",
      strength: "60 mg / 0.6 ml",
      dosageForm: "حقن تحت الجلد",
      category: "مضادات التجلط والسيولة",
      officialPrice: 380.0,
      manufacturer: "Sanofi",
      isShortage: true,
      requiresPrescription: true,
      alternatives: JSON.stringify(["Enoxa 60 mg", "Clexane 0.6ml"]),
      description: "جرعة علاجية للجلطات النشطة وجراحات الأوعية الدموية وقسطرة القلب.",
    },
    {
      tradeNameAr: "أوزمبيك 1 مجم قلم معبأ للحقن",
      tradeNameEn: "Ozempic 1 mg Solution for Injection",
      genericName: "Semaglutide",
      strength: "1 mg / dose (4 doses)",
      dosageForm: "قلم حقن أوتوماتيكي",
      category: "أدوية السكر والتنحيف",
      officialPrice: 4200.0,
      manufacturer: "Novo Nordisk",
      isShortage: true,
      requiresPrescription: true,
      alternatives: JSON.stringify(["Victoza 6 mg/ml", "Rybelsus 14 mg", "Trulicity 1.5 mg"]),
      description: "مضاد السكر من النوع الثاني وخافض الوزن ومثبط الشهية فائق الفعالية. يواجه طلباً عالمياً ومحلياً ضخماً ونقصاً حاداً.",
    },
    {
      tradeNameAr: "إنسولين ميكستارد 30 إنو 100 وحدة/مل",
      tradeNameEn: "Mixtard 30 HM 100 IU/ml Vial",
      genericName: "Human Insulin 30/70",
      strength: "100 IU/ml (10 ml)",
      dosageForm: "فيال معلق للحقن",
      category: "أدوية السكر والتنحيف",
      officialPrice: 98.0,
      manufacturer: "Novo Nordisk",
      isShortage: true,
      requiresPrescription: true,
      alternatives: JSON.stringify(["Humulin 70/30", "Insulatard HM", "Apidra 100"]),
      description: "إنسولين بشري ممتد وسريع المفعول خليط 30/70 لمرضى السكري النوع الأول والثاني.",
    },
    {
      tradeNameAr: "تيجريتول سي آر 200 مجم (30 قرص)",
      tradeNameEn: "Tegretol CR 200 mg Tablets",
      genericName: "Carbamazepine Controlled Release",
      strength: "200 mg",
      dosageForm: "أقراص ممتدة المفعول",
      category: "أمراض المخ والأعصاب",
      officialPrice: 85.0,
      manufacturer: "Novartis",
      isShortage: true,
      requiresPrescription: true,
      alternatives: JSON.stringify(["Carbamazepine 200", "Teratyl 200 mg", "Neurotop Retard"]),
      description: "علاج أساسي لحالات الصرع والشلل الرعاش والتهاب العصب الخامس. النقص يسبب خطورة انتكاس النوبات.",
    },
    {
      tradeNameAr: "ديباكين كرونو 500 مجم (30 قرص)",
      tradeNameEn: "Depakine Chrono 500 mg Tablets",
      genericName: "Sodium Valproate + Valproic Acid",
      strength: "500 mg",
      dosageForm: "أقراص مغلفة ممتدة الإفراز",
      category: "أمراض المخ والأعصاب",
      officialPrice: 195.0,
      manufacturer: "Sanofi",
      isShortage: true,
      requiresPrescription: true,
      alternatives: JSON.stringify(["Depakine 500", "Valparin Chrono 500"]),
      description: "مثبت للمزاج ومضاد لنوبات الصرع والتشنجات.",
    },
    {
      tradeNameAr: "بخاخ فينتولين للصدر 100 ميكروجرام",
      tradeNameEn: "Ventolin Inhaler 100 mcg",
      genericName: "Salbutamol",
      strength: "100 mcg / dose (200 doses)",
      dosageForm: "بخاخة فموية مضغوطة",
      category: "أمراض الصدر والحساسية",
      officialPrice: 68.0,
      manufacturer: "GlaxoSmithKline (GSK)",
      isShortage: true,
      requiresPrescription: false,
      alternatives: JSON.stringify(["Farcolin Inhaler", "Butalin 100 mcg", "Asthavent"]),
      description: "موسع الشعب الهوائية الإسعافي لمرضى الربو والحساسية الحادة. دواء طوارئ منقذ للحياة.",
    },
    {
      tradeNameAr: "سيريتيد ديسكس 250/50 ميكروجرام",
      tradeNameEn: "Seretide Diskus 250/50 mcg Inhaler",
      genericName: "Salmeterol + Fluticasone Propionate",
      strength: "250 mcg / 50 mcg (60 doses)",
      dosageForm: "بودرة استنشاق ديسكس",
      category: "أمراض الصدر والحساسية",
      officialPrice: 320.0,
      manufacturer: "GlaxoSmithKline",
      isShortage: true,
      requiresPrescription: true,
      alternatives: JSON.stringify(["Airflusal Forspiro", "Bufomix Easyhaler", "Symbicort Turbuhaler"]),
      description: "علاج وقائي يومي لالتهاب الشعب الهوائية المزمن وانسداد الرئة والربو المستمر.",
    },
    {
      tradeNameAr: "ألداكتون 100 مجم (20 قرص)",
      tradeNameEn: "Aldactone 100 mg Tablets",
      genericName: "Spironolactone",
      strength: "100 mg",
      dosageForm: "أقراص فموية",
      category: "أمراض القلب والضغط",
      officialPrice: 75.0,
      manufacturer: "Pfizer",
      isShortage: true,
      requiresPrescription: true,
      alternatives: JSON.stringify(["Spirone 100 mg", "Epitone 100 mg"]),
      description: "مدر للبول موفر للبوتاسيوم، ومثبط للألدوستيرون لمرضى استسقاء الكبد وفشل القلب الاحتقاني.",
    },
    {
      tradeNameAr: "كونكور 5 بلس (30 قرص)",
      tradeNameEn: "Concor 5 Plus Tablets",
      genericName: "Bisoprolol + Hydrochlorothiazide",
      strength: "5 mg / 12.5 mg",
      dosageForm: "أقراص مغلفة",
      category: "أمراض القلب والضغط",
      officialPrice: 90.0,
      manufacturer: "Merck Serono",
      isShortage: true,
      requiresPrescription: true,
      alternatives: JSON.stringify(["Biso-Plus 5/12.5", "Lodoz 5/6.25", "Bisoratio Plus"]),
      description: "علاج مركب لتنظيم ضغط الدم المرتفع وضربات القلب.",
    },
  ];

  // Upsert all shortage medicines
  const createdMedicines = [];
  for (const m of shortageData) {
    let med = await prisma.medicine.findFirst({
      where: {
        OR: [
          { tradeNameAr: m.tradeNameAr },
          { tradeNameEn: m.tradeNameEn },
        ],
      },
    });

    if (med) {
      med = await prisma.medicine.update({
        where: { id: med.id },
        data: m,
      });
    } else {
      med = await prisma.medicine.create({
        data: m,
      });
    }
    createdMedicines.push(med);
  }
  console.log(`✅ Upserted ${createdMedicines.length} shortage medicines!`);

  // Ensure Dr. Samir & Dr. Ramon pharmacies have stocks for these items
  const samir = await prisma.pharmacy.findUnique({ where: { slug: "dr-samir-hadayek-el-qobba" } });
  const ramon = await prisma.pharmacy.findUnique({ where: { slug: "dr-ramon-tanta" } });
  const amal = await prisma.pharmacy.findUnique({ where: { slug: "al-amal-cairo" } });

  const pharmacies = [samir, ramon, amal].filter(Boolean);

  for (const p of pharmacies) {
    if (!p) continue;
    // Give each pharmacy a randomized stock between 3 and 15 boxes of each shortage medicine
    for (let i = 0; i < createdMedicines.length; i++) {
      const med = createdMedicines[i];
      // Dr Samir has Eltroxin, Clexane, Ventolin, Concor, Ozempic
      const stock = (i % 2 === 0 || p.slug === "dr-samir-hadayek-el-qobba") ? Math.floor(Math.random() * 8) + 2 : 0;

      await prisma.pharmacyInventory.upsert({
        where: {
          pharmacyId_medicineId: {
            pharmacyId: p.id,
            medicineId: med.id,
          },
        },
        update: {
          stockQuantity: stock,
          isAvailable: stock > 0,
          price: med.officialPrice,
        },
        create: {
          pharmacyId: p.id,
          medicineId: med.id,
          stockQuantity: stock,
          isAvailable: stock > 0,
          price: med.officialPrice,
        },
      });
    }
  }
  console.log("✅ Stocked pharmacies with real shortage inventory!");

  // Seed sample real-time patient shortage requests for ticker
  const sampleRequests = [
    {
      customerName: "أ/ محمود فهمي",
      customerPhone: "01018671000",
      customerCity: "حدائق القبة",
      governorate: "القاهرة",
      medicineName: "كلكسان 40 مجم (عاجل لحالة حمل حرج)",
      status: "FOUND",
      urgency: "HIGH",
    },
    {
      customerName: "د/ منى عبد العزيز",
      customerPhone: "01289439659",
      customerCity: "حدائق القبة",
      governorate: "القاهرة",
      medicineName: "إلتروكسين 100 ميكروجرام",
      status: "RESERVED",
      urgency: "MEDIUM",
    },
    {
      customerName: "م/ أحمد الشناوي",
      customerPhone: "0102557727",
      customerCity: "طنطا",
      governorate: "الغربية",
      medicineName: "أوزمبيك 1 مجم قلم",
      status: "PENDING",
      urgency: "HIGH",
    },
    {
      customerName: "الحاج إبراهيم الدسوقي",
      customerPhone: "01122334455",
      customerCity: "طنطا",
      governorate: "الغربية",
      medicineName: "بخاخ فينتولين للصدر 100 ميكرو",
      status: "FOUND",
      urgency: "HIGH",
    },
    {
      customerName: "أ/ سارة النجار",
      customerPhone: "01008657085",
      customerCity: "مدينة نصر",
      governorate: "القاهرة",
      medicineName: "ديباكين كرونو 500 مجم",
      status: "PENDING",
      urgency: "HIGH",
    },
  ];

  for (const req of sampleRequests) {
    const existing = await prisma.shortageRequest.findFirst({
      where: { medicineName: req.medicineName },
    });
    if (!existing) {
      await prisma.shortageRequest.create({
        data: {
          medicineName: req.medicineName,
          customerCity: req.customerCity,
          governorate: req.governorate,
          urgency: req.urgency,
          status: req.status,
          customer: {
            create: {
              name: req.customerName,
              phone: req.customerPhone,
              city: req.customerCity,
            },
          },
        },
      });
    }
  }
  console.log("✅ Seeded live nationwide shortage requests ticker!");

  console.log("🎉 Radar Shortages Database successfully enriched!");
}

main()
  .catch((e) => {
    console.error("Error seeding shortages:", e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
