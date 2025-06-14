import { useState } from "react";
import UploadPDF from "../components/UploadPDF";
import PDFResults from "../components/PDFResults";

export default function Upload() {
  const [uuid, setUUID] = useState(null);

  return (
    <section className="max-w-3xl mx-auto mt-8">
      <div className="bg-white p-8 rounded-2xl shadow-md">
        <h1 className="text-2xl font-bold mb-2">📄 Sube tu archivo PDF</h1>
        <p className="text-gray-600 mb-6">
          Carga tus apuntes o documentos de estudio. Nuestra IA generará un resumen, tarjetas de memoria y un cuestionario para ayudarte a estudiar.
        </p>
        <UploadPDF onUUIDReceived={setUUID} />
      </div>

      {uuid && (
        <div className="mt-8 bg-white p-6 rounded-xl shadow-md">
          <h2 className="text-xl font-semibold mb-4">📊 Resultados generados</h2>
          <PDFResults uuid={uuid} />
        </div>
      )}
    </section>
  );
}