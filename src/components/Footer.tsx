import { MapPin, Phone, Clock, Instagram, MessageCircle } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-crf-dark-blue text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="md:col-span-2">
            <img 
              src="/lovable-uploads/49a7d715-d856-48d6-b604-81c428b53521.png" 
              alt="CRF Centro Automotivo" 
              className="h-16 mb-4"
            />
            <p className="text-gray-300 leading-relaxed mb-4">
              Seu carro em boas mãos. Serviços automotivos com confiança, agilidade e qualidade técnica.
            </p>
            <div className="flex gap-4">
              <a 
                href="https://wa.me/5518996542996" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-2 bg-green-500 rounded-full hover:bg-green-600 transition-colors"
              >
                <MessageCircle className="w-5 h-5" />
              </a>
              <a 
                href="https://www.instagram.com/crf_automotivo/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-2 bg-pink-500 rounded-full hover:bg-pink-600 transition-colors"
              >
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-crf-gold mb-4">Links Rápidos</h3>
            <ul className="space-y-2">
              <li>
                <a href="#sobre" className="text-gray-300 hover:text-crf-gold transition-colors">
                  Sobre
                </a>
              </li>
              <li>
                <a href="#servicos" className="text-gray-300 hover:text-crf-gold transition-colors">
                  Serviços
                </a>
              </li>
              <li>
                <a href="#galeria" className="text-gray-300 hover:text-crf-gold transition-colors">
                  Galeria
                </a>
              </li>
              <li>
                <a href="#contato" className="text-gray-300 hover:text-crf-gold transition-colors">
                  Contato
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold text-crf-gold mb-4">Contato</h3>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-crf-gold mt-0.5 flex-shrink-0" />
                <div className="text-sm text-gray-300">
                  Av. Tarumã, 236 – Centro<br />
                  Tarumã/SP – 19820-041
                </div>
              </div>
              
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-crf-gold flex-shrink-0" />
                <a 
                  href="https://wa.me/5518996542996" 
                  className="text-sm text-gray-300 hover:text-crf-gold transition-colors"
                >
                  (18) 99654-2996
                </a>
              </div>

              <div className="flex items-start gap-3">
                <Clock className="w-5 h-5 text-crf-gold mt-0.5 flex-shrink-0" />
                <div className="text-sm text-gray-300">
                  Seg-Sex: 08h às 18h<br />
                  Sáb: 08h às 12h
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700 mt-8 pt-8 text-center">
          <p className="text-gray-400 text-sm">
            © {currentYear} CRF Centro Automotivo. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;