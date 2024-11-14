import { IncomingForm } from 'formidable';

const form = new IncomingForm({
  uploadDir: path.join(process.cwd(), 'public/uploaded-files'),
  keepExtensions: true,
});

form.parse(req, (err, fields, files) => {
  if (err) {
    console.error('File parsing error:', err);
    return res.status(500).send('Error during file upload.');
  }
  // Handle the fields and files
  res.status(200).json({ fields, files });
});
