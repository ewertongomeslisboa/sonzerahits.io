import React from 'react';
import { Link } from 'react-router-dom';
import { ShoppingCart, Music, ChevronDown } from 'lucide-react';
import { motion } from 'framer-motion';

const HeroSection: React.FC = () => {
  const scrollToNextSection = () => {
    const nextSection = document.querySelector('.section');
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: 'smooth' });
    }
  };
  
  return (
    <section className="relative min-h-screen flex items-center justify-center text-white overflow-hidden">
      {/* Background with overlay */}
      <div className="absolute inset-0 z-0">
        <div 
          className="absolute inset-0 bg-cover bg-center" 
          style={{ backgroundImage: 'url(https://images.pexels.com/photos/1763075/pexels-photo-1763075.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260)' }}
        ></div>
        <div className="absolute inset-0 bg-gradient-to-b from-dark-900/80 via-dark-900/70 to-dark-900"></div>
      </div>
      
      {/* Content */}
      <div className="container-custom relative z-10 pt-24">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-center">
          <div className="md:col-span-7">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="heading-xl mb-6">
                <span className="text-primary-500">Música</span> de Qualidade para sua <span className="text-primary-500">Festa</span>
              </h1>
              <p className="text-xl text-gray-300 mb-8 max-w-xl">
                Pendrives com as melhores coletâneas musicais e remixes personalizados para coreografias, tornando seu evento inesquecível.
              </p>
              
              <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 mb-12">
                <Link to="/loja" className="btn btn-primary">
                  <ShoppingCart size={18} className="mr-2" />
                  Comprar Pendrive
                </Link>
                <Link to="/remixes" className="btn btn-outline">
                  <Music size={18} className="mr-2" />
                  Remixes Personalizados
                </Link>
              </div>
            </motion.div>
          </div>
          
          <div className="md:col-span-5">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative"
            >
              <div className="relative">
                <div className="w-full h-full absolute top-0 left-0 bg-gradient-to-r from-primary-500 to-purple-600 rounded-full blur-xl opacity-20 animate-pulse-slow"></div>
                <img 
                  src="https://images.pexels.com/photos/3784221/pexels-photo-3784221.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" 
                  alt="DJ Mixer" 
                  className="rounded-lg relative z-10 border-2 border-primary-500/20"
                />
                
                {/* Floating elements */}
                <div className="absolute -top-5 -right-5 z-20 bg-dark-800 rounded-lg p-3 shadow-lg border border-dark-600 animate-float">
                  <Music size={28} className="text-primary-500" />
                </div>
                <div className="absolute -bottom-5 -left-5 z-20 bg-dark-800 rounded-lg p-3 shadow-lg border border-dark-600 animate-float" style={{ animationDelay: '1.5s' }}>
                  <ShoppingCart size={28} className="text-primary-500" />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
        
        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-center">
          <button 
            onClick={scrollToNextSection}
            className="animate-bounce bg-dark-800/60 p-2 rounded-full border border-dark-600"
            aria-label="Rolar para baixo"
          >
            <ChevronDown size={24} className="text-primary-500" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;