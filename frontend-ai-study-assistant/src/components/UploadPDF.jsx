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
        navigate({ to: "/summary/$id", params: { id: data.uuid } });
      }
    } catch (error) {
      console.error("Error al subir archivos:", error);
    } finally {
      setUploading(false);
    }
  };

  return (
    <div className="space-y-6">
      {/* Zona de carga */}
      <label
        className="w-full flex flex-col items-center px-4 py-10 bg-gray-100 text-blue-600 rounded-xl shadow-md cursor-pointer hover:bg-blue-50 transition"
      >
        <svg
          className="w-10 h-10 mb-2"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1M4 12l1.5 1.5M4 12l-1.5 1.5M20 12l1.5 1.5M20 12l-1.5 1.5M12 4v12"
          />
        </svg>
        <span className="text-base font-medium">Haz clic para seleccionar archivos PDF</span>
        <input
          type="file"
          accept="application/pdf"
          multiple
          onChange={handleChange}
          className="hidden"
        />
      </label>

      {/* Lista de archivos seleccionados */}
      {files.length > 0 && (
        <ul className="text-sm text-gray-700 list-disc pl-5">
          {files.map((file, idx) => (
            <li key={idx}>{file.name}</li>
          ))}
        </ul>
      )}

      {/* Botón de subir */}
      <button
        onClick={handleUpload}
        disabled={uploading}
        className={`w-full bg-blue-600 text-white py-2 rounded-lg transition hover:bg-blue-700 ${
          uploading ? "opacity-70 cursor-not-allowed" : ""
        }`}
      >
        {uploading ? "Subiendo archivos..." : "Subir PDF"}
      </button>
    </div>
  );
}
