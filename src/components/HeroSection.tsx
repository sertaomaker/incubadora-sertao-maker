import { Button } from "@/components/ui/button";
import { FileText, PenTool, CheckCircle } from "lucide-react";
import { Card } from "./ui/card";

import heroBanner from "@/assets/hero-banner.jpg";

const HeroSection = () => {
  const beneficios = [
    "Crédito AWS 5 mil dólares",
    "Crédito Zoho - até 30 mil reais",
    "Mentorias",
    "Ajuda na captação de recursos / escrita de editais",
    "Networking",
    "Cursos Cisco, Huawei, PUC Rio (Programação, IA e etc)"
  ];

  const destaques = [
    "Diagnóstico e plano individual de cada startup",
    "Mentorias com uma rede de mentores de todo o Brasil",
    "Experiência na captação de recursos",
    "Incubação cruzada com incubadora da Europa"
  ];

  return (
    <section
      id="inicio"
      className="relative flex flex-col items-center justify-center overflow-hidden"
    >
  

      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroBanner}
          alt="Sertão brasileiro com elementos de inovação"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/80 to-sertao-orange/60"></div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 text-center py-20">
        <div className="max-w-3xl mx-auto mb-8">
          <h1 className="text-2xl sm:text-4xl lg:text-5xl font-bold text-white mb-4 mt-10 leading-tight">
            Novo Edital Disponível!
          </h1>
          <p className="text-base sm:text-lg text-white/90 mb-6 leading-relaxed">
            A Incubadora Sertão Maker abre inscrições para o novo ciclo de programas de incubação. 
            Se você tem uma startup ou projeto inovador, esta é a oportunidade de receber mentoria especializada, 
            acesso a rede de investidores e recursos para transformar sua ideia em soluções concretas 
            com impacto social e econômico para o Sertão.
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
              className="bg-white/20 text-white hover:bg-white/90 border-white/30 hover:text-primary  flex items-center gap-2"
              onClick={() => window.open('https://programas.sebraestartups.com.br/in/sertaoinovador', '_blank')}
            >
              <PenTool className="h-5 w-5" />
              Inscrição
            </Button>
          </div>
        </div>

    {/* Announcement Box */}
<div className="mt-8 flex justify-center">
  <div
    className="
      bg-white/70
      backdrop-blur-md
      border border-orange-400/40
      rounded-full
      px-8 py-3
      shadow-md
    "
  >
    <p className="text-orange-700  text-base sm:text-lg font-bold text-center ">
      ⏰ Inscrições abertas:{" "}
      <span className="text-primary">02/12/2025</span> a{" "}
      <span className="text-primary">04/01/2026</span>
    </p>
  </div>
</div>

        {/* Benefícios */}
<div className="max-w-5xl mx-auto mb-10 text-left">
  <h2 className="text-2xl sm:text-3xl font-semibold text-white mb-4 text-center">Benefícios</h2>
  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
    {beneficios.map((item, idx) => (
      <Card
        key={idx}
        className="flex items-center backdrop-blur-sm gap-3 p-4 bg-white/20 border border-white/30 rounded-2xl shadow-soft hover:-translate-y-1  font-semibold font-semibold hover:shadow-lg transition-all duration-300"
      >
        <CheckCircle className="flex align-center text-orange-400 h-5 w-5 flex-shrink-0 mt-1" />
        <p className="text-white text-sm leading-snug">{item}</p>
      </Card>
    ))}
  </div>
</div>

{/* Destaques */}
<div className="max-w-5xl mx-auto text-left">
  <h2 className="text-2xl sm:text-3xl font-semibold text-white mb-4 text-center">Destaques do Programa</h2>
  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
    {destaques.map((item, idx) => (
      <Card
        key={idx}
        className="flex items-center backdrop-blur-sm gap-3 p-4 bg-white/20 border border-white/30 rounded-2xl shadow-soft hover:-translate-y-1 font-semibold  hover:shadow-lg transition-all duration-300"
      >
        <CheckCircle className="text-orange-400 h-5 w-5 flex-shrink-0 mt-1" />
        <p className="text-white text-sm leading-snug">{item}</p>
      </Card>
    ))}
  </div>
</div>


      </div>
    </section>
  );
};

export default HeroSection;
