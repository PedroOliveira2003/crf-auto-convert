import { MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

const WhatsAppButton = () => {
  const handleClick = () => {
    window.open("https://wa.me/5518996542996?text=Olá! Gostaria de agendar um atendimento na CRF Centro Automotivo.", "_blank");
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <Button
        onClick={handleClick}
        variant="whatsapp"
        size="lg"
        className="rounded-full shadow-2xl hover:shadow-3xl animate-pulse hover:animate-none w-14 h-14 p-0"
      >
        <MessageCircle className="w-7 h-7" />
      </Button>
    </div>
  );
};

export default WhatsAppButton;