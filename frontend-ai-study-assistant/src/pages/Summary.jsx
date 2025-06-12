// src/pages/Summary.jsx
import { useEffect, useState } from "react";

export default function Summary() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const uuid = localStorage.getItem("currentUUID");

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

  if (loading) return <p>⏳ Procesando tu resumen... por favor espera.</p>;
  if (error) return <p className="text-red-500">{error}</p>;
  if (!data) return null;

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold">🧠 Resumen generado</h2>
      <ul className="list-disc pl-6">
        {data.bullet_points.map((item, i) => (
          <li key={i}>{item.point}</li>
        ))}
      </ul>

      <h3 className="text-xl font-semibold mt-6">📝 Preguntas tipo test</h3>
      <ul className="space-y-4">
        {data.quiz_questions.slice(0, 5).map((q, i) => (
          <li key={i} className="border p-4 rounded bg-white shadow-sm">
            <p className="font-semibold">{q.question}</p>
            <ul className="pl-4 mt-2 text-sm text-gray-700 space-y-1">
              <li>A. {q.option_a}</li>
              <li>B. {q.option_b}</li>
              <li>C. {q.option_c}</li>
              <li>D. {q.option_d}</li>
            </ul>
            <p className="mt-2 text-green-600 font-medium">
              ✅ Respuesta correcta: {q.correct_answer}
            </p>
            <p className="text-gray-500 text-sm italic">
              Explicación: {q.explanation}
            </p>
          </li>
        ))}
      </ul>

      <h3 className="text-xl font-semibold mt-6">🗂️ Flashcards</h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {data.flashcards.slice(0, 4).map((fc, i) => (
          <div key={i} className="p-4 border rounded shadow-sm bg-white">
            <p><strong>🧩 {fc.front}</strong></p>
            <p className="text-gray-600">💡 {fc.back}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
