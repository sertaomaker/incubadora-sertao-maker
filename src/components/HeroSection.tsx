import { Button } from "@/components/ui/button";
import { FileText, PenTool, CheckCircle } from "lucide-react";
import { Card } from "./ui/card";

import heroBanner from "@/assets/hero-banner.jpg";

import AudioPlayer from "@/components/AudioPlayer";


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
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-primary/80 to-black/40"></div>

      </div>

      {/* Main Content */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 text-center py-20">
        <div className="max-w-3xl mx-auto mb-8">
         <h1
  className="
    text-2xl
    sm:text-4xl
    lg:text-5xl
    font-bold
    text-white
    mb-4
    mt-10
    leading-snug
  "
>
  Transformando ideias em protótipos no coração do Sertão
</h1>


<p
  className="
    text-base
    sm:text-lg
    text-white
    mb-3
    leading-relaxed
    drop-shadow-[0_2px_8px_rgba(0,0,0,0.5)]
  "
>
  O <strong>Sertão Maker</strong> é uma incubadora que apoia startups e projetos
  inovadores desde a ideia até a prototipação e entrada no mercado.
  Estão abertas as inscrições para o novo edital da Incubadora Sertão Maker, com mentoria, infraestrutura e apoio ao desenvolvimento de startups inovadoras.
</p>

<p
  className="
    text-sm
    sm:text-base
    text-white/90
    mb-6
    drop-shadow-[0_2px_6px_rgba(0,0,0,0.5)]
  "
>
</p>
 
 </div>



    {/* Announcement Box */}
  <div className="mb-5 flex justify-center px-4">
    <div
      className="
        bg-white/70
        backdrop-blur-md
        border border-orange-400/40
        rounded-2xl sm:rounded-full
        px-6 sm:px-8
        py-3
        ring-2 ring-orange-400/50
        animate-pulse
        shadow-lg
        max-w-full
      "
    >
      <p className="text-orange-700 text-sm sm:text-lg font-bold text-center leading-snug">
        ⏰ Inscrições abertas:
        <span className="block sm:inline">
          {" "}
          <span className="text-primary">02/12/25</span> a{" "}
          <span className="text-primary">04/01/26</span>
        </span>
      </p>
    </div>
  </div>

    {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 mb-6 justify-center items-center">
            <Button
              size="lg"
              variant="hero"
              className="group flex items-center gap-2"
              onClick={() => window.open('https://ifsertaope.edu.br/editais/edital-n-o-191-2025/', '_blank')}
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
