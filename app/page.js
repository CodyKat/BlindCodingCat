'use client';
import { useState, useEffect } from 'react';

export default function Home() {
  const [file, setFile] = useState(null);
  const [fileList, setFileList] = useState([]);

  useEffect(() => {
    // 서버에서 파일 목록을 가져옴
    const fetchFileList = async () => {
      const response = await fetch('/api/files');
      const data = await response.json();
      setFileList(data);
    };

    fetchFileList();
  }, []);

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleUpload = async () => {
    const formData = new FormData();
    formData.append('file', file);

    const response = await fetch('/api/upload', {
      method: 'POST',
      body: formData,
    });

    if (response.ok) {
      alert('File uploaded successfully!');
      // 파일 업로드 후 목록 새로고침
      const updatedResponse = await fetch('/api/files');
      const updatedData = await updatedResponse.json();
      setFileList(updatedData);
    } else {
      alert('File upload failed.');
    }
  };

  return (
    <div>
      <input type="file" onChange={handleFileChange} />
      <button onClick={handleUpload}>Upload</button>
      
      <h2>Available Files for Download</h2>
      <ul>
        {fileList.map((filename, index) => (
          <li key={index}>
            <a href={`/api/download?filename=${filename}`} download>
              {filename}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
