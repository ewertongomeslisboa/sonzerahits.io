import React from 'react';
import { Link } from 'react-router-dom';
import { ShoppingCart, Heart } from 'lucide-react';
import { useCart } from '../../contexts/CartContext';
import { Product } from '../../types';

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const { addToCart } = useCart();
  
  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    addToCart(product);
  };
  
  return (
    <Link to={`/loja/${product.id}`} className="card group">
      {/* Product Image */}
      <div className="relative overflow-hidden">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-105"
        />
        
        {product.featured && (
          <div className="absolute top-2 left-2 bg-primary-500 text-white text-xs py-1 px-2 rounded">
            Destaque
          </div>
        )}
        
        {/* Wishlist Button */}
        <button
          className="absolute top-2 right-2 bg-dark-800/80 p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
          onClick={(e) => e.preventDefault()}
          aria-label="Adicionar aos favoritos"
        >
          <Heart size={16} />
        </button>
      </div>
      
      {/* Product Info */}
      <div className="p-4">
        <div className="flex items-start justify-between">
          <div>
            <h3 className="font-medium mb-1 line-clamp-2 leading-tight">{product.name}</h3>
            <p className="text-sm text-gray-400 mb-2">{product.category}</p>
          </div>
        </div>
        
        <div className="flex items-center justify-between mt-2">
          <div className="flex items-baseline">
            <span className="text-xl font-bebas mr-2">R$ {product.price.toFixed(2)}</span>
            {product.originalPrice && (
              <span className="text-sm text-gray-400 line-through">R$ {product.originalPrice.toFixed(2)}</span>
            )}
          </div>
          
          <button
            onClick={handleAddToCart}
            className="bg-primary-500 p-2 rounded-full hover:bg-primary-600 transition-colors"
            aria-label="Adicionar ao carrinho"
          >
            <ShoppingCart size={16} />
          </button>
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;