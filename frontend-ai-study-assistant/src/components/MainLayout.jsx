// src/components/MainLayout.jsx
import { Link, Outlet } from '@tanstack/react-router';
import logo from '../LogoAIAssistant.png';

export default function MainLayout() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-800 font-sans">
      <header className="bg-white shadow px-6 py-4 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
          <img src={logo} alt="Logo AI Study Assistant" className="h-12 w-auto mr-2 cursor-pointer" />
        </Link>
        <nav className="flex gap-4 text-sm font-medium">
          <Link to="/" className="text-gray-700 hover:text-blue-600 transition">Inicio</Link>
          <Link to="/upload" className="text-gray-700 hover:text-blue-600 transition">Subir PDF</Link>
          <Link to="/how-it-works" className="text-gray-700 hover:text-blue-600 transition">¿Comó Funciona?</Link>
        </nav>
      </header>

      <main className="px-4 py-6 max-w-5xl mx-auto">
        <Outlet />
      </main>
    </div>
  );
}