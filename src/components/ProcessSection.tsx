import { Card } from "@/components/ui/card";
import { AlertCircle, Users, CheckCircle, Lightbulb, Wrench, Target, Calendar } from "lucide-react";

const ProcessSection = () => {
  const steps = [
    {
      icon: AlertCircle,
      title: "Identificação do Problema",
      description: "Mapeamento de dores e necessidades do mercado para definir desafios relevantes.",
      color: "text-sertao-blue"
    },
    {
      icon: Users,
      title: "Identificação segmento de clientes",
      description: "Definição do público-alvo e segmentação para entender quem será impactado.",
      color: "text-sertao-blue"
    },
    {
      icon: CheckCircle,
      title: "Validação Problema e Cliente",
      description: "Testes e entrevistas para validar se o problema existe e se o cliente se identifica.",
      color: "text-sertao-blue"
    },
    {
      icon: Lightbulb,
      title: "Ideação",
      description: "Geração de soluções inovadoras para os problemas validados.",
      color: "text-sertao-blue"
    },
    {
      icon: Wrench,
      title: "Prototipação",
      description: "Desenvolvimento de protótipos ou MVPs para testar as ideias de forma prática.",
      color: "text-sertao-blue"
    },
    {
      icon: Target,
      title: "Validação da Solução",
      description: "Testes com usuários e métricas para garantir que a solução atende ao problema.",
      color: "text-sertao-blue"
    },
    {
      icon: Calendar,
      title: "Planejamento",
      description: "Organização de próximos passos e estratégia de crescimento da startup.",
      color: "text-sertao-blue"
    }
  ];

  return (
    <section id="como-funciona" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-6">
            Como Funciona Nosso Processo
          </h2>
          <p className="text-lg text-muted-foreground">
            Um processo estruturado e personalizado para transformar sua ideia em uma startup de sucesso
          </p>
        </div>

        <div className="relative">
          {/* Process Steps */}
          <div className="grid grid-cols-1 md:grid-cols-7 gap-8 items-stretch">
            {steps.map((step, index) => (
              <div key={index} className="relative h-full flex flex-col">
                {/* Connection Line */}
                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute top-16 left-full w-full h-0.5 bg-border transform translate-x-4 -translate-y-1/2 z-0"></div>
                )}
                
                <Card className="relative z-10 p-6 text-center bg-background border-border/50 hover:shadow-soft transition-all duration-300 h-full flex flex-col">
                  {/* Ícone */}
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 flex-shrink-0">
                    <step.icon className={`w-8 h-8 ${step.color}`} />
                  </div>

                  {/* Título */}
                  <div className="mb-3 flex-shrink-0">
                    <div className="text-sm font-medium text-muted-foreground mb-1">
                      Etapa {index + 1}
                    </div>
                    <h3 className="text-xl font-semibold text-foreground">
                      {step.title}
                    </h3>
                  </div>

                  {/* Descrição */}
                  <p className="text-sm text-muted-foreground flex-1">
                    {step.description}
                  </p>
                </Card>
              </div>
            ))}
          </div>

          {/* Process Duration */}
          <div className="mt-16 text-center">
            <div className="inline-flex items-center gap-4 bg-gradient-card rounded-2xl px-8 py-4 border border-border/50">
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">6-18</div>
                <div className="text-sm text-muted-foreground">Meses</div>
              </div>
              <div className="w-px h-12 bg-border"></div>
              <div className="text-left">
                <div className="font-semibold text-foreground">Duração do Programa</div>
                <div className="text-sm text-muted-foreground">Varia conforme o estágio da startup</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
