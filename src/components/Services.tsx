import { 
  Wrench, 
  Settings, 
  Circle, 
  Zap, 
  Gauge, 
  Search, 
  Wind, 
  ClipboardCheck,
  Eye
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const Services = () => {
  const services = [
    {
      icon: <Settings className="w-8 h-8" />,
      title: "Troca de Óleo",
      description: "Óleo de qualidade e filtros originais para maior durabilidade do motor"
    },
    {
      icon: <Gauge className="w-8 h-8" />,
      title: "Alinhamento e Balanceamento",
      description: "Equipamentos de precisão para melhor dirigibilidade e economia de combustível"
    },
    {
      icon: <Circle className="w-8 h-8" />,
      title: "Freios e Embreagem",
      description: "Manutenção e reparo completo dos sistemas de freio e embreagem"
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Injeção Eletrônica",
      description: "Diagnóstico e reparo de sistemas eletrônicos automotivos"
    },
    {
      icon: <Wrench className="w-8 h-8" />,
      title: "Suspensão",
      description: "Manutenção completa de amortecedores, molas e componentes"
    },
    {
      icon: <Search className="w-8 h-8" />,
      title: "Scanner e Diagnóstico",
      description: "Diagnóstico computadorizado para identificação precisa de problemas"
    },
    {
      icon: <ClipboardCheck className="w-8 h-8" />,
      title: "Revisão Preventiva",
      description: "Check-up completo para evitar problemas futuros"
    },
    {
      icon: <Eye className="w-8 h-8" />,
      title: "Pré-vistoria",
      description: "Preparação completa do veículo para vistoria veicular"
    }
  ];

  return (
    <section id="servicos" className="py-20 bg-gradient-to-b from-white to-crf-light-blue">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-crf-dark-blue mb-6">
            Nossos Serviços
          </h2>
          <div className="w-24 h-1 bg-crf-gold mx-auto mb-6"></div>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
            Equipe qualificada, tecnologia de ponta e atendimento transparente. 
            Um centro automotivo completo para cuidar do seu carro.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card 
              key={index} 
              className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-none shadow-lg"
            >
              <CardContent className="p-6">
                <div className="flex flex-col items-center text-center">
                  <div className="mb-4 p-4 bg-gradient-to-br from-crf-gold to-yellow-300 rounded-full text-crf-dark-blue group-hover:scale-110 transition-transform duration-300">
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-crf-dark-blue mb-3">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <div className="inline-flex items-center gap-4 bg-white p-6 rounded-lg shadow-lg">
            <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
            <span className="text-crf-dark-blue font-semibold">
              Atendimento de Segunda a Sexta: 08h às 18h | Sábado: 08h às 12h
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;