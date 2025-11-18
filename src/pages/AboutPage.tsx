import React from 'react';
import { Music, Disc, Heart, Star, Instagram, Facebook, Youtube } from 'lucide-react';
import { Link } from 'react-router-dom';

const AboutPage: React.FC = () => {
  return (
    <>
      {/* Hero Section */}
      <div className="pt-32 pb-16 bg-dark-900">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="heading-lg mb-6">
                Sobre a <span className="text-primary-500">Sonzera Hits</span>
              </h1>
              <p className="text-xl text-gray-300 mb-8">
                Criando experiências musicais únicas desde 2025. Conheça nossa história e o DJ por trás da Sonzera Hits.
              </p>
            </div>
            
            <div className="relative">
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-primary-500/20 rounded-full blur-xl"></div>
              <div className="relative z-10">
                <img 
                  src="https://images.pexels.com/photos/2111015/pexels-photo-2111015.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" 
                  alt="DJ Tonzera" 
                  className="rounded-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Our Story Section */}
      <section className="py-16 bg-black">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1">
              <div className="relative">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <img 
                      src="https://images.pexels.com/photos/1540319/pexels-photo-1540319.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" 
                      alt="DJ Equipment" 
                      className="rounded-lg mb-4"
                    />
                    <img 
                      src="https://images.pexels.com/photos/1540341/pexels-photo-1540341.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" 
                      alt="DJ Mixer" 
                      className="rounded-lg"
                    />
                  </div>
                  <div className="pt-6">
                    <img 
                      src="https://images.pexels.com/photos/1886531/pexels-photo-1886531.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" 
                      alt="Party" 
                      className="rounded-lg mb-4"
                    />
                    <img 
                      src="https://images.pexels.com/photos/1201798/pexels-photo-1201798.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" 
                      alt="Dance Floor" 
                      className="rounded-lg"
                    />
                  </div>
                </div>
                
                {/* Decorative elements */}
                <div className="absolute -bottom-6 -left-6 bg-dark-800 p-3 rounded-full border-2 border-primary-500">
                  <Disc size={32} className="text-primary-500" />
                </div>
                <div className="absolute -top-6 -right-6 bg-dark-800 p-3 rounded-full border-2 border-primary-500">
                  <Music size={32} className="text-primary-500" />
                </div>
              </div>
            </div>
            
            <div className="order-1 md:order-2">
              <h2 className="heading-md mb-6">Nossa <span className="text-primary-500">História</span></h2>
              <p className="text-gray-300 mb-4">
                A Sonzera Hits nasceu em 2018, na Zona Leste de São Paulo, da paixão do DJ Tonzera pela música e pela arte de criar experiências musicais memoráveis para festas e eventos.
              </p>
              <p className="text-gray-300 mb-4">
                Após anos tocando em festas e eventos, o DJ Tonzera percebeu a demanda por remixes personalizados e coletâneas musicais de qualidade. Foi então que nasceu a Sonzera Hits, com o objetivo de oferecer soluções musicais para todos os tipos de eventos e gostos.
              </p>
              <p className="text-gray-300 mb-8">
                Hoje, a Sonzera Hits é reconhecida pela qualidade de seus remixes personalizados e pela curadoria impecável de suas coletâneas musicais, sempre atualizadas com os maiores sucessos de cada gênero.
              </p>
              
              <div className="flex items-center space-x-4">
                <a 
                  href="https://instagram.com/sonzerahits" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-gradient-to-r from-purple-600 to-pink-500 p-3 rounded-full"
                  aria-label="Instagram"
                >
                  <Instagram size={24} />
                </a>
                <a 
                  href="https://facebook.com/sonzerahits" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-blue-600 p-3 rounded-full"
                  aria-label="Facebook"
                >
                  <Facebook size={24} />
                </a>
                <a 
                  href="https://youtube.com/sonzerahits" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-red-600 p-3 rounded-full"
                  aria-label="YouTube"
                >
                  <Youtube size={24} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* DJ Tonzera Section */}
      <section className="py-16 bg-dark-800">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="heading-md mb-6">Conheça <span className="text-primary-500">DJ Tonzera</span></h2>
              <p className="text-gray-300 mb-4">
                DJ Tonzera é um produtor musical e DJ da Zona Leste de São Paulo com mais de 10 anos de experiência no mercado.
              </p>
              <p className="text-gray-300 mb-4">
                Especializado em mixagens e produções para eventos, DJ Tonzera já trabalhou em centenas de festas, incluindo casamentos, aniversários, formaturas e eventos corporativos.
              </p>
              <p className="text-gray-300 mb-8">
                Com um ouvido apurado para tendências musicais e uma habilidade especial para criar transições suaves entre diferentes estilos, DJ Tonzera é capaz de transformar qualquer ocasião em um momento inesquecível através da música.
              </p>
              
              <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
                <Link to="/contato" className="btn btn-primary">
                  Entrar em Contato
                </Link>
                <Link to="/remixes" className="btn btn-outline">
                  Ver Serviços
                </Link>
              </div>
            </div>
            
            <div>
              <div className="relative">
                <div className="absolute -top-6 -right-6 w-40 h-40 bg-primary-500/20 rounded-full blur-xl"></div>
                <img 
                  src="https://images.pexels.com/photos/2608516/pexels-photo-2608516.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" 
                  alt="DJ Tonzera" 
                  className="rounded-lg relative z-10"
                />
                
                {/* Overlay with stats */}
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-dark-900 to-transparent p-6">
                  <div className="grid grid-cols-3 gap-4 text-center">
                    <div>
                      <div className="text-3xl font-bebas text-primary-500">500+</div>
                      <div className="text-sm">Eventos</div>
                    </div>
                    <div>
                      <div className="text-3xl font-bebas text-primary-500">1000+</div>
                      <div className="text-sm">Remixes</div>
                    </div>
                    <div>
                      <div className="text-3xl font-bebas text-primary-500">10+</div>
                      <div className="text-sm">Anos</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Mission Section */}
      <section className="py-16 bg-black">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="heading-md mb-6">Nossa <span className="text-primary-500">Missão</span></h2>
            <p className="text-xl text-gray-300">
              Criar experiências musicais únicas e memoráveis para todos os nossos clientes, 
              através de remixes personalizados e coletâneas musicais cuidadosamente selecionadas.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="card p-6 text-center">
              <Heart size={40} className="text-primary-500 mx-auto mb-6" />
              <h3 className="text-xl font-medium mb-4">Paixão</h3>
              <p className="text-gray-300">
                Somos apaixonados por música e pela arte de criar experiências inesquecíveis para nossos clientes.
              </p>
            </div>
            
            <div className="card p-6 text-center">
              <Star size={40} className="text-primary-500 mx-auto mb-6" />
              <h3 className="text-xl font-medium mb-4">Qualidade</h3>
              <p className="text-gray-300">
                Comprometimento com a excelência em cada remix e cada coletânea musical que produzimos.
              </p>
            </div>
            
            <div className="card p-6 text-center">
              <Music size={40} className="text-primary-500 mx-auto mb-6" />
              <h3 className="text-xl font-medium mb-4">Inovação</h3>
              <p className="text-gray-300">
                Buscamos constantemente novas tendências e tecnologias para oferecer o melhor em música.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-16 bg-primary-500">
        <div className="container-custom text-center">
          <h2 className="heading-md text-white mb-6">Pronto para transformar seu evento?</h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Entre em contato conosco agora mesmo e descubra como podemos criar a trilha sonora perfeita para o seu momento especial.
          </p>
          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
            <Link to="/remixes" className="btn bg-white text-primary-500 hover:bg-gray-100">
              Solicitar Remix
            </Link>
            <Link to="/loja" className="btn bg-dark-900 text-white hover:bg-dark-800">
              Comprar Pendrive
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutPage;