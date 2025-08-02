import { Button } from "@/components/ui/button";
import { MessageCircle, Phone } from "lucide-react";

const Hero = () => {
  const handleWhatsAppClick = () => {
    window.open("https://wa.me/5518996542996?text=Olá! Gostaria de agendar um atendimento na CRF Centro Automotivo.", "_blank");
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-crf-dark-blue via-crf-dark-blue to-primary overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-32 h-32 border-2 border-crf-gold rounded-full animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-24 h-24 border-2 border-crf-gold/50 rounded-full animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/4 w-16 h-16 border-2 border-crf-gold/30 rounded-full animate-pulse delay-500"></div>
      </div>

      <div className="container mx-auto px-4 z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Logo */}
          <div className="mb-8">
            <img 
              src="/lovable-uploads/49a7d715-d856-48d6-b604-81c428b53521.png" 
              alt="CRF Centro Automotivo" 
              className="h-32 md:h-40 mx-auto mb-6 drop-shadow-2xl"
            />
          </div>

          {/* Main Heading */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
            CRF Centro
            <span className="block bg-gradient-to-r from-crf-gold to-yellow-300 bg-clip-text text-transparent">
              Automotivo
            </span>
          </h1>

          {/* Slogan */}
          <p className="text-xl md:text-2xl lg:text-3xl text-crf-gold font-semibold mb-6">
            Seu carro em boas mãos.
          </p>

          {/* Description */}
          <p className="text-lg md:text-xl text-gray-300 mb-10 max-w-3xl mx-auto leading-relaxed">
            Serviços automotivos com confiança, agilidade e qualidade técnica. 
            Cuidamos do seu carro como se fosse nosso.
          </p>

          {/* Call to Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              onClick={handleWhatsAppClick}
              variant="hero" 
              size="xl"
              className="w-full sm:w-auto"
            >
              <MessageCircle className="mr-2" />
              Agende seu atendimento agora
            </Button>
            
            <Button 
              onClick={() => window.open("tel:+5518996542996", "_self")}
              variant="outline" 
              size="xl"
              className="w-full sm:w-auto border-crf-gold text-crf-gold hover:bg-crf-gold hover:text-crf-dark-blue"
            >
              <Phone className="mr-2" />
              (18) 99654-2996
            </Button>
          </div>

          {/* Trust Indicators */}
          <div className="mt-12 flex flex-wrap justify-center gap-6 text-sm text-gray-400">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-crf-gold rounded-full"></div>
              <span>Mais de 15 anos de experiência</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-crf-gold rounded-full"></div>
              <span>Equipamentos modernos</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-crf-gold rounded-full"></div>
              <span>Atendimento personalizado</span>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-crf-gold rounded-full flex justify-center">
          <div className="w-1 h-3 bg-crf-gold rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;