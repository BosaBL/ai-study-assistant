// src/pages/HowItWorks.jsx
export default function HowItWorks() {
  return (
    <section className="max-w-4xl mx-auto mt-10 px-6">
      <div className="bg-white p-8 rounded-2xl shadow-md">
        <h1 className="text-3xl font-bold mb-6">🔍 ¿Cómo funciona AI Study Assistant?</h1>
        <p className="text-gray-700 text-lg mb-6">
          Nuestra plataforma utiliza inteligencia artificial para transformar tus apuntes en herramientas de estudio efectivas.
        </p>
        <ul className="space-y-4 text-gray-700 text-base list-disc pl-5">
          <li>
            📄 <strong>Subida de PDF:</strong> Carga tus apuntes o material de estudio en formato PDF.
          </li>
          <li>
            🧠 <strong>Análisis con IA:</strong> El sistema analiza el contenido utilizando modelos de lenguaje para entender el texto.
          </li>
          <li>
            📌 <strong>Resumen:</strong> Se genera un resumen con los puntos más relevantes de tu documento.
          </li>
          <li>
            📝 <strong>Preguntas tipo test:</strong> La IA genera preguntas de opción múltiple basadas en el contenido.
          </li>
          <li>
            📁 <strong>Flashcards:</strong> Crea tarjetas de memoria para repasar los conceptos clave.
          </li>
        </ul>
        <p className="text-gray-600 mt-6">
          Todo esto ocurre automáticamente y en pocos segundos, ayudándote a estudiar de forma más eficiente y personalizada.
        </p>
      </div>
    </section>
  );
}
