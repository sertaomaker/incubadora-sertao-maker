import { Button } from "@/components/ui/button";
import { FileText, PenTool } from "lucide-react";
import ModalEdital from "@/components/ModalEdital";
import heroBanner from "@/assets/hero-banner.jpg";

const HeroSection = () => {
  return (
    <section
      id="inicio"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      <ModalEdital />

      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroBanner}
          alt="Sertão brasileiro com elementos de inovação"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/80 to-sertao-orange/60"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-3xl mx-auto">
          
          {/* Main Announcement */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            Novo Edital Disponível!
          </h1>

          {/* Explanatory Text */}
          <p className="text-lg sm:text-xl text-white/90 mb-8 leading-relaxed">
            A Incubadora Sertão Maker abre inscrições para o novo ciclo de 
            programas de incubação. Se você tem uma startup ou projeto inovador, 
            esta é a oportunidade de receber mentoria especializada, acesso a 
            rede de investidores e recursos para transformar sua ideia em 
            soluções concretas com impacto social e econômico para o Sertão.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button
              size="lg"
              variant="hero"
              className="group flex items-center gap-2"
              onClick={() => window.open('https://drive.google.com/file/d/1Z9I4vpB9fBLtq9DiOb3D2mozLWufo7sY/view?usp=sharing', '_blank')}
            >
              <FileText className="h-5 w-5" />
              Ver Edital
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="bg-white/10 border-white/30 text-white hover:bg-white/20 flex items-center gap-2"
              onClick={() => window.open ('https://programas.sebraestartups.com.br/in/sertaoinovador')}
            >
              <PenTool className="h-5 w-5" />
              Inscrição
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
