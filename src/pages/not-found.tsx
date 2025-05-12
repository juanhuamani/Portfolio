import { Link } from 'react-router-dom';
import { paths } from '@/config/paths';

export function NotFoundPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-100 to-purple-100 flex items-center justify-center px-4">
      <div className="max-w-lg w-full text-center">
        <h1 className="text-9xl font-bold text-indigo-600 mb-4">404</h1>
        <div className="space-y-6">
          <h2 className="text-3xl font-semibold text-gray-800">
            ¡Ups! Página no encontrada
          </h2>
          <p className="text-gray-600 text-lg">
            Lo sentimos, la página que estás buscando no existe o ha sido movida.
          </p>
          <div className="flex justify-center gap-4">
            <Link
              to={paths.home.path}
              className="px-6 py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors duration-200"
            >
              Volver al inicio
            </Link>
            <button
              onClick={() => window.history.back()}
              className="px-6 py-3 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 transition-colors duration-200"
            >
              Volver atrás
            </button>
          </div>
        </div>
        <div className="mt-12">
          <div className="animate-bounce">
            <svg
              className="w-16 h-16 text-indigo-500 mx-auto"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 14l-7 7m0 0l-7-7m7 7V3"
              />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
} 