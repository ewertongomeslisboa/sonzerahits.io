import React from 'react';
import { Link } from 'react-router-dom';
import { Instagram, Facebook, Youtube, Music, Phone, Mail, MapPin } from 'lucide-react';
import Logo from './Logo';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-dark-900 border-t border-dark-600">
      <div className="container-custom py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Column */}
          <div>
            <div className="flex items-center mb-4">
              <Logo className="h-10 w-auto" />
              <span className="ml-2 font-bebas text-2xl">SONZERA HITS</span>
            </div>
            <p className="text-gray-400 mb-4">
              Criando experiências únicas com música para festas, eventos e entretenimento.
            </p>
            <div className="flex space-x-4">
              <SocialLink href="https://instagram.com/sonzerahits" Icon={Instagram} label="Instagram" />
              <SocialLink href="https://facebook.com/sonzerahits" Icon={Facebook} label="Facebook" />
              <SocialLink href="https://youtube.com/sonzerahits" Icon={Youtube} label="YouTube" />
            </div>
          </div>
          
          {/* Links Column */}
          <div>
            <h3 className="text-xl font-bebas mb-4">Links Rápidos</h3>
            <ul className="space-y-2">
              <FooterLink to="/" label="Home" />
              <FooterLink to="/loja" label="Loja" />
              <FooterLink to="/remixes" label="Remixes" />
              <FooterLink to="/sobre" label="Sobre" />
              <FooterLink to="/contato" label="Contato" />
            </ul>
          </div>
          
          {/* Products Column */}
          <div>
            <h3 className="text-xl font-bebas mb-4">Produtos</h3>
            <ul className="space-y-2">
              <FooterLink to="/loja/categoria/sertanejo" label="Pendrive Sertanejo" />
              <FooterLink to="/loja/categoria/funk" label="Pendrive Funk" />
              <FooterLink to="/loja/categoria/pagode" label="Pendrive Pagode" />
              <FooterLink to="/loja/categoria/eletronico" label="Pendrive Eletrônico" />
              <FooterLink to="/remixes/casamento" label="Remix para Casamento" />
              <FooterLink to="/remixes/15-anos" label="Remix para 15 Anos" />
            </ul>
          </div>
          
          {/* Contact Column */}
          <div>
            <h3 className="text-xl font-bebas mb-4">Contato</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <Phone size={18} className="mr-2 text-primary-500 mt-1" />
                <span>(11) 99999-9999</span>
              </li>
              <li className="flex items-start">
                <Mail size={18} className="mr-2 text-primary-500 mt-1" />
                <span>contato@sonzerahits.com.br</span>
              </li>
              <li className="flex items-start">
                <MapPin size={18} className="mr-2 text-primary-500 mt-1" />
                <span>Zona Leste - São Paulo, SP</span>
              </li>
            </ul>
          </div>
        </div>
        
        {/* Bottom Bar */}
        <div className="mt-12 pt-6 border-t border-dark-600 flex flex-col sm:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm mb-4 sm:mb-0">
            &copy; {currentYear} Sonzera Hits. Todos os direitos reservados.
          </p>
          <div className="flex space-x-4 text-sm text-gray-400">
            <Link to="/politica-de-privacidade" className="hover:text-primary-500">Política de Privacidade</Link>
            <Link to="/termos-de-uso" className="hover:text-primary-500">Termos de Uso</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

// Footer Link Component
const FooterLink: React.FC<{to: string; label: string}> = ({to, label}) => {
  return (
    <li>
      <Link to={to} className="text-gray-400 hover:text-primary-500 transition-colors">
        {label}
      </Link>
    </li>
  );
};

// Social Link Component
const SocialLink: React.FC<{href: string; Icon: React.ElementType; label: string}> = ({href, Icon, label}) => {
  return (
    <a 
      href={href} 
      target="_blank" 
      rel="noopener noreferrer"
      className="bg-dark-700 hover:bg-primary-500 p-2 rounded-full transition-colors"
      aria-label={label}
    >
      <Icon size={18} />
    </a>
  );
};

export default Footer;