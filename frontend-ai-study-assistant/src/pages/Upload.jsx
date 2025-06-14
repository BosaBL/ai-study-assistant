// src/pages/Upload.jsx
import { useNavigate } from "@tanstack/react-router";
import { useState, useEffect } from "react";
import UploadPDF from "../components/UploadPDF";

export default function Upload() {
  const [uuid, setUUID] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    if (uuid) {
      navigate({ to: "/summary/$id", params: { id: uuid } });
    }
  }, [uuid, navigate]);

  return (
    <section className="max-w-3xl mx-auto mt-8">
      <div className="bg-white p-8 rounded-2xl shadow-md">
        <h1 className="text-2xl font-bold mb-2">📄 Sube tu archivo PDF</h1>
        <p className="text-gray-600 mb-6">
          Carga tus apuntes o documentos de estudio. Nuestra IA generará un resumen, tarjetas de memoria y un cuestionario para ayudarte a estudiar.
        </p>
        <UploadPDF onUUIDReceived={setUUID} />
      </div>
    </section>
  );
}