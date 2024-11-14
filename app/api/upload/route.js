import { NextResponse } from 'next/server';
import formidable from 'formidable';
import path from 'path';
import fs from 'fs/promises';


export async function POST(req) {
  const form = new formidable.IncomingForm({
    uploadDir: path.join(process.cwd(), 'public/uploaded-files'),
    keepExtensions: true,
  });

  return new Promise((resolve, reject) => {
    form.parse(req, async (err, fields, files) => {
      if (err) {
        reject(new NextResponse('Error while uploading', { status: 500 }));
      }
      resolve(new NextResponse('File uploaded successfully', { status: 200 }));
    });
  });
}
