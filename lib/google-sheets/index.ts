// Google Sheets Integration Service
import { google } from "googleapis";
import { ContactFormData } from "@/lib/validations/contact";

// Service Account credentials from environment variables
const getGoogleSheetsClient = async () => {
  const credentials = {
    client_email: process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL,
    private_key: process.env.GOOGLE_PRIVATE_KEY?.replace(/\\n/g, "\n"),
  };

  if (!credentials.client_email || !credentials.private_key) {
    throw new Error("Missing Google Sheets credentials in environment variables");
  }

  const auth = new google.auth.GoogleAuth({
    credentials,
    scopes: ["https://www.googleapis.com/auth/spreadsheets"],
  });

  const sheets = google.sheets({ version: "v4", auth });
  return sheets;
};

// Get the first sheet name from the spreadsheet
const getFirstSheetName = async (
  sheets: Awaited<ReturnType<typeof getGoogleSheetsClient>>,
  spreadsheetId: string
): Promise<string> => {
  try {
    const response = await sheets.spreadsheets.get({
      spreadsheetId,
      fields: "sheets.properties.title",
    });

    const sheetName = response.data.sheets?.[0]?.properties?.title;
    if (!sheetName) {
      throw new Error("No sheets found in the spreadsheet");
    }
    return sheetName;
  } catch (error) {
    console.error("Error getting sheet name:", error);
    // Default fallback names to try
    return "Trang tính1"; // Vietnamese default sheet name
  }
};

export const appendToGoogleSheet = async (data: ContactFormData): Promise<void> => {
  const spreadsheetId = process.env.GOOGLE_SPREADSHEET_ID;

  if (!spreadsheetId) {
    throw new Error("Missing GOOGLE_SPREADSHEET_ID in environment variables");
  }

  const sheets = await getGoogleSheetsClient();

  // Get the actual sheet name
  const sheetName = await getFirstSheetName(sheets, spreadsheetId);

  // Format timestamp
  const timestamp = new Date().toLocaleString("vi-VN", {
    timeZone: "Asia/Ho_Chi_Minh",
  });

  // Prepare row data
  const values = [
    [
      timestamp,
      data.name,
      data.email,
      data.phone,
      data.company || "N/A",
      data.service,
      data.message,
      "Pending", // Status column
    ],
  ];

  try {
    await sheets.spreadsheets.values.append({
      spreadsheetId,
      range: `'${sheetName}'!A:H`, // Use actual sheet name with quotes
      valueInputOption: "USER_ENTERED",
      requestBody: {
        values,
      },
    });
    console.log("Successfully appended to Google Sheets");
  } catch (error) {
    console.error("Error appending to Google Sheets:", error);
    throw new Error("Failed to save data to Google Sheets");
  }
};

// Initialize sheet with headers if needed
export const initializeSheet = async (): Promise<void> => {
  const spreadsheetId = process.env.GOOGLE_SPREADSHEET_ID;

  if (!spreadsheetId) {
    throw new Error("Missing GOOGLE_SPREADSHEET_ID");
  }

  const sheets = await getGoogleSheetsClient();
  const sheetName = await getFirstSheetName(sheets, spreadsheetId);

  const headers = [
    ["Timestamp", "Name", "Email", "Phone", "Company", "Service", "Message", "Status"],
  ];

  try {
    // Check if headers exist
    const response = await sheets.spreadsheets.values.get({
      spreadsheetId,
      range: `'${sheetName}'!A1:H1`,
    });

    if (!response.data.values || response.data.values.length === 0) {
      // Add headers if they don't exist
      await sheets.spreadsheets.values.update({
        spreadsheetId,
        range: `'${sheetName}'!A1:H1`,
        valueInputOption: "USER_ENTERED",
        requestBody: {
          values: headers,
        },
      });
    }
  } catch (error) {
    console.error("Error initializing sheet:", error);
  }
};

