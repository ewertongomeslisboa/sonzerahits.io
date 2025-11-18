import React from 'react';
import { Link } from 'react-router-dom';
import { Home, Music, ArrowLeft } from 'lucide-react';

const NotFoundPage: React.FC = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-dark-900 py-32">
      <div className="container-custom text-center">
        <div className="relative w-24 h-24 mx-auto mb-6">
          <div className="absolute inset-0 bg-primary-500/20 rounded-full animate-pulse"></div>
          <Music size={64} className="relative z-10 text-primary-500 mx-auto" />
        </div>
        
        <h1 className="heading-lg mb-4">404</h1>
        <h2 className="text-2xl font-medium mb-8">Página não encontrada</h2>
        <p className="text-gray-300 max-w-md mx-auto mb-8">
          Parece que o ritmo dessa página se perdeu. Que tal voltar para o nosso set principal?
        </p>
        
        <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
          <Link to="/" className="btn btn-primary">
            <Home size={18} className="mr-2" />
            Voltar para Home
          </Link>
          <button 
            onClick={() => window.history.back()}
            className="btn btn-outline"
          >
            <ArrowLeft size={18} className="mr-2" />
            Voltar
          </button>
        </div>
      </div>
    </div>
  );
};

export default NotFoundPage;