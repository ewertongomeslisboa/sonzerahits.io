import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { MessageCircle } from 'lucide-react';

// Layouts
import MainLayout from './layouts/MainLayout';

// Pages
import HomePage from './pages/HomePage';
import ShopPage from './pages/ShopPage';
import RemixPage from './pages/RemixPage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import ProductDetailPage from './pages/ProductDetailPage';
import NotFoundPage from './pages/NotFoundPage';

// Context
import { CartProvider } from './contexts/CartContext';

function App() {
  return (
    <CartProvider>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<HomePage />} />
          <Route path="loja" element={<ShopPage />} />
          <Route path="loja/:productId" element={<ProductDetailPage />} />
          <Route path="remixes" element={<RemixPage />} />
          <Route path="sobre" element={<AboutPage />} />
          <Route path="contato" element={<ContactPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
      
      {/* WhatsApp Floating Button */}
      <a 
        href="https://wa.me/5511999999999" 
        target="_blank" 
        rel="noopener noreferrer"
        className="whatsapp-float"
        aria-label="Contato via WhatsApp"
      >
        <MessageCircle size={24} />
      </a>
    </CartProvider>
  );
}

export default App;