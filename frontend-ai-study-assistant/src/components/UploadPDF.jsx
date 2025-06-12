// src/components/UploadPDF.jsx
import React, { useState } from "react";
import { useNavigate } from "@tanstack/react-router";

export default function UploadPDF() {
  const [files, setFiles] = useState([]);
  const [uploading, setUploading] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFiles(Array.from(e.target.files));
  };

  const handleUpload = async () => {
    if (files.length === 0) return;

    const formData = new FormData();
    files.forEach((file) => formData.append("files", file));

    try {
      setUploading(true);
      const response = await fetch("http://localhost:8000/process-pdfs", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();
      if (data.uuid) {
        localStorage.setItem("currentUUID", data.uuid);
        navigate({ to: "/summary" });
      }
    } catch (error) {
      console.error("Error al subir archivos:", error);
    } finally {
      setUploading(false);
    }
  };

  return (
    <div className="space-y-4">
      <input
        type="file"
        accept="application/pdf"
        multiple
        onChange={handleChange}
        className="block"
      />
      <button
        onClick={handleUpload}
        disabled={uploading}
        className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded"
      >
        {uploading ? "Subiendo..." : "Subir PDF"}
      </button>
    </div>
  );
}