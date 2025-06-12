// src/components/PDFResults.jsx
import React, { useEffect, useState } from "react";
import { useNavigate } from "@tanstack/react-router";

export default function PDFResults({ uuid }) {
  const [status, setStatus] = useState("pending");
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const interval = setInterval(async () => {
      try {
        const res = await fetch(`http://localhost:8000/status/${uuid}`);
        const data = await res.json();

        if (data.status === "finished") {
          localStorage.setItem("summaryData", JSON.stringify(data.result));
          setStatus("finished");
          clearInterval(interval);
          navigate({ to: "/summary" }); // Redirigir al resumen
        } else if (data.status === "error") {
          setError(data.error_message || "Error al procesar el PDF.");
          setStatus("error");
          clearInterval(interval);
        }
      } catch (err) {
        setError("Error al consultar el estado.");
        setStatus("error");
        clearInterval(interval);
      }
    }, 2000);

    return () => clearInterval(interval);
  }, [uuid, navigate]);

  if (status === "pending") {
    return <p className="text-blue-600">⏳ Procesando tu archivo... Esto puede tardar unos segundos.</p>;
  }

  if (status === "error") {
    return <p className="text-red-600">❌ {error}</p>;
  }

  return null;
}
