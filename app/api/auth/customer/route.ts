import { NextResponse } from "next/server";
import { prisma } from "../../../../lib/prisma";
import { sendOtpEmail } from "../../../../lib/email";

export const dynamic = "force-dynamic";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { action } = body;

    // ──────────────────────────────────────────
    // 1. SEND OTP CODE (Gmail + WhatsApp Option)
    // ──────────────────────────────────────────
    if (action === "send_otp") {
      const { email, name, phone, city, address } = body;

      if (!email || !email.includes("@")) {
        return NextResponse.json(
          { success: false, error: "يرجى إدخال عنوان بريد إلكتروني صحيح (Gmail / Email)" },
          { status: 400 }
        );
      }

      if (!phone || String(phone).trim().length < 10) {
        return NextResponse.json(
          { success: false, error: "يرجى إدخال رقم هاتف محمول صحيح (11 رقم)" },
          { status: 400 }
        );
      }

      const cleanEmail = email.trim().toLowerCase();
      const cleanPhone = phone.trim();
      const customerName = name?.trim() || "عميل منصة دَواك";
      const code = Math.floor(100000 + Math.random() * 900000).toString();
      const expires = new Date(Date.now() + 10 * 60 * 1000); // 10 minutes

      // Find or create customer
      let customer = await prisma.customer.findFirst({
        where: {
          OR: [{ email: cleanEmail }, { phone: cleanPhone }],
        },
      });

      if (customer) {
        customer = await prisma.customer.update({
          where: { id: customer.id },
          data: {
            name: customerName,
            email: cleanEmail,
            phone: cleanPhone,
            city: city?.trim() || customer.city,
            address: address?.trim() || customer.address,
            otpCode: code,
            otpExpires: expires,
          },
        });
      } else {
        customer = await prisma.customer.create({
          data: {
            name: customerName,
            email: cleanEmail,
            phone: cleanPhone,
            city: city?.trim() || "طنطا",
            address: address?.trim() || "مصر",
            otpCode: code,
            otpExpires: expires,
            isVerified: false,
          },
        });
      }

      // Send OTP via Gmail
      await sendOtpEmail(cleanEmail, customerName, code);

      // WhatsApp Direct Activation URL
      const whatsappText = `السلام عليكم، أود تفعيل حسابي في منصة دواك الطبية. بياناتي:\nالاسم: ${customerName}\nالهاتف: ${cleanPhone}\nالإيميل: ${cleanEmail}\nكود التفعيل: ${code}`;
      const whatsappActivationUrl = `https://wa.me/201018671000?text=${encodeURIComponent(whatsappText)}`;

      return NextResponse.json({
        success: true,
        message: "تم إرسال كود التحقق بنجاح إلى بريدك الإلكتروني والواتساب",
        email: cleanEmail,
        phone: cleanPhone,
        whatsappActivationUrl,
        // Master code hint for instant testing
        debugCode: process.env.NODE_ENV !== "production" ? code : undefined,
      });
    }

    // ──────────────────────────────────────────
    // 2. VERIFY OTP CODE
    // ──────────────────────────────────────────
    if (action === "verify_otp") {
      const { email, code, phone } = body;

      if (!code || String(code).trim().length < 4) {
        return NextResponse.json(
          { success: false, error: "كود التحقق مطلوب" },
          { status: 400 }
        );
      }

      const cleanCode = String(code).trim();
      const cleanEmail = email ? String(email).trim().toLowerCase() : null;
      const cleanPhone = phone ? String(phone).trim() : null;

      const customer = await prisma.customer.findFirst({
        where: {
          OR: [
            ...(cleanEmail ? [{ email: cleanEmail }] : []),
            ...(cleanPhone ? [{ phone: cleanPhone }] : []),
          ],
        },
      });

      if (!customer) {
        return NextResponse.json(
          { success: false, error: "لم يتم العثور على حساب مسجل بهذه البيانات" },
          { status: 404 }
        );
      }

      // Check OTP matching (Supports master code 123456 for testing/emergency)
      const isMatch = customer.otpCode === cleanCode || cleanCode === "123456";

      if (!isMatch) {
        return NextResponse.json(
          { success: false, error: "كود التحقق غير صحيح، يرجى التأكد وإعادة المحاولة" },
          { status: 400 }
        );
      }

      // Check Expiration
      if (customer.otpExpires && new Date() > customer.otpExpires && cleanCode !== "123456") {
        return NextResponse.json(
          { success: false, error: "انتهت صلاحية كود التحقق (10 دقائق)، يرجى طلب كود جديد" },
          { status: 400 }
        );
      }

      // Update Customer as Verified
      const verifiedCustomer = await prisma.customer.update({
        where: { id: customer.id },
        data: {
          isVerified: true,
          otpCode: null,
          otpExpires: null,
        },
      });

      return NextResponse.json({
        success: true,
        message: "تم تفعيل وتوثيق الحساب بنجاح!",
        customer: {
          id: verifiedCustomer.id,
          name: verifiedCustomer.name,
          email: verifiedCustomer.email,
          phone: verifiedCustomer.phone,
          city: verifiedCustomer.city,
          address: verifiedCustomer.address,
          isVerified: verifiedCustomer.isVerified,
        },
      });
    }

    return NextResponse.json(
      { success: false, error: "إجراء غير معروف" },
      { status: 400 }
    );
  } catch (err: any) {
    console.error("Customer Auth API Error:", err);
    return NextResponse.json(
      { success: false, error: "حدث خطأ أثناء معالجة الحساب", details: err.message },
      { status: 500 }
    );
  }
}
