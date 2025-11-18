import React, { useState, useEffect } from 'react';
import { Music, Filter } from 'lucide-react';
import ProductCard from '../components/shop/ProductCard';
import ProductFilter from '../components/shop/ProductFilter';
import { products } from '../data/products';

type Category = 'all' | 'sertanejo' | 'funk' | 'pagode' | 'eletronico' | 'rock' | 'gospel';

const ShopPage: React.FC = () => {
  const [filteredProducts, setFilteredProducts] = useState(products);
  const [selectedCategory, setSelectedCategory] = useState<Category>('all');
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  
  useEffect(() => {
    // Filter products based on selected category
    if (selectedCategory === 'all') {
      setFilteredProducts(products);
    } else {
      setFilteredProducts(products.filter(product => product.category === selectedCategory));
    }
    
    // Scroll to top when filter changes
    window.scrollTo(0, 0);
  }, [selectedCategory]);
  
  return (
    <>
      {/* Hero Banner */}
      <div className="relative pt-24 pb-12 bg-dark-900">
        <div className="container-custom">
          <div className="max-w-2xl">
            <h1 className="heading-lg mb-4">
              Pendrives com <span className="text-primary-500">Músicas</span>
            </h1>
            <p className="text-gray-300 text-lg mb-0">
              Explore nossa coleção de pendrives com mais de 1000 músicas por gênero musical, atualizadas mensalmente.
            </p>
          </div>
        </div>
        
        {/* Decorative Element */}
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary-500/5 rounded-full blur-3xl"></div>
        <div className="absolute top-0 right-20 w-20 h-20 bg-primary-500/10 rounded-full blur-xl"></div>
      </div>
      
      {/* Main Content */}
      <div className="bg-black py-12">
        <div className="container-custom">
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Mobile Filter Toggle */}
            <div className="lg:hidden mb-4">
              <button 
                onClick={() => setIsFilterOpen(!isFilterOpen)}
                className="w-full flex items-center justify-center space-x-2 bg-dark-800 py-3 px-4 rounded-lg"
              >
                <Filter size={18} />
                <span>{isFilterOpen ? 'Esconder Filtros' : 'Mostrar Filtros'}</span>
              </button>
            </div>
            
            {/* Sidebar Filters */}
            <div className={`lg:w-1/4 ${isFilterOpen ? 'block' : 'hidden lg:block'}`}>
              <ProductFilter 
                selectedCategory={selectedCategory}
                setSelectedCategory={setSelectedCategory}
              />
            </div>
            
            {/* Product Grid */}
            <div className="lg:w-3/4">
              {filteredProducts.length > 0 ? (
                <>
                  <div className="mb-6 flex justify-between items-center">
                    <h2 className="text-xl font-bebas">
                      {selectedCategory === 'all' ? 'Todos os Produtos' : `Produtos - ${getCategoryName(selectedCategory)}`}
                    </h2>
                    <span className="text-gray-400 text-sm">{filteredProducts.length} produtos</span>
                  </div>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
                    {filteredProducts.map(product => (
                      <ProductCard key={product.id} product={product} />
                    ))}
                  </div>
                </>
              ) : (
                <div className="text-center py-12">
                  <Music size={48} className="mx-auto text-gray-600 mb-4" />
                  <h3 className="text-xl font-medium mb-2">Nenhum produto encontrado</h3>
                  <p className="text-gray-400">
                    Não encontramos produtos nessa categoria. Tente selecionar outra categoria.
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

// Helper function to get readable category name
const getCategoryName = (category: Category): string => {
  const categoryMap: Record<Category, string> = {
    all: 'Todos',
    sertanejo: 'Sertanejo',
    funk: 'Funk',
    pagode: 'Pagode',
    eletronico: 'Eletrônico',
    rock: 'Rock',
    gospel: 'Gospel'
  };
  
  return categoryMap[category] || '';
};

export default ShopPage;