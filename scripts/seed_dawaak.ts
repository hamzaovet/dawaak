import { prisma } from "../lib/prisma";

async function main() {
  console.log("🌱 Seeding Dawaak Database (المملكة الرقمية للصيدليات المصرية)...");

  // Clear existing data
  await prisma.order.deleteMany();
  await prisma.shortageRequest.deleteMany();
  await prisma.labReport.deleteMany();
  await prisma.prescription.deleteMany();
  await prisma.pharmacyInventory.deleteMany();
  await prisma.courier.deleteMany();
  await prisma.pharmacyStaff.deleteMany();
  await prisma.medicine.deleteMany();
  await prisma.customer.deleteMany();
  await prisma.pharmacy.deleteMany();

  console.log("Cleansed previous records.");

  // 1. Create Pharmacies (الشركاء المؤسسون)
  const p1 = await prisma.pharmacy.create({
    data: {
      slug: "dr-ramon-tanta",
      nameAr: "صيدلية د. رامون التخصصية",
      nameEn: "Dr. Ramon Specialty Pharmacy",
      licenseNumber: "LIC-GH-2024-8842",
      ownerName: "د. رامون فهمي",
      phone: "0403324567",
      whatsapp: "01018671000",
      address: "طنطا — تقاطع شارع البحر مع شارع النحاس، أمام مستشفى الجامعة",
      city: "طنطا",
      governorate: "الغربية",
      lat: 30.7865,
      lng: 31.0004,
      logoUrl: "https://images.unsplash.com/photo-1587854692152-cbe660dbde88?w=300",
      rating: 4.9,
      isOpen: true,
      deliveryAvailable: true,
      deliveryFee: 15.0,
      deliveryTimeEstimate: "20 - 35 دقيقة",
      workingHours: "24 ساعة / خدمة ليلية عاجلة",
      subscriptionPlan: "ENTERPRISE",
    },
  });

  const p2 = await prisma.pharmacy.create({
    data: {
      slug: "al-amal-cairo",
      nameAr: "صيدليات الأمل الحديثة",
      nameEn: "Al-Amal Modern Pharmacies",
      licenseNumber: "LIC-CA-2023-1120",
      ownerName: "د. أحمد عبد الرحمن",
      phone: "0222718899",
      whatsapp: "01008657085",
      address: "القاهرة — مدينة نصر، شارع عباس العقاد بجوار جنينة مول",
      city: "مدينة نصر",
      governorate: "القاهرة",
      lat: 30.0561,
      lng: 31.3412,
      logoUrl: "https://images.unsplash.com/photo-1631549916768-4119b2e5f926?w=300",
      rating: 4.8,
      isOpen: true,
      deliveryAvailable: true,
      deliveryFee: 25.0,
      deliveryTimeEstimate: "30 - 45 دقيقة",
      workingHours: "من 8 صباحاً حتى 2 بعد منتصف الليل",
      subscriptionPlan: "PRO",
    },
  });

  const p3 = await prisma.pharmacy.create({
    data: {
      slug: "al-nour-mansoura",
      nameAr: "صيدلية النور الكبرى",
      nameEn: "Al-Nour Grand Pharmacy",
      licenseNumber: "LIC-DK-2025-4512",
      ownerName: "د. محمد المهدي",
      phone: "0502234981",
      whatsapp: "0102557727",
      address: "المنصورة — شارع الجمهورية، أمام كلية الطب",
      city: "المنصورة",
      governorate: "الدقهلية",
      lat: 31.0409,
      lng: 31.3785,
      logoUrl: "https://images.unsplash.com/photo-1576602976047-174e57a47881?w=300",
      rating: 4.95,
      isOpen: true,
      deliveryAvailable: true,
      deliveryFee: 20.0,
      deliveryTimeEstimate: "25 - 40 دقيقة",
      workingHours: "24 ساعة يومياً",
      subscriptionPlan: "ENTERPRISE",
    },
  });

  // 2. Pharmacy Staff
  await prisma.pharmacyStaff.createMany({
    data: [
      {
        pharmacyId: p1.id,
        name: "د. رامون فهمي",
        username: "ramon",
        password: "password123",
        role: "manager",
        phone: "01018671000",
      },
      {
        pharmacyId: p1.id,
        name: "د. هبة الشناوي",
        username: "pharmacist_tanta",
        password: "password123",
        role: "pharmacist",
        phone: "01099887766",
      },
      {
        pharmacyId: p2.id,
        name: "د. أحمد عبد الرحمن",
        username: "amal_cairo",
        password: "password123",
        role: "manager",
        phone: "01008657085",
      },
    ],
  });

  // 3. Couriers (طيارين الدليفري)
  await prisma.courier.createMany({
    data: [
      {
        pharmacyId: p1.id,
        name: "كابتن محمود صقر (موتوسيكل)",
        phone: "01011223344",
        vehicleType: "motorcycle",
        isAvailable: true,
        totalOrders: 142,
      },
      {
        pharmacyId: p1.id,
        name: "كابتن إبراهيم فهد (سكوتر)",
        phone: "01122334455",
        vehicleType: "motorcycle",
        isAvailable: true,
        totalOrders: 98,
      },
      {
        pharmacyId: p2.id,
        name: "كابتن شريف فتحي",
        phone: "01233445566",
        vehicleType: "car",
        isAvailable: true,
        totalOrders: 65,
      },
    ],
  });

  // 4. Customers
  const c1 = await prisma.customer.create({
    data: {
      name: "أ/ محمود شلبي",
      phone: "01018671000",
      city: "طنطا",
      address: "شارع سعيد، عمارة برج الأطباء، شقة 4",
      allergies: "حساسية شديدة من البنسلين ومشتقاته",
      chronicDiseases: "ارتفاع ضغط الدم، السكري النوع الثاني",
      totalOrders: 8,
    },
  });

  const c2 = await prisma.customer.create({
    data: {
      name: "مدام سميرة الكردي",
      phone: "01008657085",
      city: "مدينة نصر",
      address: "شارع مكرم عبيد، بجوار مسجد بلال",
      chronicDiseases: "قصور الغدة الدرقية (تتابع التروكسين)",
      totalOrders: 5,
    },
  });

  // 5. Master Egyptian Drug Catalog (الأدوية + النواقص الحقيقية + البدائل)
  const medicinesData = [
    // --- CRITICAL SHORTAGES (نواقص السوق المصري الحارة) ---
    {
      tradeNameAr: "إلتروكسين 100 ميكروجرام (50 قرص)",
      tradeNameEn: "Eltroxin 100 mcg Tablets",
      genericName: "Levothyroxine Sodium",
      strength: "100 mcg",
      dosageForm: "أقراص",
      category: "أدوية الغدة والهرمونات",
      officialPrice: 125.0,
      manufacturer: "Aspen / GlaxoSmithKline",
      isShortage: true,
      requiresPrescription: true,
      alternatives: JSON.stringify(["يوثيروكس 100 ميكروجرام", "ليفوثيروكسين جلاكسو", "ثيروكسين"]),
      description: "علاج قصور وإفرازات الغدة الدرقية وتنظيم الهرمون البديل.",
    },
    {
      tradeNameAr: "إلتروكسين 50 ميكروجرام (50 قرص)",
      tradeNameEn: "Eltroxin 50 mcg Tablets",
      genericName: "Levothyroxine Sodium",
      strength: "50 mcg",
      dosageForm: "أقراص",
      category: "أدوية الغدة والهرمونات",
      officialPrice: 95.0,
      manufacturer: "Aspen / GlaxoSmithKline",
      isShortage: true,
      requiresPrescription: true,
      alternatives: JSON.stringify(["يوثيروكس 50 ميكروجرام"]),
      description: "تنظيم نشاط وإفرازات الغدة الدرقية.",
    },
    {
      tradeNameAr: "كلكسان 40 مجم حقن (حقنتين معبأة)",
      tradeNameEn: "Clexane 40 mg (0.4 ml) Syringes",
      genericName: "Enoxaparin Sodium",
      strength: "40 mg / 0.4 ml",
      dosageForm: "حقن تحت الجلد",
      category: "مضادات التجلط والسيولة",
      officialPrice: 285.0,
      manufacturer: "Sanofi Aventis",
      isShortage: true,
      requiresPrescription: true,
      alternatives: JSON.stringify(["إينوكسارين 40", "كليركسا 40"]),
      description: "حقن لمنع التجلطات وتخثر الدم وخاصة لحالات الحمل وما بعد الجراحات.",
    },
    {
      tradeNameAr: "أوزمبيك 1 مجم قلم معبأ للحقن",
      tradeNameEn: "Ozempic 1 mg Solution for Injection",
      genericName: "Semaglutide",
      strength: "1 mg / dose",
      dosageForm: "قلم حقن أسبوعي",
      category: "أدوية السكر والتنحيف",
      officialPrice: 4200.0,
      manufacturer: "Novo Nordisk",
      isShortage: true,
      requiresPrescription: true,
      alternatives: JSON.stringify(["مونجارو 5 مجم", "ريبلسوس 14 مجم أقراص", "فيكتوزا"]),
      description: "تنظيم مستويات السكر في الدم وتحفيز إفراز الإنسولين والمساعدة على إنقاص الوزن.",
    },
    {
      tradeNameAr: "تيجريتول سي آر 200 مجم (30 قرص)",
      tradeNameEn: "Tegretol CR 200 mg Tablets",
      genericName: "Carbamazepine",
      strength: "200 mg",
      dosageForm: "أقراص ممتدة المفعول",
      category: "أدوية المخ والأعصاب",
      officialPrice: 85.0,
      manufacturer: "Novartis",
      isShortage: true,
      requiresPrescription: true,
      alternatives: JSON.stringify(["كارباتول 200 مجم", "نيوروتول"]),
      description: "علاج نوبات الصرع وآلام العصب الخامس والاضطرابات العصبية.",
    },
    {
      tradeNameAr: "بخاخ فينتولين للصدر 100 ميكروجرام",
      tradeNameEn: "Ventolin Inhaler 100 mcg",
      genericName: "Salbutamol",
      strength: "100 mcg / dose",
      dosageForm: "بخاخ استنشاق",
      category: "أمراض الصدر والحساسية",
      officialPrice: 75.0,
      manufacturer: "GSK",
      isShortage: true,
      requiresPrescription: false,
      alternatives: JSON.stringify(["بيوتالين بخاخ", "فار كولين بخاخ"]),
      description: "موسع فوري للشعب الهوائية ونوبات الربو وضيق التنفس الحاد.",
    },

    // --- ANTIBIOTICS (المضادات الحيوية واسعة المجال) ---
    {
      tradeNameAr: "أوجمنتين 1 جم (14 قرص)",
      tradeNameEn: "Augmentin 1g Tablets",
      genericName: "Amoxicillin + Clavulanic Acid",
      strength: "1000 mg",
      dosageForm: "أقراص",
      category: "مضادات حيوية",
      officialPrice: 155.0,
      manufacturer: "GlaxoSmithKline (GSK)",
      isShortage: false,
      requiresPrescription: true,
      alternatives: JSON.stringify(["كلافيموكس 1 جم", "هاي بيوتك 1 جم", "إيموكسكلاف 1 جم", "كيورام 1 جم"]),
      description: "مضاد حيوي واسع المجال لعلاج التهابات الجهاز التنفسي والجيوب الأنفية والأسنان.",
    },
    {
      tradeNameAr: "كيورام 1 جم (12 قرص)",
      tradeNameEn: "Curam 1g Tablets",
      genericName: "Amoxicillin + Clavulanic Acid",
      strength: "1000 mg",
      dosageForm: "أقراص",
      category: "مضادات حيوية",
      officialPrice: 135.0,
      manufacturer: "Sandoz",
      isShortage: false,
      requiresPrescription: true,
      alternatives: JSON.stringify(["أوجمنتين 1 جم", "هاي بيوتك 1 جم"]),
      description: "مضاد حيوي للعدوى البكتيرية والمسالك البولية والأسنان.",
    },
    {
      tradeNameAr: "سيبروفار 500 مجم (10 أقراص)",
      tradeNameEn: "Ciprofar 500 mg Tablets",
      genericName: "Ciprofloxacin",
      strength: "500 mg",
      dosageForm: "أقراص",
      category: "مضادات حيوية",
      officialPrice: 58.0,
      manufacturer: "Pharco",
      isShortage: false,
      requiresPrescription: true,
      alternatives: JSON.stringify(["سيبروسين 500", "سيبروباي 500"]),
      description: "علاج التهابات المسالك البولية والمغص الكلوي والبكتيريا المعوية.",
    },

    // --- CHRONIC - HYPERTENSION & CARDIAC (الضغط والقلب) ---
    {
      tradeNameAr: "كونكور 5 مجم (30 قرص)",
      tradeNameEn: "Concor 5 mg Tablets",
      genericName: "Bisoprolol Fumarate",
      strength: "5 mg",
      dosageForm: "أقراص",
      category: "أدوية الضغط والقلب",
      officialPrice: 140.0,
      manufacturer: "Merck / Amoun",
      isShortage: false,
      requiresPrescription: true,
      alternatives: JSON.stringify(["بيسولوك 5 مجم", "لودوز 5 مجم", "بيستول 5"]),
      description: "تنظيم ضربات القلب وخفض ضغط الدم المرتفع وتقليل إجهاد عضلة القلب.",
    },
    {
      tradeNameAr: "إكسفورج 5/160 مجم (28 قرص)",
      tradeNameEn: "Exforge 5/160 mg Tablets",
      genericName: "Amlodipine + Valsartan",
      strength: "5/160 mg",
      dosageForm: "أقراص",
      category: "أدوية الضغط والقلب",
      officialPrice: 320.0,
      manufacturer: "Novartis",
      isShortage: false,
      requiresPrescription: true,
      alternatives: JSON.stringify(["أمفيلسار 5/160", "فالسارتان إكسترا"]),
      description: "علاج ضغط الدم المرتفع المركب وتوسيع الأوعية الدموية.",
    },

    // --- CHRONIC - DIABETES (السكري) ---
    {
      tradeNameAr: "جلوكوفاج 1000 مجم (30 قرص)",
      tradeNameEn: "Glucophage 1000 mg XR",
      genericName: "Metformin Hydrochloride",
      strength: "1000 mg",
      dosageForm: "أقراص ممتدة المفعول",
      category: "أدوية السكر",
      officialPrice: 85.0,
      manufacturer: "Merck",
      isShortage: false,
      requiresPrescription: true,
      alternatives: JSON.stringify(["سيدوفاج 1000", "ميتفورمين إيفا"]),
      description: "تحسين حساسية الإنسولين وخفض مستويات سكر الدم لدى مرضى السكري النوع 2.",
    },

    // --- PAIN & FEVER (المسكنات والحرارة) ---
    {
      tradeNameAr: "بانادول إكسترا (24 قرص)",
      tradeNameEn: "Panadol Extra Tablets",
      genericName: "Paracetamol + Caffeine",
      strength: "500 mg + 65 mg",
      dosageForm: "أقراص",
      category: "مسكنات وخافض حرارة",
      officialPrice: 65.0,
      manufacturer: "Haleon / GSK",
      isShortage: false,
      requiresPrescription: false,
      alternatives: JSON.stringify(["سيتال إكسترا", "بارامول إكسترا", "أدول إكسترا"]),
      description: "تسكين آلام الصداع، الأسنان، العضلات وخفض الحرارة بدون التهاب للمعدة.",
    },
    {
      tradeNameAr: "كيتوفان 100 مجم (30 كبسولة)",
      tradeNameEn: "Ketofan 100 mg Capsules",
      genericName: "Ketoprofen",
      strength: "100 mg",
      dosageForm: "كبسولات",
      category: "مسكنات ومضادات التهاب",
      officialPrice: 48.0,
      manufacturer: "Amoun",
      isShortage: false,
      requiresPrescription: false,
      alternatives: JSON.stringify(["باي ألكوفان 150", "بروفين 600", "كتافلام 50"]),
      description: "مضاد للالتهاب ومسكن قوي لآلام العظام والمفاصل والفقرات.",
    },
    {
      tradeNameAr: "كتافلام 50 مجم (20 قرص)",
      tradeNameEn: "Cataflam 50 mg Tablets",
      genericName: "Diclofenac Potassium",
      strength: "50 mg",
      dosageForm: "أقراص سريعة الامتصاص",
      category: "مسكنات ومضادات التهاب",
      officialPrice: 66.0,
      manufacturer: "Novartis",
      isShortage: false,
      requiresPrescription: false,
      alternatives: JSON.stringify(["ديكلاك 75", "فولتارين 50", "روفيناك"]),
      description: "مسكن سريع لآلام الأسنان والصداع النصفي وتقلصات الدورة الشهرية.",
    },

    // --- GASTROINTESTINAL (المعدة والجهاز الهضمي) ---
    {
      tradeNameAr: "كونترولوك 40 مجم (28 قرص)",
      tradeNameEn: "Controloc 40 mg Tablets",
      genericName: "Pantoprazole",
      strength: "40 mg",
      dosageForm: "أقراص مقاومة لإفراز الحمض",
      category: "أدوية المعدة والجهاز الهضمي",
      officialPrice: 215.0,
      manufacturer: "Takeda",
      isShortage: false,
      requiresPrescription: false,
      alternatives: JSON.stringify(["زوركال 40", "بانتوزول 40", "بروتوفكس 40"]),
      description: "علاج قرحة المعدة والارتجاع المريئي وحرقان فم المعدة المزمن.",
    },
    {
      tradeNameAr: "أنتينال (24 كبسولة)",
      tradeNameEn: "Antinal 200 mg Capsules",
      genericName: "Nifuroxazide",
      strength: "200 mg",
      dosageForm: "كبسولات",
      category: "أدوية المعدة والجهاز الهضمي",
      officialPrice: 42.0,
      manufacturer: "Amoun",
      isShortage: false,
      requiresPrescription: false,
      alternatives: JSON.stringify(["دياكس 200", "إنتيروفوريل"]),
      description: "مطهر معوي واسع المدى لعلاج النزلات المعوية والإسهال.",
    },

    // --- VITAMINS & DIETARY (الفيتامينات والمكملات) ---
    {
      tradeNameAr: "نيوروتون (30 قرص)",
      tradeNameEn: "Neuroton Tablets",
      genericName: "Vitamin B Complex (B1, B2, B6, B12) + Folic Acid",
      strength: "High Potency",
      dosageForm: "أقراص",
      category: "فيتامينات ومكملات غذائية",
      officialPrice: 75.0,
      manufacturer: "Amoun",
      isShortage: false,
      requiresPrescription: false,
      alternatives: JSON.stringify(["ميلجا أدفانس", "تراي بي", "نيوروفيت"]),
      description: "تقوية الأعصاب الطرفية وعلاج تنميل الأطراف لمرضى السكري والإرهاق العام.",
    },
    {
      tradeNameAr: "فيروجلوبين ب12 (30 كبسولة)",
      tradeNameEn: "Feroglobin B12 Capsules",
      genericName: "Iron + Zinc + B12 + Folic Acid",
      strength: "Gentle Iron",
      dosageForm: "كبسولات هادئة على المعدة",
      category: "فيتامينات ومكملات غذائية",
      officialPrice: 120.0,
      manufacturer: "Vitabiotics",
      isShortage: false,
      requiresPrescription: false,
      alternatives: JSON.stringify(["فيروترون", "إيزي آيرون", "ثرومبوبيوتين"]),
      description: "علاج فقر الدم والأنيميا ودعم الحوامل والنشاط اليومي ونضارة البشرة.",
    },
    {
      tradeNameAr: "أوميجا 3 بلس (30 كبسولة)",
      tradeNameEn: "Omega 3 Plus Capsules",
      genericName: "Fish Oil 1000 mg + Wheat Germ Oil",
      strength: "1000 mg",
      dosageForm: "كبسولات جيلاتينية",
      category: "فيتامينات ومكملات غذائية",
      officialPrice: 110.0,
      manufacturer: "SEDICO",
      isShortage: false,
      requiresPrescription: false,
      alternatives: JSON.stringify(["سوبر أوميجا", "أوميجا 3 فورت"]),
      description: "دعم صحة القلب والشرايين وخفض الدهون الثلاثية وتعزيز التركيز والذاكرة.",
    },

    // --- COSMETICS & DERMA (مستحضرات التجميل والعناية بالبشرة) ---
    {
      tradeNameAr: "صن بلوك لاروش بوزيه أنثيليوس 50+ (سائل خفيف 50 مل)",
      tradeNameEn: "La Roche-Posay Anthelios UVMune 400 SPF50+",
      genericName: "Broad Spectrum Sunscreen",
      strength: "SPF 50+",
      dosageForm: "Fluid 50ml",
      category: "مستحضرات تجميل وعناية",
      officialPrice: 780.0,
      manufacturer: "L'Oréal / La Roche-Posay",
      isShortage: false,
      requiresPrescription: false,
      alternatives: JSON.stringify(["بيوديرما فوتوديرم", "بوباي هيدروفيوم صن بلوك"]),
      description: "حماية فائقة من أشعة الشمس فوق البنفسجية لجميع أنواع البشرة بدون لمعان دهني.",
    },
    {
      tradeNameAr: "غسول ستارفيل للبشرة المعرضة للحبوب (250 مل)",
      tradeNameEn: "Starville Acne Facial Cleanser 250ml",
      genericName: "Tea Tree Oil + Salicylic Acid + Sulfur",
      strength: "250 ml",
      dosageForm: "غسول جل رغوي",
      category: "مستحضرات تجميل وعناية",
      officialPrice: 175.0,
      manufacturer: "Parkville Egypt",
      isShortage: false,
      requiresPrescription: false,
      alternatives: JSON.stringify(["سيرافي غسول رغوي", "توبي جنت غسول حب الشباب"]),
      description: "تنظيف المسام بعمق والتحكم في الإفرازات الدهنية ومكافحة حب الشباب والرؤوس السوداء.",
    },
  ];

  // Insert medicines
  const createdMedicines = [];
  for (const med of medicinesData) {
    const created = await prisma.medicine.create({ data: med });
    createdMedicines.push(created);
  }
  console.log(`✅ Seeded ${createdMedicines.length} Medicines in Master Catalog.`);

  // 6. Connect Inventory to Pharmacies
  // صيدلية طنطا عندها الأصناف العادية وجزء من النواقص
  for (const med of createdMedicines) {
    let stock = Math.floor(Math.random() * 25) + 3;
    // النواقص بتكون قليلة ومميزة
    if (med.isShortage) {
      if (med.tradeNameAr.includes("إلتروكسين 100")) {
        stock = 3; // متوفر 3 علب فقط في طنطا!
      } else if (med.tradeNameAr.includes("كلكسان")) {
        stock = 2; // متوفر حقنتين فقط!
      } else {
        stock = 0; // ناقص تماماً في هذه الصيدلية
      }
    }

    await prisma.pharmacyInventory.create({
      data: {
        pharmacyId: p1.id,
        medicineId: med.id,
        stockQuantity: stock,
        price: med.officialPrice,
        isAvailable: stock > 0,
        expiryDate: "2027-08",
      },
    });

    // صيدلية الأمل بالقاهرة عندها أوزمبيك وتيجريتول
    let stockCairo = Math.floor(Math.random() * 20) + 1;
    if (med.tradeNameAr.includes("أوزمبيك")) stockCairo = 2;
    if (med.tradeNameAr.includes("تيجريتول")) stockCairo = 4;

    await prisma.pharmacyInventory.create({
      data: {
        pharmacyId: p2.id,
        medicineId: med.id,
        stockQuantity: stockCairo,
        price: med.officialPrice,
        isAvailable: stockCairo > 0,
        expiryDate: "2027-11",
      },
    });
  }
  console.log("✅ Seeded Pharmacy Inventories.");

  // 7. Seed Active Shortage Requests (رادار النواقص الحقيقي)
  await prisma.shortageRequest.create({
    data: {
      customerId: c1.id,
      medicineName: "إلتروكسين 100 ميكروجرام أقراص",
      genericName: "Levothyroxine Sodium 100mcg",
      customerCity: "طنطا",
      governorate: "الغربية",
      quantityNeeded: 2,
      urgency: "CRITICAL",
      status: "FOUND",
      foundPharmacyId: p1.id,
      reservationExpiry: new Date(Date.now() + 3 * 3600 * 1000), // متبقي 3 ساعات حجز
      notes: "المريض يبحث عنه منذ 3 أسابيع وتم رصده في صيدلية د. رامون بطنطا.",
    },
  });

  await prisma.shortageRequest.create({
    data: {
      customerId: c2.id,
      medicineName: "كلكسان 40 مجم حقن سيولة",
      genericName: "Enoxaparin Sodium 40mg",
      customerCity: "مدينة نصر",
      governorate: "القاهرة",
      quantityNeeded: 4,
      urgency: "HIGH",
      status: "SEARCHING",
      notes: "حالة حمل حرجة تحتاج حقن السيولة فوراً، السيستم يبحث في محيط 15 كم.",
    },
  });

  // 8. Seed Sample Prescription
  await prisma.prescription.create({
    data: {
      customerId: c1.id,
      pharmacyId: p1.id,
      imageUrl: "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=500",
      doctorSpecialty: "باطنة وجهاز هضمي",
      parsedMedicines: JSON.stringify([
        {
          tradeName: "Augmentin 1g",
          genericName: "Amoxicillin + Clavulanic Acid",
          dosage: "1000 mg",
          frequency: "قرص كل 12 ساعة بعد الأكل",
          isAvailable: true,
        },
        {
          tradeName: "Controloc 40mg",
          genericName: "Pantoprazole",
          dosage: "40 mg",
          frequency: "قرص يومياً قبل الإفطار بنصف ساعة",
          isAvailable: true,
        },
      ]),
      status: "QUOTED",
      notes: "تم فك الروشتة وتأكيد توفر كافة البنود من مخزن الصيدلية.",
    },
  });

  // 9. Seed Sample Orders
  await prisma.order.create({
    data: {
      orderNumber: "DWK-8921",
      pharmacyId: p1.id,
      customerId: c1.id,
      customerName: "أ/ محمود شلبي",
      customerPhone: "01018671000",
      customerAddress: "طنطا — شارع سعيد، عمارة برج الأطباء، شقة 4",
      orderType: "DIRECT",
      items: JSON.stringify([
        { medicineId: createdMedicines[0].id, name: "أوجمنتين 1 جم", qty: 1, price: 155, total: 155 },
        { medicineId: createdMedicines[1].id, name: "بانادول إكسترا", qty: 2, price: 65, total: 130 },
      ]),
      subtotal: 285.0,
      deliveryFee: 15.0,
      totalAmount: 300.0,
      paymentMethod: "COD",
      status: "OUT_FOR_DELIVERY",
      notes: "العميل في انتظار الطيار كابتن محمود صقر.",
    },
  });

  console.log("🎉 Dawaak Database Seeding Complete Successfully!");
}

main()
  .catch((e) => {
    console.error("Seed error:", e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
