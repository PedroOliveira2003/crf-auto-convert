import { Card, CardContent } from "@/components/ui/card";
import { Star, Quote } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      name: "João Silva",
      location: "Tarumã/SP",
      rating: 5,
      text: "Atendimento rápido, honesto e de qualidade. Sempre explicam tudo que precisa ser feito no carro. Recomendo demais!"
    },
    {
      name: "Ana Paula",
      location: "Região de Tarumã",
      rating: 5,
      text: "Levo meu carro na CRF há anos. Sempre resolvem tudo com muito cuidado e preço justo. Equipe super profissional!"
    },
    {
      name: "Carlos Santos",
      location: "Tarumã/SP",
      rating: 5,
      text: "Melhor oficina da região! Serviço de qualidade, prazo cumprido e preço honesto. Podem confiar de olhos fechados!"
    }
  ];

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, index) => (
      <Star
        key={index}
        className={`w-5 h-5 ${
          index < rating ? "fill-crf-gold text-crf-gold" : "text-gray-300"
        }`}
      />
    ));
  };

  return (
    <section className="py-20 bg-gradient-to-b from-white to-crf-light-blue">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-crf-dark-blue mb-6">
            O que nossos clientes dizem
          </h2>
          <div className="w-24 h-1 bg-crf-gold mx-auto mb-6"></div>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
            A satisfação dos nossos clientes é nossa maior conquista. Veja alguns depoimentos.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <Card 
              key={index}
              className="border-none shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 relative overflow-hidden"
            >
              <CardContent className="p-8">
                {/* Quote Icon */}
                <div className="absolute top-4 right-4 text-crf-gold/20">
                  <Quote className="w-12 h-12" />
                </div>

                {/* Stars */}
                <div className="flex gap-1 mb-4">
                  {renderStars(testimonial.rating)}
                </div>

                {/* Testimonial Text */}
                <p className="text-gray-700 leading-relaxed mb-6 italic">
                  "{testimonial.text}"
                </p>

                {/* Customer Info */}
                <div className="border-t border-gray-200 pt-4">
                  <h4 className="font-semibold text-crf-dark-blue">
                    {testimonial.name}
                  </h4>
                  <p className="text-sm text-gray-500">
                    {testimonial.location}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Trust Indicators */}
        <div className="mt-16 text-center">
          <div className="inline-flex flex-wrap items-center justify-center gap-8 bg-white p-8 rounded-lg shadow-lg">
            <div className="flex items-center gap-3">
              <div className="flex">
                {renderStars(5)}
              </div>
              <span className="text-crf-dark-blue font-semibold">4.9/5</span>
            </div>
            <div className="w-px h-8 bg-gray-300 hidden md:block"></div>
            <div className="text-center">
              <div className="text-2xl font-bold text-crf-gold">95%</div>
              <div className="text-sm text-gray-600">Clientes Satisfeitos</div>
            </div>
            <div className="w-px h-8 bg-gray-300 hidden md:block"></div>
            <div className="text-center">
              <div className="text-2xl font-bold text-crf-gold">1000+</div>
              <div className="text-sm text-gray-600">Atendimentos Realizados</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;