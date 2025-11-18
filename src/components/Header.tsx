import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ShoppingCart, Music } from 'lucide-react';
import Logo from './Logo';
import { useCart } from '../contexts/CartContext';

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const { cartItems } = useCart();
  
  const toggleMenu = () => setIsOpen(!isOpen);
  
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  
  useEffect(() => {
    // Close mobile menu when route changes
    setIsOpen(false);
  }, [location]);
  
  const totalItems = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <header className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-dark-900/95 backdrop-blur-sm shadow-lg' : 'bg-transparent'}`}>
      <div className="container-custom py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <Logo className="h-10 w-auto" />
            <span className="ml-2 font-bebas text-2xl">SONZERA HITS</span>
          </Link>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <NavLink to="/" label="Home" />
            <NavLink to="/loja" label="Loja" />
            <NavLink to="/remixes" label="Remixes" />
            <NavLink to="/sobre" label="Sobre" />
            <NavLink to="/contato" label="Contato" />
            
            {/* Cart Icon */}
            <Link to="/loja/carrinho" className="relative">
              <ShoppingCart size={24} />
              {totalItems > 0 && (
                <span className="absolute -top-2 -right-2 bg-primary-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                  {totalItems}
                </span>
              )}
            </Link>
          </nav>
          
          {/* Mobile Menu Button */}
          <div className="flex items-center md:hidden">
            <Link to="/loja/carrinho" className="relative mr-4">
              <ShoppingCart size={24} />
              {totalItems > 0 && (
                <span className="absolute -top-2 -right-2 bg-primary-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                  {totalItems}
                </span>
              )}
            </Link>
            <button 
              onClick={toggleMenu} 
              className="text-white focus:outline-none"
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile Navigation */}
      <div className={`md:hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0 invisible'}`}>
        <div className="bg-dark-800 py-4">
          <div className="container-custom flex flex-col space-y-4">
            <MobileNavLink to="/" label="Home" Icon={<Music size={18} />} />
            <MobileNavLink to="/loja" label="Loja" Icon={<ShoppingCart size={18} />} />
            <MobileNavLink to="/remixes" label="Remixes" Icon={<Music size={18} />} />
            <MobileNavLink to="/sobre" label="Sobre" Icon={<Music size={18} />} />
            <MobileNavLink to="/contato" label="Contato" Icon={<Music size={18} />} />
          </div>
        </div>
      </div>
    </header>
  );
};

// Navigation Link Component
const NavLink: React.FC<{to: string; label: string}> = ({to, label}) => {
  const location = useLocation();
  const isActive = location.pathname === to || (to !== '/' && location.pathname.startsWith(to));
  
  return (
    <Link 
      to={to} 
      className={`text-sm font-medium transition-colors relative group ${isActive ? 'text-primary-500' : 'text-white hover:text-primary-300'}`}
    >
      {label}
      <span className={`absolute -bottom-1 left-0 w-0 h-0.5 bg-primary-500 transition-all duration-300 ${isActive ? 'w-full' : 'group-hover:w-full'}`}></span>
    </Link>
  );
};

// Mobile Navigation Link Component
const MobileNavLink: React.FC<{to: string; label: string; Icon: React.ReactNode}> = ({to, label, Icon}) => {
  const location = useLocation();
  const isActive = location.pathname === to || (to !== '/' && location.pathname.startsWith(to));
  
  return (
    <Link 
      to={to} 
      className={`flex items-center p-3 rounded-md ${isActive ? 'bg-primary-500 text-white' : 'text-white hover:bg-dark-700'}`}
    >
      <span className="mr-3">{Icon}</span>
      {label}
    </Link>
  );
};

export default Header;