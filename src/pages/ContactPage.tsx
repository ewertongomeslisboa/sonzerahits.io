import React from 'react';
import { Phone, Mail, MapPin, Send, Clock, MessageSquare, Instagram } from 'lucide-react';
import { useForm } from 'react-hook-form';

const ContactPage: React.FC = () => {
  const { 
    register, 
    handleSubmit, 
    formState: { errors } 
  } = useForm();
  
  const onSubmit = (data: any) => {
    console.log(data);
    // In a real app, this would submit the form data to a backend
    alert('Mensagem enviada com sucesso! Entraremos em contato em breve.');
  };
  
  return (
    <>
      {/* Hero Section */}
      <div className="pt-32 pb-16 bg-dark-900">
        <div className="container-custom">
          <div className="max-w-2xl">
            <h1 className="heading-lg mb-6">
              Entre em <span className="text-primary-500">Contato</span>
            </h1>
            <p className="text-xl text-gray-300">
              Estamos aqui para ajudar! Envie-nos uma mensagem e responderemos o mais breve possível.
            </p>
          </div>
        </div>
      </div>
      
      {/* Contact Section */}
      <section className="py-16 bg-black">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <div className="mb-12">
                <h2 className="text-2xl font-bebas mb-6">Informações de Contato</h2>
                
                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="bg-primary-500/20 p-3 rounded-full mr-4">
                      <Phone size={24} className="text-primary-500" />
                    </div>
                    <div>
                      <h3 className="font-medium mb-1">Telefone</h3>
                      <p className="text-gray-300">(11) 99999-9999</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="bg-primary-500/20 p-3 rounded-full mr-4">
                      <Mail size={24} className="text-primary-500" />
                    </div>
                    <div>
                      <h3 className="font-medium mb-1">Email</h3>
                      <p className="text-gray-300">contato@sonzerahits.com.br</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="bg-primary-500/20 p-3 rounded-full mr-4">
                      <MapPin size={24} className="text-primary-500" />
                    </div>
                    <div>
                      <h3 className="font-medium mb-1">Localização</h3>
                      <p className="text-gray-300">Zona Leste - São Paulo, SP</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="bg-primary-500/20 p-3 rounded-full mr-4">
                      <Clock size={24} className="text-primary-500" />
                    </div>
                    <div>
                      <h3 className="font-medium mb-1">Horário de Atendimento</h3>
                      <p className="text-gray-300">Segunda a Sexta: 9h às 18h</p>
                      <p className="text-gray-300">Sábado: 10h às 14h</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div>
                <h2 className="text-2xl font-bebas mb-6">Redes Sociais</h2>
                
                <div className="space-y-4">
                  <a 
                    href="https://wa.me/5511999999999"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center bg-dark-800 p-4 rounded-lg hover:bg-dark-700 transition-colors"
                  >
                    <MessageSquare size={24} className="text-green-500 mr-4" />
                    <div>
                      <h3 className="font-medium">WhatsApp</h3>
                      <p className="text-sm text-gray-400">Clique para conversar</p>
                    </div>
                  </a>
                  
                  <a 
                    href="https://instagram.com/sonzerahits"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center bg-dark-800 p-4 rounded-lg hover:bg-dark-700 transition-colors"
                  >
                    <Instagram size={24} className="text-pink-500 mr-4" />
                    <div>
                      <h3 className="font-medium">Instagram</h3>
                      <p className="text-sm text-gray-400">@sonzerahits</p>
                    </div>
                  </a>
                </div>
              </div>
            </div>
            
            <div>
              <h2 className="text-2xl font-bebas mb-6">Envie-nos uma Mensagem</h2>
              
              <form onSubmit={handleSubmit(onSubmit)} className="bg-dark-800 rounded-lg p-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium mb-1">Nome</label>
                    <input
                      type="text"
                      id="name"
                      className={`w-full bg-dark-700 border ${errors.name ? 'border-red-500' : 'border-dark-600'} rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-primary-500`}
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
                      className={`w-full bg-dark-700 border ${errors.email ? 'border-red-500' : 'border-dark-600'} rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-primary-500`}
                      placeholder="seu@email.com"
                      {...register('email', { required: true, pattern: /^\S+@\S+$/i })}
                    />
                    {errors.email && <p className="text-red-500 text-xs mt-1">Email válido é obrigatório</p>}
                  </div>
                </div>
                
                <div className="mb-4">
                  <label htmlFor="phone" className="block text-sm font-medium mb-1">Telefone</label>
                  <input
                    type="tel"
                    id="phone"
                    className={`w-full bg-dark-700 border ${errors.phone ? 'border-red-500' : 'border-dark-600'} rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-primary-500`}
                    placeholder="(11) 99999-9999"
                    {...register('phone', { required: true })}
                  />
                  {errors.phone && <p className="text-red-500 text-xs mt-1">Telefone é obrigatório</p>}
                </div>
                
                <div className="mb-4">
                  <label htmlFor="subject" className="block text-sm font-medium mb-1">Assunto</label>
                  <select
                    id="subject"
                    className={`w-full bg-dark-700 border ${errors.subject ? 'border-red-500' : 'border-dark-600'} rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-primary-500`}
                    {...register('subject', { required: true })}
                  >
                    <option value="">Selecione uma opção</option>
                    <option value="remixes">Remix Personalizado</option>
                    <option value="pendrives">Compra de Pendrive</option>
                    <option value="partnership">Parceria</option>
                    <option value="other">Outro Assunto</option>
                  </select>
                  {errors.subject && <p className="text-red-500 text-xs mt-1">Assunto é obrigatório</p>}
                </div>
                
                <div className="mb-6">
                  <label htmlFor="message" className="block text-sm font-medium mb-1">Mensagem</label>
                  <textarea
                    id="message"
                    rows={5}
                    className={`w-full bg-dark-700 border ${errors.message ? 'border-red-500' : 'border-dark-600'} rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-primary-500`}
                    placeholder="Digite sua mensagem aqui..."
                    {...register('message', { required: true })}
                  ></textarea>
                  {errors.message && <p className="text-red-500 text-xs mt-1">Mensagem é obrigatória</p>}
                </div>
                
                <button type="submit" className="btn btn-primary w-full">
                  <Send size={18} className="mr-2" />
                  Enviar Mensagem
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
      
      {/* FAQ Section */}
      <section className="py-16 bg-dark-800">
        <div className="container-custom">
          <h2 className="heading-md text-center mb-12">Perguntas <span className="text-primary-500">Frequentes</span></h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-dark-700 rounded-lg p-6">
              <h3 className="text-xl font-medium mb-3">Quanto tempo leva para receber meu remix?</h3>
              <p className="text-gray-300">
                Nossos remixes personalizados são entregues em até 5 dias úteis após a confirmação do pedido e pagamento.
                Para casos urgentes, temos a opção de entrega expressa (consulte valores).
              </p>
            </div>
            
            <div className="bg-dark-700 rounded-lg p-6">
              <h3 className="text-xl font-medium mb-3">Como funciona a entrega dos pendrives?</h3>
              <p className="text-gray-300">
                Realizamos entregas via Correios para todo o Brasil. Para clientes da cidade de São Paulo,
                oferecemos também a opção de entrega por motoboy (taxa adicional) ou retirada em local combinado.
              </p>
            </div>
            
            <div className="bg-dark-700 rounded-lg p-6">
              <h3 className="text-xl font-medium mb-3">Posso solicitar alterações no meu remix?</h3>
              <p className="text-gray-300">
                Sim! Todos os nossos pacotes incluem até 2 revisões sem custo adicional.
                Revisões adicionais podem ser solicitadas mediante taxa extra.
              </p>
            </div>
            
            <div className="bg-dark-700 rounded-lg p-6">
              <h3 className="text-xl font-medium mb-3">Os pendrives recebem atualizações?</h3>
              <p className="text-gray-300">
                Atualizamos nossas coletâneas mensalmente com os lançamentos mais recentes.
                Para clientes que já adquiriram um pendrive, oferecemos a opção de atualização por uma taxa reduzida.
              </p>
            </div>
            
            <div className="bg-dark-700 rounded-lg p-6">
              <h3 className="text-xl font-medium mb-3">Quais formas de pagamento são aceitas?</h3>
              <p className="text-gray-300">
                Aceitamos pagamentos via PIX, transferência bancária, cartão de crédito (parcelamento em até 3x sem juros)
                e boleto bancário.
              </p>
            </div>
            
            <div className="bg-dark-700 rounded-lg p-6">
              <h3 className="text-xl font-medium mb-3">Vocês trabalham com outros serviços além de remixes?</h3>
              <p className="text-gray-300">
                Sim! Além dos remixes personalizados e pendrives com coletâneas, também oferecemos serviços de DJ
                para eventos. Entre em contato para mais informações e orçamentos.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ContactPage;