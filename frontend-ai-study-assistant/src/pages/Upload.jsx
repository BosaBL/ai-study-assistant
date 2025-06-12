// src/pages/Upload.jsx
import { useState } from "react";
import UploadPDF from "../components/UploadPDF";
import PDFResults from "../components/PDFResults";

export default function Upload() {
  const [uuid, setUUID] = useState(null);

  return (
    <div>
      <h2 className="text-2xl font-semibold mb-4">Subir archivo PDF</h2>
      <UploadPDF onUUIDReceived={setUUID} />
      {uuid && <PDFResults uuid={uuid} />}
    </div>
  );
}
