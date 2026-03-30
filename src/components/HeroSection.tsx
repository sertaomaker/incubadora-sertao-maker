import { Button } from "@/components/ui/button";
import { FileText, PenTool, CheckCircle } from "lucide-react";
import { Card } from "./ui/card";

import heroBanner from "@/assets/hero-banner.jpg";

import AudioPlayer from "@/components/players/AudioPlayer";
import { Link } from "react-router-dom"; // ✅ ADICIONADO

const HeroSection = () => {
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
    mt-8
    mb-10
    leading-relaxed
    drop-shadow-[0_2px_8px_rgba(0,0,0,0.5)]
  "
          >
            O <strong>Sertão Maker</strong> é uma incubadora que apoia startups
            e projetos inovadores desde a ideia até a prototipação e entrada no
            mercado. Estão abertas as inscrições para o novo edital da
            Incubadora Sertão Maker, com mentoria, infraestrutura e apoio ao
            desenvolvimento de startups inovadoras.
          </p>

          <p
            className="
    text-sm
    sm:text-base
    text-white/90
    mb-6
    drop-shadow-[0_2px_6px_rgba(0,0,0,0.5)]
  "
          ></p>
        </div>

        {/* Announcement Box */}
        <div className="mb-6 flex justify-center px-4">
          <div className="max-w-2xl rounded-2xl bg-white/70 backdrop-blur-md border-orange-400/40 ring-2 ring-orange-400/50 px-0 sm:px-2 py-4 shadow-lg">
            <p className="text-center text-lg sm:text-xl font-bold text-orange-700">
              Edital aberto: Programa de Pré-Incubação
            </p>

            <p className="mt-3 text-center text-base sm:text-lg text-gray-700 leading-relaxed">
              Estão abertas as inscrições para o Programa de Pré-Incubação da
              Incubadora Sertão Maker.
              <br />
              O programa oferece mentorias, capacitação e acompanhamento técnico
              para transformar ideias inovadoras em startups prontas para
              validação e crescimento.
              <br />
              <br />
              <span className="font-semibold text-primary">
                Vagas limitadas.{" "}
                <Link
                  className="text-primary hover:text-orange-600"
                  to="/edital"
                >
                  Inscreva-se aqui
                </Link>
                <br />
                <span className="font-semibold text-primary hover:text-orange-600">
                  <a href="#cronograma">Acessar cronograma do programa</a>
                </span>
              </span>
            </p>

            <div className="mt-4 flex justify-center"></div>
          </div>
        </div>

        {/* CTA Buttons */}
        {/*
        <div className="flex flex-col sm:flex-row gap-4 mb-10 mt-10 justify-center items-center">
          <Button
            size="lg"
            variant="hero"
            className="bg-primary/80 text-white hover:bg-orange-600 border-white/30 hover:text-white flex items-center gap-2"
            onClick={() =>
              window.open(
                "https://ifsertaope.edu.br/editais/edital-n-o-191-2025/",
                "_blank",
              )
            }
          >
            <FileText className="h-5 w-5" />
            Resultado final
          </Button>
        </div>
        */}
      </div>
    </section>
  );
};

export default HeroSection;