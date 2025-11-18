import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ShoppingCart, Heart, ArrowLeft, Check, Music, Info, Truck } from 'lucide-react';
import { products } from '../data/products';
import { useCart } from '../contexts/CartContext';
import ProductCard from '../components/shop/ProductCard';

const ProductDetailPage: React.FC = () => {
  const { productId } = useParams<{ productId: string }>();
  const { addToCart } = useCart();
  const [quantity, setQuantity] = useState(1);
  
  // Find the product
  const product = products.find(p => p.id === productId);
  
  // Find related products (same category)
  const relatedProducts = product 
    ? products.filter(p => p.category === product.category && p.id !== product.id).slice(0, 4)
    : [];
    
  useEffect(() => {
    // Scroll to top when product changes
    window.scrollTo(0, 0);
  }, [productId]);
  
  // Handle quantity changes
  const incrementQuantity = () => setQuantity(prev => prev + 1);
  const decrementQuantity = () => setQuantity(prev => (prev > 1 ? prev - 1 : 1));
  
  // Add to cart with the selected quantity
  const handleAddToCart = () => {
    if (product) {
      for (let i = 0; i < quantity; i++) {
        addToCart(product);
      }
    }
  };
  
  if (!product) {
    return (
      <div className="pt-32 pb-12 min-h-screen bg-black">
        <div className="container-custom">
          <div className="text-center">
            <Music size={48} className="mx-auto text-gray-600 mb-4" />
            <h1 className="heading-lg mb-4">Produto não encontrado</h1>
            <p className="text-gray-300 mb-8">
              Não conseguimos encontrar o produto que você está procurando.
            </p>
            <Link to="/loja" className="btn btn-primary">
              <ArrowLeft size={18} className="mr-2" />
              Voltar para a Loja
            </Link>
          </div>
        </div>
      </div>
    );
  }
  
  return (
    <>
      {/* Product Detail Section */}
      <div className="pt-32 pb-12 bg-dark-900">
        <div className="container-custom">
          {/* Breadcrumb */}
          <div className="mb-8">
            <Link to="/loja" className="text-sm text-gray-400 hover:text-primary-500 flex items-center">
              <ArrowLeft size={16} className="mr-2" />
              Voltar para a Loja
            </Link>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
            {/* Product Image */}
            <div className="bg-dark-800 rounded-lg overflow-hidden relative">
              <img 
                src={product.image} 
                alt={product.name} 
                className="w-full h-auto object-cover"
              />
              
              {product.featured && (
                <div className="absolute top-4 left-4 bg-primary-500 text-white text-sm py-1 px-3 rounded-full">
                  Destaque
                </div>
              )}
            </div>
            
            {/* Product Info */}
            <div>
              <h1 className="heading-md mb-2">{product.name}</h1>
              <p className="text-gray-400 mb-4">Categoria: {product.category}</p>
              
              <div className="flex items-baseline mb-6">
                <span className="text-3xl font-bebas mr-3">R$ {product.price.toFixed(2)}</span>
                {product.originalPrice && (
                  <span className="text-lg text-gray-400 line-through">R$ {product.originalPrice.toFixed(2)}</span>
                )}
              </div>
              
              <div className="mb-6">
                <h3 className="text-lg font-medium mb-3">Descrição</h3>
                <p className="text-gray-300 mb-4">
                  {product.description}
                </p>
                
                <ul className="space-y-2">
                  {product.features.map((feature, index) => (
                    <li key={index} className="flex items-start">
                      <Check size={18} className="text-primary-500 mr-2 mt-0.5" />
                      <span className="text-gray-300">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              {/* Quantity Selector */}
              <div className="mb-6">
                <h3 className="text-lg font-medium mb-3">Quantidade</h3>
                <div className="flex items-center">
                  <button 
                    onClick={decrementQuantity}
                    className="bg-dark-800 text-white p-2 rounded-l-md"
                    aria-label="Diminuir quantidade"
                  >
                    -
                  </button>
                  <span className="bg-dark-700 text-white px-4 py-2">{quantity}</span>
                  <button 
                    onClick={incrementQuantity}
                    className="bg-dark-800 text-white p-2 rounded-r-md"
                    aria-label="Aumentar quantidade"
                  >
                    +
                  </button>
                </div>
              </div>
              
              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-3 mb-8">
                <button 
                  onClick={handleAddToCart}
                  className="btn btn-primary flex-grow"
                >
                  <ShoppingCart size={18} className="mr-2" />
                  Adicionar ao Carrinho
                </button>
                <button className="btn btn-outline sm:flex-grow-0">
                  <Heart size={18} className="mr-2" />
                  Favoritar
                </button>
              </div>
              
              {/* Additional Info */}
              <div className="space-y-4">
                <div className="flex items-start">
                  <Truck size={20} className="text-primary-500 mr-3 mt-1" />
                  <div>
                    <h4 className="font-medium">Entrega</h4>
                    <p className="text-sm text-gray-400">Frete grátis para São Paulo capital</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Info size={20} className="text-primary-500 mr-3 mt-1" />
                  <div>
                    <h4 className="font-medium">Garantia</h4>
                    <p className="text-sm text-gray-400">30 dias para troca em caso de defeito</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Related Products Section */}
      {relatedProducts.length > 0 && (
        <div className="py-12 bg-black">
          <div className="container-custom">
            <h2 className="heading-md mb-8">Produtos <span className="text-primary-500">Relacionados</span></h2>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {relatedProducts.map(product => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ProductDetailPage;