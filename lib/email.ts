import nodemailer from "nodemailer";

function getTransporter() {
  const user = process.env.EMAIL_USER || "hamzaovet@gmail.com";
  const rawPass = process.env.EMAIL_PASS || "";
  const pass = rawPass.replace(/\s+/g, "");

  if (!pass) return null;

  return nodemailer.createTransport({
    service: "gmail",
    auth: { user, pass },
    connectionTimeout: 8000,
    greetingTimeout: 8000,
    socketTimeout: 10000,
  });
}

export async function sendOtpEmail(
  to: string,
  name: string,
  code: string
): Promise<{ success: boolean; error?: string }> {
  try {
    const transporter = getTransporter();
    if (!transporter) {
      console.warn("⚠️ [Dawaak Email] EMAIL_PASS not configured. Dev code:", code);
      return { success: true };
    }

    const fromAddress = `"دَواك — Dawaak 💊" <${process.env.EMAIL_USER || "hamzaovet@gmail.com"}>`;

    const htmlContent = `
      <!DOCTYPE html>
      <html dir="rtl" lang="ar">
      <head>
        <meta charset="utf-8">
        <style>
          body { font-family: 'Cairo', system-ui, -apple-system, sans-serif; background-color: #060b13; color: #f8fafc; margin: 0; padding: 24px; }
          .container { max-width: 520px; margin: 0 auto; background: #0c1424; border: 2px solid #10b981; border-radius: 28px; padding: 40px 28px; text-align: center; box-shadow: 0 10px 40px rgba(0, 0, 0, 0.6); }
          .logo { color: #10b981; font-size: 32px; font-weight: 900; margin-bottom: 4px; letter-spacing: -0.5px; }
          .sub { color: #94a3b8; font-size: 13px; margin-bottom: 28px; font-weight: 700; }
          .greeting { color: #f8fafc; font-size: 20px; font-weight: 800; margin: 0 0 12px 0; }
          .otp-box { background: #060b13; border: 2px dashed #10b981; border-radius: 20px; padding: 20px; margin: 26px 0; font-size: 42px; font-weight: 900; letter-spacing: 10px; color: #34d399; font-family: monospace; }
          .info { color: #cbd5e1; font-size: 13px; line-height: 1.7; }
          .wa-btn { display: inline-block; margin-top: 18px; padding: 12px 24px; background: #059669; color: #ffffff; text-decoration: none; border-radius: 14px; font-weight: 800; font-size: 13px; }
          .footer { margin-top: 32px; font-size: 11px; color: #64748b; border-top: 1px solid #1e293b; padding-top: 18px; line-height: 1.6; }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="logo">دَواك — Dawaak 💊</div>
          <div class="sub">المنظومة الوطنية للرعاية الصيدلانية الذكية ورادار النواقص في مصر</div>
          
          <h2 class="greeting">أهلاً بك يا ${name || "عميلنا العزيز"} 👋</h2>
          <p class="info">استخدم كود التحقق السري التالي لتأكيد وتفعيل حسابك الرسمي في منصة دواك:</p>

          <div class="otp-box">${code}</div>

          <p class="info">⚠️ هذا الرمز صالح للاستخدام لمدة 10 دقائق فقط. لا تشارك هذا الرمز مع أي شخص حفاظاً على خصوصية بياناتك الطبية.</p>

          <a href="https://wa.me/201018671000?text=${encodeURIComponent(
            `السلام عليكم، أود تفعيل حسابي في دواك برمز التحقق: ${code}`
          )}" class="wa-btn">
            أو اضغط هنا للتفعيل الفوري عبر واتساب 💬
          </a>

          <div class="footer">
            تم إرسال هذا البريد آلياً من خوادم منصة دَواك (Dawaak Cloud Security)<br/>
            خط الطوارئ الصيدلاني 24/7: 01018671000 | مصر
          </div>
        </div>
      </body>
      </html>
    `;

    await transporter.sendMail({
      from: fromAddress,
      to,
      subject: `💊 كود تفعيل حسابك في دَواك: [ ${code} ]`,
      html: htmlContent,
    });

    return { success: true };
  } catch (err: any) {
    console.error("sendOtpEmail Error:", err);
    return { success: false, error: err.message };
  }
}
