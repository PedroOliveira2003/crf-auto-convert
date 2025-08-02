import { useState } from "react";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { Card } from "@/components/ui/card";

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const images = [
    {
      src: "/lovable-uploads/7be3ab7f-75e0-4409-8215-d41537bcb9b4.png",
      alt: "Fachada da CRF Centro Automotivo",
      title: "Nossa Sede"
    },
    {
      src: "/lovable-uploads/214a310f-a700-4c84-a531-76b1d37baac1.png",
      alt: "Fachada externa com logotipo",
      title: "Identificação Externa"
    },
    {
      src: "/lovable-uploads/f566058c-3227-40ac-85f2-d9b518f950a4.png",
      alt: "Área de trabalho interna",
      title: "Área de Trabalho"
    },
    {
      src: "/lovable-uploads/1b0326b6-ad5d-4112-898d-8bc419349921.png",
      alt: "Veículos em atendimento",
      title: "Atendimento ao Cliente"
    },
    {
      src: "/lovable-uploads/87f65995-8301-461c-9af9-3c006501f55c.png",
      alt: "Vista da oficina com veículos",
      title: "Estrutura Completa"
    }
  ];

  return (
    <section id="galeria" className="py-20 bg-gradient-to-b from-crf-light-blue to-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-crf-dark-blue mb-6">
            Nossa Estrutura
          </h2>
          <div className="w-24 h-1 bg-crf-gold mx-auto mb-6"></div>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
            Conheça nossas instalações modernas e equipadas para oferecer o melhor serviço automotivo da região.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {images.map((image, index) => (
            <Card 
              key={index}
              className="group cursor-pointer overflow-hidden border-none shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
              onClick={() => setSelectedImage(image.src)}
            >
              <div className="relative aspect-video overflow-hidden">
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-crf-dark-blue/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute bottom-4 left-4 right-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <h3 className="font-semibold text-lg">{image.title}</h3>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Image Modal */}
        <Dialog open={!!selectedImage} onOpenChange={() => setSelectedImage(null)}>
          <DialogContent className="max-w-4xl w-full p-0 border-none">
            {selectedImage && (
              <img
                src={selectedImage}
                alt="Imagem ampliada"
                className="w-full h-auto rounded-lg"
              />
            )}
          </DialogContent>
        </Dialog>

        {/* Call to Action */}
        <div className="text-center mt-12">
          <div className="inline-flex items-center gap-4 bg-gradient-to-r from-crf-gold to-yellow-300 text-crf-dark-blue p-6 rounded-lg shadow-lg">
            <div className="w-3 h-3 bg-crf-dark-blue rounded-full animate-pulse"></div>
            <span className="font-semibold text-lg">
              Venha conhecer nossa estrutura pessoalmente!
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Gallery;