import React from 'react';
import { Music, Star, Heart, Calendar, ArrowRight, Mail, MessageSquare } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';

const RemixPage: React.FC = () => {
  const { 
    register, 
    handleSubmit, 
    formState: { errors } 
  } = useForm();
  
  const onSubmit = (data: any) => {
    console.log(data);
    // In a real app, this would submit the form data to a backend
    alert('Formulário enviado com sucesso! Entraremos em contato em breve.');
  };
  
  return (
    <>
      {/* Hero Banner */}
      <div className="relative pt-32 pb-20 bg-gradient-to-b from-dark-900 to-black overflow-hidden">
        <div className="absolute top-0 right-0 w-full h-full">
          <div className="absolute top-20 right-20 w-40 h-40 bg-primary-500/20 rounded-full blur-xl"></div>
          <div className="absolute bottom-20 left-20 w-60 h-60 bg-primary-500/10 rounded-full blur-xl"></div>
        </div>
        
        <div className="container-custom relative z-10">
          <div className="max-w-2xl">
            <h1 className="heading-lg mb-6">
              Remixes <span className="text-primary-500">Personalizados</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              Transforme seu evento com um remix exclusivo, criado especialmente para você pelo DJ Tonzera.
            </p>
            <a 
              href="#formulario" 
              className="btn btn-primary"
            >
              Solicitar Remix
              <ArrowRight size={18} className="ml-2" />
            </a>
          </div>
        </div>
      </div>
      
      {/* How It Works Section */}
      <section className="py-16 bg-dark-800">
        <div className="container-custom">
          <h2 className="heading-md text-center mb-12">Como <span className="text-primary-500">Funciona</span></h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="card p-6 text-center">
              <div className="bg-primary-500/20 w-16 h-16 flex items-center justify-center rounded-full mx-auto mb-6">
                <Music size={32} className="text-primary-500" />
              </div>
              <h3 className="text-xl font-medium mb-4">1. Escolha as Músicas</h3>
              <p className="text-gray-300">
                Selecione de 3 a 5 músicas que você gostaria de incluir no seu remix personalizado.
              </p>
            </div>
            
            <div className="card p-6 text-center">
              <div className="bg-primary-500/20 w-16 h-16 flex items-center justify-center rounded-full mx-auto mb-6">
                <Heart size={32} className="text-primary-500" />
              </div>
              <h3 className="text-xl font-medium mb-4">2. Personalização</h3>
              <p className="text-gray-300">
                DJ Tonzera cria um remix exclusivo com transições suaves e efeitos especiais.
              </p>
            </div>
            
            <div className="card p-6 text-center">
              <div className="bg-primary-500/20 w-16 h-16 flex items-center justify-center rounded-full mx-auto mb-6">
                <Calendar size={32} className="text-primary-500" />
              </div>
              <h3 className="text-xl font-medium mb-4">3. Entrega</h3>
              <p className="text-gray-300">
                Receba seu remix em alta qualidade por e-mail ou WhatsApp em até 5 dias úteis.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Services Section */}
      <section className="py-16 bg-black">
        <div className="container-custom">
          <h2 className="heading-md text-center mb-12">Nossos <span className="text-primary-500">Serviços</span></h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="card overflow-hidden">
              <div className="relative h-48">
                <img 
                  src="https://images.pexels.com/photos/3285551/pexels-photo-3285551.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" 
                  alt="Remix para Casamento" 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark-900 to-transparent"></div>
                <h3 className="absolute bottom-4 left-4 text-2xl font-bebas">Remix para Casamento</h3>
              </div>
              
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <span className="text-2xl font-bebas text-primary-500 mr-2">R$ 199,90</span>
                  <span className="text-sm bg-primary-500/20 text-primary-500 px-2 py-0.5 rounded">Mais Popular</span>
                </div>
                
                <p className="text-gray-300 mb-6">
                  Remix especial para entrada dos noivos, valsa ou primeira dança, criado para tornar
                  seu casamento ainda mais inesquecível.
                </p>
                
                <ul className="space-y-2 mb-6">
                  <li className="flex items-center">
                    <Star size={16} className="text-primary-500 mr-2" />
                    <span>Duração de 3 a 5 minutos</span>
                  </li>
                  <li className="flex items-center">
                    <Star size={16} className="text-primary-500 mr-2" />
                    <span>Introdução e finalização especiais</span>
                  </li>
                  <li className="flex items-center">
                    <Star size={16} className="text-primary-500 mr-2" />
                    <span>Arquivo em alta qualidade</span>
                  </li>
                  <li className="flex items-center">
                    <Star size={16} className="text-primary-500 mr-2" />
                    <span>Até 2 revisões inclusas</span>
                  </li>
                </ul>
                
                <a href="#formulario" className="btn btn-primary w-full">
                  Solicitar Agora
                </a>
              </div>
            </div>
            
            <div className="card overflow-hidden">
              <div className="relative h-48">
                <img 
                  src="https://images.pexels.com/photos/7601366/pexels-photo-7601366.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" 
                  alt="Remix para 15 Anos" 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark-900 to-transparent"></div>
                <h3 className="absolute bottom-4 left-4 text-2xl font-bebas">Remix para 15 Anos</h3>
              </div>
              
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <span className="text-2xl font-bebas text-primary-500">R$ 179,90</span>
                </div>
                
                <p className="text-gray-300 mb-6">
                  Remix exclusivo para a entrada da debutante, coreografia com amigas ou qualquer
                  momento especial da sua festa de 15 anos.
                </p>
                
                <ul className="space-y-2 mb-6">
                  <li className="flex items-center">
                    <Star size={16} className="text-primary-500 mr-2" />
                    <span>Duração de 3 a 5 minutos</span>
                  </li>
                  <li className="flex items-center">
                    <Star size={16} className="text-primary-500 mr-2" />
                    <span>Transições suaves entre músicas</span>
                  </li>
                  <li className="flex items-center">
                    <Star size={16} className="text-primary-500 mr-2" />
                    <span>Efeitos sonoros especiais</span>
                  </li>
                  <li className="flex items-center">
                    <Star size={16} className="text-primary-500 mr-2" />
                    <span>Até 2 revisões inclusas</span>
                  </li>
                </ul>
                
                <a href="#formulario" className="btn btn-primary w-full">
                  Solicitar Agora
                </a>
              </div>
            </div>
          </div>
          
          {/* Premium Service */}
          <div className="mt-12 bg-gradient-to-r from-primary-600 to-primary-500 rounded-lg p-6 md:p-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
              <div className="md:col-span-2">
                <h3 className="text-2xl font-bebas mb-4">Remix Premium com Voz Personalizada</h3>
                <p className="mb-6">
                  Eleve o nível do seu remix com introduções narradas profissionalmente, mencionando 
                  nomes, datas e mensagens especiais. O toque perfeito para tornar seu momento verdadeiramente único.
                </p>
                <div className="flex items-baseline">
                  <span className="text-2xl font-bebas mr-2">A partir de R$ 249,90</span>
                  <span className="text-sm opacity-75">(valor adicional ao remix padrão)</span>
                </div>
              </div>
              
              <div className="text-center md:text-right">
                <a href="#formulario" className="btn bg-white text-primary-500 hover:bg-gray-100">
                  Solicitar Premium
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Request Form Section */}
      <section id="formulario" className="py-16 bg-dark-800">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="heading-md mb-6">Solicite seu <span className="text-primary-500">Remix</span></h2>
              <p className="text-gray-300 mb-8">
                Preencha o formulário abaixo com suas informações e preferências musicais. 
                Entraremos em contato em até 24 horas para discutir os detalhes do seu projeto.
              </p>
              
              <div className="mb-8">
                <h3 className="text-xl font-medium mb-4">Outras Formas de Contato</h3>
                
                <div className="space-y-4">
                  <a 
                    href="https://wa.me/5511999999999" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center bg-dark-700 p-4 rounded-lg hover:bg-dark-600 transition-colors"
                  >
                    <MessageSquare size={24} className="text-green-500 mr-3" />
                    <div>
                      <h4 className="font-medium">WhatsApp</h4>
                      <p className="text-sm text-gray-400">(11) 99999-9999</p>
                    </div>
                  </a>
                  
                  <a 
                    href="mailto:contato@sonzerahits.com.br" 
                    className="flex items-center bg-dark-700 p-4 rounded-lg hover:bg-dark-600 transition-colors"
                  >
                    <Mail size={24} className="text-primary-500 mr-3" />
                    <div>
                      <h4 className="font-medium">Email</h4>
                      <p className="text-sm text-gray-400">contato@sonzerahits.com.br</p>
                    </div>
                  </a>
                </div>
              </div>
            </div>
            
            <div>
              <form onSubmit={handleSubmit(onSubmit)} className="bg-dark-700 rounded-lg p-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium mb-1">Nome</label>
                    <input
                      type="text"
                      id="name"
                      className={`w-full bg-dark-800 border ${errors.name ? 'border-red-500' : 'border-dark-600'} rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-primary-500`}
                      placeholder="Seu nome completo"
                      {...register('name', { required: true })}
                    />
                    {errors.name && <p className="text-red-500 text-xs mt-1">Nome é obrigatório</p>}
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-1">Email</label>
                    <input
                      type="email"
                      id="email"
                      className={`w-full bg-dark-800 border ${errors.email ? 'border-red-500' : 'border-dark-600'} rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-primary-500`}
                      placeholder="seu@email.com"
                      {...register('email', { required: true, pattern: /^\S+@\S+$/i })}
                    />
                    {errors.email && <p className="text-red-500 text-xs mt-1">Email válido é obrigatório</p>}
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium mb-1">Telefone (WhatsApp)</label>
                    <input
                      type="tel"
                      id="phone"
                      className={`w-full bg-dark-800 border ${errors.phone ? 'border-red-500' : 'border-dark-600'} rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-primary-500`}
                      placeholder="(11) 99999-9999"
                      {...register('phone', { required: true })}
                    />
                    {errors.phone && <p className="text-red-500 text-xs mt-1">Telefone é obrigatório</p>}
                  </div>
                  
                  <div>
                    <label htmlFor="eventDate" className="block text-sm font-medium mb-1">Data do Evento</label>
                    <input
                      type="date"
                      id="eventDate"
                      className={`w-full bg-dark-800 border ${errors.eventDate ? 'border-red-500' : 'border-dark-600'} rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-primary-500`}
                      {...register('eventDate', { required: true })}
                    />
                    {errors.eventDate && <p className="text-red-500 text-xs mt-1">Data do evento é obrigatória</p>}
                  </div>
                </div>
                
                <div className="mb-4">
                  <label htmlFor="remixType" className="block text-sm font-medium mb-1">Tipo de Remix</label>
                  <select
                    id="remixType"
                    className={`w-full bg-dark-800 border ${errors.remixType ? 'border-red-500' : 'border-dark-600'} rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-primary-500`}
                    {...register('remixType', { required: true })}
                  >
                    <option value="">Selecione uma opção</option>
                    <option value="casamento">Remix para Casamento</option>
                    <option value="15anos">Remix para 15 Anos</option>
                    <option value="aniversario">Remix para Aniversário</option>
                    <option value="outro">Outro (especificar)</option>
                  </select>
                  {errors.remixType && <p className="text-red-500 text-xs mt-1">Tipo de remix é obrigatório</p>}
                </div>
                
                <div className="mb-4">
                  <label htmlFor="songs" className="block text-sm font-medium mb-1">Músicas Desejadas</label>
                  <textarea
                    id="songs"
                    rows={4}
                    className={`w-full bg-dark-800 border ${errors.songs ? 'border-red-500' : 'border-dark-600'} rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-primary-500`}
                    placeholder="Liste as músicas que você gostaria de incluir no remix (artista - nome da música)"
                    {...register('songs', { required: true })}
                  ></textarea>
                  {errors.songs && <p className="text-red-500 text-xs mt-1">Músicas desejadas são obrigatórias</p>}
                </div>
                
                <div className="mb-6">
                  <label htmlFor="message" className="block text-sm font-medium mb-1">Detalhes Adicionais</label>
                  <textarea
                    id="message"
                    rows={4}
                    className="w-full bg-dark-800 border border-dark-600 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-primary-500"
                    placeholder="Compartilhe detalhes adicionais sobre o que você gostaria para o seu remix"
                    {...register('message')}
                  ></textarea>
                </div>
                
                <div className="mb-6">
                  <label className="flex items-start">
                    <input 
                      type="checkbox" 
                      className="mt-1 mr-2"
                      {...register('premium')}
                    />
                    <span className="text-sm">
                      Desejo adicionar o serviço Premium com voz personalizada (+R$ 50,00)
                    </span>
                  </label>
                </div>
                
                <button type="submit" className="btn btn-primary w-full">
                  Enviar Solicitação
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default RemixPage;