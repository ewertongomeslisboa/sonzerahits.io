import React from 'react';
import { Link } from 'react-router-dom';
import { Music, Download, Disc, Star, ChevronRight, Play, Mail } from 'lucide-react';
import HeroSection from '../components/home/HeroSection';
import TestimonialSlider from '../components/home/TestimonialSlider';
import ProductCard from '../components/shop/ProductCard';
import { products } from '../data/products';

const HomePage: React.FC = () => {
  // Get featured products
  const featuredProducts = products.filter(product => product.featured).slice(0, 4);
  
  return (
    <>
      {/* Hero Section */}
      <HeroSection />
      
      {/* Services Section */}
      <section className="section bg-dark-800">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="heading-lg mb-4">Nossos <span className="text-primary-500">Serviços</span></h2>
            <p className="max-w-2xl mx-auto text-gray-300">
              Oferecemos as melhores soluções musicais para festas, eventos e entretenimento,
              sempre com qualidade e o melhor atendimento.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Pendrives Service Card */}
            <div className="card p-8 flex flex-col items-center text-center">
              <div className="bg-primary-500 p-4 rounded-full mb-6">
                <Disc size={32} />
              </div>
              <h3 className="heading-md mb-4">Pendrives com Músicas</h3>
              <p className="text-gray-300 mb-6">
                Adquira pendrives com mais de 1000 músicas divididas por gêneros musicais.
                Atualizações constantes com os lançamentos mais recentes do mercado.
              </p>
              <Link to="/loja" className="btn btn-primary mt-auto">
                <ShoppingCart size={18} className="mr-2" />
                Ver Produtos
              </Link>
            </div>
            
            {/* Remixes Service Card */}
            <div className="card p-8 flex flex-col items-center text-center">
              <div className="bg-primary-500 p-4 rounded-full mb-6">
                <Music size={32} />
              </div>
              <h3 className="heading-md mb-4">Remixes Personalizados</h3>
              <p className="text-gray-300 mb-6">
                Criamos remixes exclusivos para seu evento, casamento, 15 anos, ou festas em geral.
                Projetos personalizados de acordo com seu gosto musical.
              </p>
              <Link to="/remixes" className="btn btn-primary mt-auto">
                <Music size={18} className="mr-2" />
                Ver Serviços
              </Link>
            </div>
          </div>
        </div>
      </section>
      
      {/* Featured Products Section */}
      <section className="section bg-black">
        <div className="container-custom">
          <div className="flex justify-between items-center mb-8">
            <h2 className="heading-md">Produtos <span className="text-primary-500">em Destaque</span></h2>
            <Link to="/loja" className="btn btn-outline text-sm">
              Ver Todos
              <ChevronRight size={18} className="ml-2" />
            </Link>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredProducts.map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>
      
      {/* Remix Showcase Section */}
      <section className="section bg-dark-800 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-dark-900 to-transparent z-0"></div>
        <div className="container-custom relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="heading-lg mb-6">Remixes <span className="text-primary-500">Personalizados</span></h2>
              <p className="text-gray-300 mb-8">
                Crie momentos inesquecíveis com remixes personalizados para casamentos, festas de 15 anos, 
                formaturas ou qualquer evento especial. DJ Tonzera irá transformar as músicas que você ama 
                em uma experiência única para seu evento.
              </p>
              
              <div className="mb-8">
                <div className="flex items-center mb-4">
                  <Star className="text-primary-500 mr-2" size={20} />
                  <span className="font-medium">Entradas especiais para festas</span>
                </div>
                <div className="flex items-center mb-4">
                  <Star className="text-primary-500 mr-2" size={20} />
                  <span className="font-medium">Remix para valsa ou primeira dança</span>
                </div>
                <div className="flex items-center">
                  <Star className="text-primary-500 mr-2" size={20} />
                  <span className="font-medium">Produções exclusivas para coreografias</span>
                </div>
              </div>
              
              <Link to="/remixes" className="btn btn-primary">
                <Music size={18} className="mr-2" />
                Conhecer Serviços
              </Link>
            </div>
            
            <div className="relative">
              <div className="bg-dark-700 p-4 rounded-lg relative z-10">
                <div className="bg-dark-600 rounded-lg p-6 relative overflow-hidden">
                  <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary-500 to-purple-500"></div>
                  <h3 className="text-xl font-bebas mb-4">Ouça uma Amostra</h3>
                  
                  <div className="flex items-center space-x-4 mb-4">
                    <button className="bg-primary-500 p-3 rounded-full">
                      <Play size={20} />
                    </button>
                    <div className="flex-1">
                      <p className="text-sm font-medium">Entrada de 15 Anos</p>
                      <p className="text-xs text-gray-400">Remix personalizado DJ Tonzera</p>
                    </div>
                    <span className="text-sm text-gray-400">3:42</span>
                  </div>
                  
                  <div className="flex items-center space-x-4 mb-4">
                    <button className="bg-primary-500 p-3 rounded-full">
                      <Play size={20} />
                    </button>
                    <div className="flex-1">
                      <p className="text-sm font-medium">Valsa Moderna</p>
                      <p className="text-xs text-gray-400">Remix personalizado DJ Tonzera</p>
                    </div>
                    <span className="text-sm text-gray-400">4:15</span>
                  </div>
                  
                  <div className="flex items-center space-x-4">
                    <button className="bg-primary-500 p-3 rounded-full">
                      <Play size={20} />
                    </button>
                    <div className="flex-1">
                      <p className="text-sm font-medium">Mix Entrada Casamento</p>
                      <p className="text-xs text-gray-400">Remix personalizado DJ Tonzera</p>
                    </div>
                    <span className="text-sm text-gray-400">5:10</span>
                  </div>
                </div>
              </div>
              
              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-primary-500/20 rounded-full blur-xl"></div>
              <div className="absolute -bottom-8 -left-8 w-40 h-40 bg-purple-500/10 rounded-full blur-xl"></div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Testimonials Section */}
      <section className="section bg-black">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="heading-lg mb-4">O que nossos <span className="text-primary-500">Clientes</span> dizem</h2>
            <p className="max-w-2xl mx-auto text-gray-300">
              Veja os depoimentos de quem já utilizou nossos serviços e produtos
            </p>
          </div>
          
          <TestimonialSlider />
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary-600 to-primary-500 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full opacity-10">
          <div className="absolute -top-10 -left-10 w-40 h-40 rounded-full bg-white blur-xl"></div>
          <div className="absolute top-20 right-10 w-60 h-60 rounded-full bg-white blur-xl"></div>
          <div className="absolute -bottom-20 left-40 w-80 h-80 rounded-full bg-white blur-xl"></div>
        </div>
        
        <div className="container-custom relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="heading-lg text-white mb-6">Transforme sua festa com músicas incríveis!</h2>
            <p className="text-white/90 text-lg mb-8">
              Entre em contato agora mesmo e descubra como podemos elevar o nível da sua festa ou evento.
            </p>
            <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
              <a 
                href="https://wa.me/5511999999999" 
                target="_blank"
                rel="noopener noreferrer"
                className="btn bg-white text-primary-500 hover:bg-gray-100"
              >
                <Phone size={18} className="mr-2" />
                Fale via WhatsApp
              </a>
              <Link to="/contato" className="btn bg-dark-900 text-white hover:bg-dark-800">
                <Mail size={18} className="mr-2" />
                Enviar Mensagem
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

// Import missing icons
const ShoppingCart = () => <span className="sr-only">Carrinho</span>;
const Phone = () => <span className="sr-only">Telefone</span>;

export default HomePage;