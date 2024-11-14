import path from 'path';
import { promises as fs } from 'fs';

export async function GET(req) {
  const url = new URL(req.url);
  const filename = url.searchParams.get('filename');
  const filePath = path.join(process.cwd(), 'public/uploaded-files', filename);

  try {
    const file = await fs.readFile(filePath);
    return new Response(file, {
      headers: {
        'Content-Disposition': `attachment; filename="${filename}"`,
        'Content-Type': 'application/octet-stream',
      },
    });
  } catch (err) {
    return new Response('File not found', { status: 404 });
  }
}
