import path from 'path';
import fs from 'fs/promises';

export async function GET() {
  const directoryPath = path.join(process.cwd(), 'public/uploaded-files');

  try {
    const files = await fs.readdir(directoryPath);
    return new Response(JSON.stringify(files), {
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (err) {
    console.log(err);
    return new Response('Failed to read directory', { status: 500 });
  }
}
