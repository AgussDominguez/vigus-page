import { NextResponse } from 'next/server';
import { google } from 'googleapis';

const auth = new google.auth.GoogleAuth({
    credentials: {
        client_email: process.env.GOOGLE_CLIENT_EMAIL,
        private_key: process.env.GOOGLE_PRIVATE_KEY?.replace(/\\n/g, '\n'),
    },
    scopes: ['https://www.googleapis.com/auth/spreadsheets.readonly'],
});

export async function GET() {
    try {
        const sheets = google.sheets({ version: 'v4', auth });

        const res = await sheets.spreadsheets.values.get({
            spreadsheetId: process.env.GOOGLE_SHEET_ID!,
            range: 'A2:E', // Columns: name, description, price, image, category
        });

        const rows = res.data.values || [];

        const products = rows.map((row, index) => {
            const category = (row[4] || '').trim(); // Category is now the 5th column (index 4)

            return {
                id: (index + 2).toString(), // Using row number as ID
                name: row[0] || 'Producto sin nombre',
                description: row[1] || '', // Description is the 2nd column
                price: row[2]
                    ? (() => {
                        const clean = row[2].toString()
                            .replace(/[$\s]/g, '') // remove $ and spaces
                            .replace(/\./g, '')    // remove thousands separator
                            .replace(/,/g, '.');   // replace decimal separator
                        const num = Number(clean);
                        return isNaN(num) ? null : num;
                    })()
                    : null,
                category: category,
                images: {
                    primary: row[3] || '', // Image is the 4th column
                    hover: row[3] || '',
                },
            };
        });

        return NextResponse.json(products);
    } catch (error: any) {
        console.error('Google Sheets API Error:', error);
        return NextResponse.json(
            { error: 'Failed to fetch products' },
            { status: 500 }
        );
    }
}
