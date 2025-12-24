import { NextRequest, NextResponse } from "next/server";
import {
  ContactFormData,
  ContactApiResponse,
  validateContactForm,
  hasErrors,
} from "@/lib/validations/contact";
import { appendToGoogleSheet } from "@/lib/google-sheets";

// Rate limiting - simple in-memory store (for production, use Redis)
const rateLimit = new Map<string, { count: number; timestamp: number }>();
const RATE_LIMIT_WINDOW = 60 * 1000; // 1 minute
const RATE_LIMIT_MAX = 5; // Max 5 requests per minute per IP

function checkRateLimit(ip: string): boolean {
  const now = Date.now();
  const record = rateLimit.get(ip);

  if (!record || now - record.timestamp > RATE_LIMIT_WINDOW) {
    rateLimit.set(ip, { count: 1, timestamp: now });
    return true;
  }

  if (record.count >= RATE_LIMIT_MAX) {
    return false;
  }

  record.count++;
  return true;
}

export async function POST(request: NextRequest): Promise<NextResponse<ContactApiResponse>> {
  try {
    // Get client IP for rate limiting
    const ip = request.headers.get("x-forwarded-for") ||
      request.headers.get("x-real-ip") ||
      "unknown";

    // Check rate limit
    if (!checkRateLimit(ip)) {
      return NextResponse.json(
        {
          success: false,
          message: "Bạn đã gửi quá nhiều yêu cầu. Vui lòng thử lại sau 1 phút.",
        },
        { status: 429 }
      );
    }

    // Parse request body
    const body = await request.json();
    const formData: ContactFormData = {
      name: body.name || "",
      jobTitle: body.jobTitle || "",
      currentJob: body.currentJob || "",
      phone: body.phone || "",
      fanpageOrWebsite: body.fanpageOrWebsite || "",
      budget: body.budget || "",
      serviceCategory: body.serviceCategory || "",
      specificServices: body.specificServices || [],
      message: body.message || "",
    };

    // Server-side validation
    const validationErrors = validateContactForm(formData);
    if (hasErrors(validationErrors)) {
      return NextResponse.json(
        {
          success: false,
          message: "Vui lòng kiểm tra lại thông tin đã nhập.",
          errors: validationErrors,
        },
        { status: 400 }
      );
    }

    // Check if Google Sheets is configured
    const isGoogleSheetsConfigured =
      process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL &&
      process.env.GOOGLE_PRIVATE_KEY &&
      process.env.GOOGLE_SPREADSHEET_ID;

    if (isGoogleSheetsConfigured) {
      // Save to Google Sheets
      try {
        await appendToGoogleSheet(formData);
      } catch (sheetError) {
        console.error("Google Sheets error:", sheetError);
        // Continue anyway - don't fail the request if sheets fails
      }
    } else {
      // Log form data for development
      console.log("Form submission received (Google Sheets not configured):");
      console.log(formData);
    }

    return NextResponse.json(
      {
        success: true,
        message: "Cảm ơn bạn đã liên hệ! Chúng tôi sẽ phản hồi trong 24 giờ.",
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Contact form error:", error);
    return NextResponse.json(
      {
        success: false,
        message: "Đã có lỗi xảy ra. Vui lòng thử lại sau.",
      },
      { status: 500 }
    );
  }
}

// Handle other HTTP methods
export async function GET(): Promise<NextResponse> {
  return NextResponse.json(
    { message: "Method not allowed" },
    { status: 405 }
  );
}
