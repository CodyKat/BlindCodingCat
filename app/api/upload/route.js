import { NextResponse } from 'next/server';
import path from 'path';
import { IncomingForm } from 'formidable';



export async function POST(req) {
    const form = new IncomingForm({
        uploadDir: path.join(process.cwd(), 'public/uploaded-files'),
        keepExtensions: true,
      });

  return new Promise((resolve, reject) => {
    form.parse(req, async (err) => {
      if (err) {
        reject(new NextResponse('Error while uploading', { status: 500 }));
      }
      resolve(new NextResponse('File uploaded successfully', { status: 200 }));
    });
  });
}
