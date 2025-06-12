// src/App.jsx
import { Outlet, Link } from "@tanstack/react-router";

export default function App() {
  return (
    <div className="min-h-screen bg-gray-100 text-gray-800">
      <header className="bg-white shadow p-4 flex justify-between items-center">
        <h1 className="text-xl font-bold">📚 AI Study Assistant</h1>
        <nav className="space-x-4">
          <Link to="/">Inicio</Link>
          <Link to="/upload">Subir</Link>
          <Link to="/summary">Resumen</Link>
        </nav>
      </header>
      <main className="p-6">
        <Outlet />
      </main>
    </div>
  );
}
