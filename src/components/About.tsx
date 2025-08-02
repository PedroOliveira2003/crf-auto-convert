import { Card, CardContent } from "@/components/ui/card";
import { Target, Eye, Heart } from "lucide-react";
const About = () => {
  const values = [{
    icon: <Target className="w-8 h-8" />,
    title: "Missão",
    description: "Garantir a segurança e o desempenho dos veículos com excelência técnica e atendimento humanizado."
  }, {
    icon: <Eye className="w-8 h-8" />,
    title: "Visão",
    description: "Ser reconhecida como a oficina mais confiável da região."
  }, {
    icon: <Heart className="w-8 h-8" />,
    title: "Valores",
    description: "Transparência • Qualidade • Respeito ao cliente • Comprometimento • Aperfeiçoamento contínuo"
  }];
  return <section id="sobre" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* About Section */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-crf-dark-blue mb-6">
              Sobre Nós
            </h2>
            <div className="w-24 h-1 bg-crf-gold mx-auto mb-8"></div>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
            <div>
              <div className="space-y-6">
                <p className="text-lg text-gray-700 leading-relaxed">
                  A <strong className="text-crf-dark-blue">CRF Centro Automotivo</strong>, localizada em Tarumã/SP, 
                  é referência em serviços automotivos de qualidade.
                </p>
                
                <p className="text-lg text-gray-700 leading-relaxed">
                  Atuamos com foco total na confiança, transparência e excelência técnica, 
                  oferecendo soluções completas em manutenção preventiva e corretiva.
                </p>
                
                <p className="text-lg text-gray-700 leading-relaxed">
                  Nossa equipe é apaixonada por carros, e isso se reflete em cada detalhe do atendimento.
                </p>

                <div className="grid grid-cols-2 gap-6 pt-6">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-crf-gold mb-2">5+</div>
                    <div className="text-sm text-gray-600">Anos de Experiência</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-crf-gold mb-2">1000+</div>
                    <div className="text-sm text-gray-600">Clientes Satisfeitos</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="relative z-10">
                <img src="/lovable-uploads/7be3ab7f-75e0-4409-8215-d41537bcb9b4.png" alt="CRF Centro Automotivo - Fachada" className="rounded-lg shadow-2xl w-full h-auto" />
              </div>
              <div className="absolute -top-4 -right-4 w-full h-full bg-gradient-to-br from-crf-gold to-yellow-300 rounded-lg -z-10"></div>
            </div>
          </div>

          {/* Mission, Vision, Values */}
          <div className="grid md:grid-cols-3 gap-8">
            {values.map((item, index) => <Card key={index} className="border-none shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                <CardContent className="p-8 text-center">
                  <div className="mb-6 inline-flex p-4 bg-gradient-to-br from-crf-gold to-yellow-300 rounded-full text-crf-dark-blue">
                    {item.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-crf-dark-blue mb-4">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {item.description}
                  </p>
                </CardContent>
              </Card>)}
          </div>
        </div>
      </div>
    </section>;
};
export default About;