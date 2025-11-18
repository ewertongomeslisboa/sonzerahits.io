import React from 'react';
import { Music, Star } from 'lucide-react';

type Category = 'all' | 'sertanejo' | 'funk' | 'pagode' | 'eletronico' | 'rock' | 'gospel';

interface ProductFilterProps {
  selectedCategory: Category;
  setSelectedCategory: (category: Category) => void;
}

const ProductFilter: React.FC<ProductFilterProps> = ({ 
  selectedCategory, 
  setSelectedCategory 
}) => {
  const categories: {id: Category; name: string; icon: React.ReactNode}[] = [
    { id: 'all', name: 'Todos os Produtos', icon: <Music size={18} /> },
    { id: 'sertanejo', name: 'Sertanejo', icon: <Music size={18} /> },
    { id: 'funk', name: 'Funk', icon: <Music size={18} /> },
    { id: 'pagode', name: 'Pagode', icon: <Music size={18} /> },
    { id: 'eletronico', name: 'Eletrônico', icon: <Music size={18} /> },
    { id: 'rock', name: 'Rock', icon: <Music size={18} /> },
    { id: 'gospel', name: 'Gospel', icon: <Music size={18} /> },
  ];
  
  return (
    <div className="bg-dark-800 rounded-lg p-6">
      <h3 className="text-xl font-bebas mb-6">Categorias</h3>
      
      <div className="space-y-2">
        {categories.map(category => (
          <button
            key={category.id}
            onClick={() => setSelectedCategory(category.id)}
            className={`w-full text-left flex items-center p-3 rounded-md transition-colors ${
              selectedCategory === category.id 
                ? 'bg-primary-500 text-white' 
                : 'hover:bg-dark-700 text-gray-300'
            }`}
          >
            <span className="mr-3">{category.icon}</span>
            <span>{category.name}</span>
          </button>
        ))}
      </div>
      
      <div className="mt-8 pt-6 border-t border-dark-600">
        <h3 className="text-xl font-bebas mb-6">Destaques</h3>
        
        <div className="space-y-4">
          <div className="bg-dark-700 rounded-lg p-4 flex items-center">
            <div className="flex-shrink-0 mr-3">
              <Star className="text-yellow-500" size={20} />
            </div>
            <div>
              <h4 className="font-medium text-sm">Mais Vendidos</h4>
              <p className="text-xs text-gray-400">Nossos produtos populares</p>
            </div>
          </div>
          
          <div className="bg-dark-700 rounded-lg p-4 flex items-center">
            <div className="flex-shrink-0 mr-3">
              <Star className="text-primary-500" size={20} />
            </div>
            <div>
              <h4 className="font-medium text-sm">Novidades</h4>
              <p className="text-xs text-gray-400">Adições mais recentes</p>
            </div>
          </div>
          
          <div className="bg-dark-700 rounded-lg p-4 flex items-center">
            <div className="flex-shrink-0 mr-3">
              <Star className="text-green-500" size={20} />
            </div>
            <div>
              <h4 className="font-medium text-sm">Promoções</h4>
              <p className="text-xs text-gray-400">Preços especiais</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductFilter;