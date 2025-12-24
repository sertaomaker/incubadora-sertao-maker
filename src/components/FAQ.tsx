import { useState } from "react";
import { Card } from "@/components/ui/card";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "O que é o Programa Sertão Inovador?",
    answer: (
      <>
        É o programa de incubação de startups do IFSertãoPE, com duração de até
        12 meses, oferecendo capacitações, mentorias individualizadas,
        acompanhamento contínuo e conexão com o ecossistema de inovação — tudo
        100% gratuito e equity-free.
      </>
    ),
  },
  {
    question: "Quem pode participar?",
    answer: (
      <>
        Qualquer pessoa maior de 18 anos, residente em Pernambuco, com uma ideia
        inovadora, um projeto em validação ou uma startup em operação.
        <br />
        💡 Não precisa ter CNPJ.
      </>
    ),
  },
  {
    question: "O programa é pago?",
    answer: (
      <>
        Não. O Sertão Inovador é gratuito e não exige contrapartida financeira
        nem participação societária (equity-free).
      </>
    ),
  },
  {
    question: "Preciso estar vinculado ao IFSertãoPE?",
    answer: (
      <>
        Não. O programa é aberto ao público externo, desde que o participante
        resida em Pernambuco.
      </>
    ),
  },
  {
    question: "Minha ideia ainda está muito no começo. Posso me inscrever?",
    answer: (
      <>
        Sim! Projetos em fase de validação são totalmente elegíveis — o programa
        ajuda justamente a estruturar, validar, testar e evoluir sua ideia. No
        entanto, o ideal é que já se tenha uma ideia amadurecida, caso contrário
        se é apenas uma ideia, o ideal seria ir para o programação de
        pré-incubação que irá abrir em março/26.
      </>
    ),
  },
  {
    question: "E se eu já tiver CNPJ?",
    answer: (
      <>
        Pode participar normalmente, desde que a startup tenha receita anual
        inferior a R$ 4,8 milhões, conforme o edital.
      </>
    ),
  },
  {
    question: "Como funciona o processo de seleção?",
    answer: (
      <>
        As inscrições passam por avaliação em cinco dimensões:
        <ul className="list-disc pl-6 mt-2 space-y-1">
          <li>Equipe</li>
          <li>Problema de mercado</li>
          <li>Produto & tecnologia</li>
          <li>Capital</li>
          <li>Gestão</li>
        </ul>
        <p className="mt-2">
          Cada item recebe nota de avaliadores capacitados para garantir justiça
          e alinhamento.
        </p>
      </>
    ),
  },
  {
    question: "Quantas vagas existem?",
    answer: (
      <>
        Serão selecionados até 25 projetos.
        <br />
        ⚠️ Pelo menos 50% das vagas são destinadas a empreendedores do Sertão
        Pernambucano.
      </>
    ),
  },
  {
    question: "Como será o programa na prática?",
    answer: (
      <>
        Durante 12 meses (pode variar de acordo com a maturidade da startup)
        você terá:
        <ul className="list-disc pl-6 mt-2 space-y-1">
          <li>Capacitações aplicadas e mão na massa</li>
          <li>Mentorias individuais</li>
          <li>Acesso a especialistas de mercado</li>
          <li>Diagnósticos de maturidade</li>
          <li>Créditos em nuvem (Zoho e Amazon AWS)</li>
          <li>Suporte para construir e melhorar seu MVP</li>
          <li>
            Participação no Demoday para apresentar sua solução ao ecossistema
          </li>
        </ul>
        <p className="mt-2">
          A maioria das atividades será online, garantindo flexibilidade.
        </p>
      </>
    ),
  },
  {
    question: "O que é obrigatório durante o programa?",
    answer: (
      <ul className="list-disc pl-6 space-y-1">
        <li>Participar das capacitações quando solicitado</li>
        <li>Cumprir as entregas de cada etapa</li>
        <li>Realizar os diagnósticos de maturidade</li>
        <li>Apresentar seu pitch no Demoday</li>
      </ul>
    ),
  },
  {
    question: "O que é o Demoday?",
    answer: (
      <>
        É o evento final onde as startups apresentam seus pitches para uma banca
        formada por investidores, especialistas, representantes do ecossistema e
        possíveis parceiros.
      </>
    ),
  },
  {
    question: "O que eu ganho ao concluir o programa?",
    answer: (
      <ul className="list-disc pl-6 space-y-1">
        <li>Certificação de Startup Graduada</li>
        <li>Conexões estratégicas</li>
        <li>Estruturação sólida do modelo de negócio</li>
        <li>Fortalecimento da equipe</li>
        <li>
          Maior maturidade e atratividade para editais como Centelha, Inova
          Caatinga, Catalisa, FINEP, entre outros.
        </li>
      </ul>
    ),
  },
  {
    question: "Quais são as datas importantes?",
    answer: (
      <>
        📅 Inscrições: 02 a 23 de dezembro
        <br />
        📅 Resultado final: 26 de janeiro
        <br />
        📅 Início do programa: 02 de fevereiro
        <br />
        📅 Demoday: Dezembro de 2026
      </>
    ),
  },
  {
    question: "Onde me inscrevo?",
    answer: (
      <>
        👉{" "}
        <a
          href="https://programas.sebraestartups.com.br/in/sertaoinovador"
          target="_blank"
          rel="noopener noreferrer"
          className="text-primary underline"
        >
          https://programas.sebraestartups.com.br/in/sertaoinovador
        </a>
      </>
    ),
  },
  {
    question: "Como tiro dúvidas?",
    answer: (
      <>
        Use o e-mail oficial da incubadora:
        <br />
        📧{" "}
        <a
          href="mailto:isa@ifsertao-pe.edu.br"
          className="text-primary underline"
        >
          isa@ifsertao-pe.edu.br
        </a>
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
          <h3 className="text-2xl sm:text-3xl font-bold text-foreground mb-4" >
            Perguntas Frequentes
          </h3>
          <p className="text-muted-foreground">
            Tire suas principais dúvidas sobre a Incubadora Sertão Maker.
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
