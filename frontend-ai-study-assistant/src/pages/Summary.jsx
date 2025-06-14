import { useEffect, useState } from "react";
import { useParams } from "@tanstack/react-router";
import jsPDF from "jspdf";
import autoTable from "jspdf-autotable";
import FlipCard from "../components/FlipCard";

export default function Summary() {
  const { id: uuid } = useParams({ from: "/summary/$id" });
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [expandedIndexes, setExpandedIndexes] = useState([]);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    if (!uuid) {
      setError("No se encontró UUID. Por favor sube un archivo primero.");
      setLoading(false);
      return;
    }

    const interval = setInterval(async () => {
      try {
        const res = await fetch(`http://localhost:8000/status/${uuid}`);
        const json = await res.json();

        if (json.status === "finished") {
          setData(json.result);
          clearInterval(interval);
          setLoading(false);
        } else if (json.status === "error") {
          setError("Hubo un problema procesando el archivo.");
          clearInterval(interval);
          setLoading(false);
        }
      } catch (err) {
        setError("Error al conectar con el servidor.");
        clearInterval(interval);
        setLoading(false);
      }
    }, 2000);

    return () => clearInterval(interval);
  }, [uuid]);

  const toggleExpand = (i) => {
    setExpandedIndexes((prev) =>
      prev.includes(i) ? prev.filter((x) => x !== i) : [...prev, i]
    );
  };

  const exportPDF = () => {
    const doc = new jsPDF();
    doc.setFontSize(16);
    doc.text("Resumen Generado por AI Study Assistant", 14, 20);
    autoTable(doc, {
      startY: 30,
      head: [["Puntos Clave"]],
      body: data.bullet_points.map((bp) => [bp.point]),
    });
    doc.save("resumen_ai_study_assistant.pdf");
  };

  if (loading) {
    return (
      <div className="text-center py-8 text-blue-600 font-medium">
        ⏳ Procesando tu resumen... por favor espera.
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-center py-8 text-red-600 font-semibold">
        ❌ {error}
      </div>
    );
  }

  if (!data) return null;

  return (
    <section className="max-w-4xl mx-auto space-y-12 mt-6">
      {/* Resumen */}
      <div className="bg-white p-6 rounded-xl shadow-md relative">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-2xl font-bold">🧠 Resumen generado</h2>
          <div className="flex gap-2 items-center">
            <button
              onClick={() => {
                navigator.clipboard.writeText(`${window.location.origin}/summary/${uuid}`);
                setCopied(true);
                setTimeout(() => setCopied(false), 2000);
              }}
              className="bg-blue-600 text-white px-4 py-2 rounded text-sm hover:bg-blue-700 transition flex items-center gap-1"
            >
              {copied ? "✅ Copiado" : "📋 Copiar link"}
            </button>
            <button
              onClick={exportPDF}
              className="bg-blue-600 text-white px-4 py-2 rounded text-sm hover:bg-blue-700 transition"
            >
              📥 Exportar PDF
            </button>
          </div>
        </div>
        <ul className="list-disc pl-6 text-gray-700 space-y-1">
          {data.bullet_points.map((item, i) => (
            <li key={i}>{item.point}</li>
          ))}
        </ul>
      </div>

      {/* Preguntas tipo test */}
      <div className="bg-white p-6 rounded-xl shadow-md">
        <h3 className="text-xl font-semibold mb-6">📝 Preguntas tipo test</h3>
        <ul className="space-y-6">
          {data.quiz_questions.map((q, i) => (
            <li key={i} className="border p-4 rounded-lg bg-gray-50 shadow-sm">
              <p className="font-semibold mb-2">❓ {q.question}</p>
              <ul className="pl-4 text-sm text-gray-800 space-y-1">
                <li>A. {q.option_a}</li>
                <li>B. {q.option_b}</li>
                <li>C. {q.option_c}</li>
                <li>D. {q.option_d}</li>
              </ul>
              <button
                onClick={() => toggleExpand(i)}
                className="text-blue-600 mt-2 text-sm underline hover:text-blue-800"
              >
                {expandedIndexes.includes(i) ? "Ocultar respuesta" : "Ver respuesta"}
              </button>
              {expandedIndexes.includes(i) && (
                <div className="mt-2">
                  <p className="text-green-600 font-medium">
                    ✅ Respuesta: {q.correct_answer}
                  </p>
                  <p className="text-gray-500 text-sm italic">💬 {q.explanation}</p>
                </div>
              )}
            </li>
          ))}
        </ul>
      </div>

      {/* Flashcards */}
      <div className="bg-white p-6 rounded-xl shadow-md">
        <h3 className="text-xl font-semibold mb-6">🗂️ Flashcards</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {data.flashcards.length === 0 ? (
            <p className="text-gray-500 italic">No se generaron flashcards.</p>
          ) : (
            data.flashcards.map((fc, i) => (
              <FlipCard key={i} front={fc.front} back={fc.back} />
            ))
          )}
        </div>
      </div>
    </section>
  );
}