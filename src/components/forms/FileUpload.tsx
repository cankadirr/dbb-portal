// src/components/forms/FileUpload.tsx
import React, { useState } from "react";

interface FileUploadProps {
  onUpload: (file: File) => void;
}

export const FileUpload: React.FC<FileUploadProps> = ({ onUpload }) => {
  const [fileName, setFileName] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      const file = e.target.files[0];
      setFileName(file.name);
      onUpload(file);
    }
  };

  return (
    <div>
      <label className="block mb-2 font-semibold">Dosya Yükle</label>
      <input type="file" onChange={handleChange} />
      {fileName && <p className="mt-2 text-sm text-gray-600">Seçilen dosya: {fileName}</p>}
    </div>
  );
};
