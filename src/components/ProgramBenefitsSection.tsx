import { Card } from "@/components/ui/card";
import {
  CheckCircle,
  Star,
  Handshake,
  Award,
  Globe,
  Lightbulb,
} from "lucide-react";

import VideoPlayer from "./players/VideoPlayer";
import AudioPlayer from "./players/AudioPlayer";

const beneficios = [
  {
    icon: Award,
    title: "Crédito AWS",
    description: "Até 5 mil dólares em créditos para infraestrutura em nuvem.",
  },
  {
    icon: Star,
    title: "Crédito Zoho",
    description: "Até 30 mil reais em ferramentas de gestão e produtividade.",
  },
  {
    icon: Handshake,
    title: "Mentorias",
    description: "Acompanhamento com especialistas em negócios e tecnologia.",
  },
  {
    icon: Lightbulb,
    title: "Captação de Recursos",
    description: "Apoio na escrita de editais e busca por financiamento.",
  },
  {
    icon: CheckCircle,
    title: "Networking",
    description: "Conexão com startups, investidores e parceiros estratégicos.",
  },
  {
    icon: Globe,
    title: "Formação Técnica",
    description:
      "Cursos Cisco, Huawei, PUC-Rio (Programação, IA e outras áreas).",
  },
];

const destaques = [
  {
    icon: CheckCircle,
    title: "Plano Individual",
    description:
      "Diagnóstico completo e plano estratégico personalizado para cada startup.",
  },
  {
    icon: Handshake,
    title: "Mentores do Brasil",
    description:
      "Rede nacional de mentores com experiência prática em startups.",
  },
  {
    icon: Award,
    title: "Captação na Prática",
    description: "Experiência real em estruturação e submissão de propostas.",
  },
  {
    icon: Globe,
    title: "Incubação Internacional",
    description: "Incubação cruzada com incubadora parceira da Europa.",
  },
];

const ProgramBenefitsSection = () => {
  return (
    <section className="py-20 pt-10 bg-background/10">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Benefícios */}
        <div className="max-w-5xl mx-auto mb-20">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground text-center mb-3">
            Benefícios do Programa
          </h2>

          <p className="max-w-2xl mx-auto text-black sm:text-lg text-center mb-4 leading-relaxed text-black/90 font-regular drop-shadow-md">
            Ouça um breve podcast com uma explicação clara sobre o programa,
            seus objetivos, como ele funciona e as oportunidades que oferece aos
            participantes.
          </p>

          {/* Audio Player */}
          <AudioPlayer
            src="src\assets\audios\incubacao-gratuita-e-equity-free-em-pernambuco.m4a"
            title="Desenvolvendo Inovação no Sertão: Conheça o Sertão Inovador"
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {beneficios.map((item, index) => (
              <Card
                key={index}
                className="p-6 text-center bg-gradient-card border-border/50 hover:shadow-soft transition-all duration-300"
              >
                <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <item.icon className="w-7 h-7 text-primary" />
                </div>

                <h3 className="text-lg font-semibold text-foreground mb-2">
                  {item.title}
                </h3>

                <p className="text-muted-foreground text-sm">
                  {item.description}
                </p>
              </Card>
            ))}
          </div>
        </div>

        {/* Destaques */}
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground text-center mb-10">
            Destaques do Programa
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {destaques.map((item, index) => (
              <Card
                key={index}
                className="p-6 text-center bg-gradient-card border-border/50 hover:shadow-soft transition-all duration-300"
              >
                <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <item.icon className="w-7 h-7 text-primary" />
                </div>

                <h3 className="text-lg font-semibold text-foreground mb-2">
                  {item.title}
                </h3>

                <p className="text-muted-foreground text-sm">
                  {item.description}
                </p>
              </Card>
            ))}
          </div>

          <p className="max-w-4xl mx-auto text-black sm:text-lg text-center mt-10 leading-relaxed text-black/90 font-regular drop-shadow-md">
            Abaixo estão dois vídeos: o primeiro apresenta o Programa de
            Incubação Sertão Inovador 2026, explicando seus objetivos,
            benefícios e como ele funciona. O segundo é um tutorial prático,
            passo a passo, mostrando como realizar a inscrição corretamente.
          </p>

          {/* Videos */}
          <section className="max-w-7xl mx-auto mt-10 px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Video 1 */}
              <VideoPlayer src="hE8J_Dg6TBk" type="youtube" />

              {/* Video 2 */}
              <VideoPlayer src="ek940joQs6E" type="youtube" />
            </div>
          </section>
        </div>
      </div>
    </section>
  );
};

export default ProgramBenefitsSection;
