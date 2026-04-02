import { useState } from "react";
import { Card } from "@/components/ui/card";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "Preciso ter CNPJ para me inscrever?",
    answer: (
      <>
        Não. O programa aceita projetos que ainda não estão formalizados como
        empresa. Basta estar em fase de ideação ou validação.
      </>
    ),
  },
  {
    question: "O programa é gratuito mesmo?",
    answer: (
      <>
        Sim. Totalmente gratuito e equity-free. Nenhum mentor, avaliador ou
        representante do programa está autorizado a cobrar qualquer valor.
        <br />
      </>
    ),
  },
  {
    question: "Preciso morar no Sertão?",
    answer: (
      <>
        Não. O programa é aberto a residentes de qualquer município de
        Pernambuco. No entanto, pelo menos 50% das vagas são destinadas
        prioritariamente a projetos com origem no Sertão Pernambucano.
      </>
    ),
  },
  {
    question: "As atividades são presenciais?",
    answer: (
      <>
        O formato é predominantemente remoto, com possibilidade de encontros
        presenciais em comum acordo. Você pode participar de onde estiver.
      </>
    ),
  },
  {
    question: "Posso inscrever mais de um projeto?",
    answer: (
      <>
        Não. Cada interessado pode submeter apenas um projeto de negócio
        inovador.
      </>
    ),
  },
  {
    question: "Preciso enviar vídeo de pitch na inscrição?",
    answer: (
      <>
        Não é obrigatório, mas é recomendado. O vídeo deve ter no máximo 5
        minutos e apresentar as características do seu produto, serviço ou
        solução.
      </>
    ),
  },
  {
    question: "O que acontece se eu for selecionado?",
    answer: (
      <>
        Você participa de 3 meses de capacitação e mentorias (maio a julho) e
        apresenta seu projeto no Demoday em 14 de julho. Quem conclui todas as
        atividades obrigatórias recebe a qualificação de "Projeto Pré-Incubado"
        e pode ingressar na incubadora.
      </>
    ),
  },
  {
    question: "Como é feita a seleção?",
    answer: (
      <>
        Cada projeto é avaliado por pelo menos dois avaliadores em quatro
        dimensões: equipe, mercado, produto e tecnologia. A pontuação máxima é
        100 pontos.
      </>
    ),
  },
  {
    question: "Minha ideia é muito inicial. Posso me inscrever mesmo assim?",
    answer: (
      <>
        Sim. O programa aceita projetos em fase de ideação, que é justamente o
        estágio de desenvolvimento e teste da ideia e do modelo de negócio.
      </>
    ),
  },
  
];

const FaqSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="FAQ" className="py-20 bg-white">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h3 className="text-2xl sm:text-3xl font-bold text-foreground mb-4">
            Perguntas Frequentes
          </h3>
          <p className="text-muted-foreground">
            Tire suas principais dúvidas sobre o Programa de Pré-Incubação SerTão Inovador.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <Card
              key={index}
              className={`overflow-hidden transition-all duration-300 border-border/50
    ${
      openIndex === index
        ? "bg-gradient-card border-primary/40 shadow-soft"
        : "bg-gradient-card hover:border-primary/30"
    }`}
            >
              <button
                onClick={() => toggle(index)}
                className="w-full flex items-center justify-between p-6 text-left
             hover:bg-primary/5 transition-colors"
              >
                <span className="text-lg font-semibold text-foreground">
                  {faq.question}
                </span>

                <ChevronDown
                  className={`w-5 h-5 transition-all duration-300
    ${
      openIndex === index ? "rotate-180 text-primary" : "text-muted-foreground"
    }`}
                />
              </button>

              <div
                className={`px-6 transition-all duration-300 ease-in-out
    ${
      openIndex === index
        ? "pb-6 opacity-100 max-h-[600px]"
        : "max-h-0 opacity-0 overflow-hidden"
    }`}
              >
                <div className="text-muted-foreground leading-relaxed space-y-3">
                  {faq.answer}
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FaqSection;
