import { Link } from '@tanstack/react-router';

export default function Home() {
  return (
    <section className="max-w-4xl mx-auto mt-10 px-6">
      <div className="bg-white p-10 rounded-2xl shadow-lg text-center">
        <h1 className="text-3xl font-bold mb-4">👋 Bienvenido/a a AI Study Assistant</h1>
        <p className="text-gray-600 text-lg mb-6">
          Transforma tus apuntes en resúmenes inteligentes, tarjetas de memoria y cuestionarios.
          Deja que la inteligencia artificial te ayude a estudiar de forma más efectiva y enfocada.
        </p>
        <Link
          to="/upload"
          className="inline-block bg-blue-600 text-white px-6 py-3 rounded-full shadow hover:bg-blue-700 transform hover:scale-105 transition-all duration-200"
        >
          🚀 Comenzar ahora
        </Link>
      </div>
    </section>
  );
}