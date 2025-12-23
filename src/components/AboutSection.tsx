import { Card } from "@/components/ui/card";
import { Target, Users, Lightbulb, TrendingUp } from "lucide-react";
import { Button } from "./ui/button";

const AboutSection = () => {
  const features = [
    {
      icon: Target,
      title: "Impacto Local",
      description: "Focamos em soluções que atendam às necessidades específicas do Sertão Central brasileiro."
    },
    {
      icon: Users,
      title: "Ecossistema Colaborativo",
      description: "Conectamos empreendedores, mentores, investidores e parceiros locais."
    },
    {
      icon: Lightbulb,
      title: "Inovação Sustentável",
      description: "Promovemos tecnologias que respeitam o meio ambiente e a cultura local."
    },
    {
      icon: TrendingUp,
      title: "Crescimento Escalável",
      description: "Preparamos startups para crescer além das fronteiras regionais."
    }
  ];

  return (
    <section id="sobre" className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-6">
            Sobre a Incubadora Sertão Maker
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            A Incubadora Sertão Maker é uma iniciativa que conecta inovação, empreendedorismo 
            e impacto social no sertão nordestino. Atuamos no apoio ao desenvolvimento de startups 
            com soluções sustentáveis, inclusivas e tecnológicas, transformando desafios regionais 
            em oportunidades globais.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <Card key={index} className="p-6 text-center bg-gradient-card border-border/50 hover:shadow-soft transition-all duration-300">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <feature.icon className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">
                {feature.title}
              </h3>
              <p className="text-muted-foreground">
                {feature.description}
              </p>
            </Card>
          ))}
        </div>


  {/* Infraestrutura */}
<div className="mt-20">
  <div className="max-w-4xl mx-auto text-center mb-12">
    <h3 className="text-2xl sm:text-3xl font-bold text-foreground mb-4">
      Infraestrutura de Apoio
    </h3>
    <p className="text-lg text-muted-foreground">
      As startups incubadas têm acesso à infraestrutura completa dos 
      <strong className="text-foreground"> laboratórios do Centro de Inovação Maker</strong>, 
      pensada para prototipagem, testes e produção de conteúdo.
    </p>
  </div>

  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
    <Card className="p-6 text-center bg-gradient-card border-border/50">
      <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
        <Lightbulb className="w-7 h-7 text-primary" />
      </div>
      <h4 className="text-lg font-semibold text-foreground mb-2">
        Laboratório de IoT
      </h4>
      <p className="text-muted-foreground">
        Espaço equipado para desenvolvimento e testes de soluções em Internet das Coisas,
        automação e hardware.
      </p>
    </Card>

    <Card className="p-6 text-center bg-gradient-card border-border/50">
      <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
        <TrendingUp className="w-7 h-7 text-primary" />
      </div>
      <h4 className="text-lg font-semibold text-foreground mb-2">
        Impressoras 3D
      </h4>
      <p className="text-muted-foreground">
        Prototipagem rápida de produtos físicos, peças funcionais e validação de ideias.
      </p>
    </Card>

    <Card className="p-6 text-center bg-gradient-card border-border/50">
      <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
        <Users className="w-7 h-7 text-primary" />
      </div>
      <h4 className="text-lg font-semibold text-foreground mb-2">
        Sala de Podcast
      </h4>
      <p className="text-muted-foreground">
        Ambiente estruturado para gravação de podcasts, vídeos institucionais
        e produção de conteúdo das startups.
      </p>
    </Card>
  </div>
</div>
      
        {/*CTA*/}
        
        <div className="mt-16 text-center">
          <div className="inline-block bg-gradient-card rounded-2xl p-8 border border-border/50">
            <h3 className="text-xl font-semibold text-foreground mb-4">
              Quer fazer parte desta comunidade?
            </h3>
            <p className="text-muted-foreground mb-6">
              Junte-se a nossa comunidade e transforme sua ideia em realidade!
            </p>
            <Button  onClick={() => window.open ('https://chat.whatsapp.com/Db4BlZX087kEM3wPYhsRsj?mode=ems_share_c')} variant="cta" size="lg">
                Acessar comunidade
            </Button>
          </div>
        </div>

        {/* Vision Section */}
        <div className="mt-20 bg-gradient-card rounded-3xl p-8 md:p-12">
          <div className="max-w-3xl mx-auto text-center">
            <h3 className="text-2xl sm:text-3xl font-bold text-foreground mb-6">
              Nossa Visão
            </h3>
            <p className="text-lg text-muted-foreground mb-8">
              Ser reconhecida como a principal ponte entre o potencial empreendedor do 
              Sertão Central e as oportunidades de inovação nacional e internacional, 
              contribuindo para o desenvolvimento socioeconômico sustentável da região.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
              <div>
                <div className="text-3xl font-bold text-primary mb-2">100%</div>
                <div className="text-muted-foreground">Foco em Impacto Social</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary mb-2">360°</div>
                <div className="text-muted-foreground">Suporte Completo</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary mb-2">24/7</div>
                <div className="text-muted-foreground">Mentoria Disponível</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;