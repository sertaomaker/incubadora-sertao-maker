import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Calendar, Clock, ArrowRight, Users, Megaphone, Filter } from "lucide-react";
import { useState } from "react";

import partnershipSebraeImage from "@/assets/news/partnership-sebrae.jpg";
import demoDayImage from "@/assets/news/demo-day.jpg";
import preIncubacaoImage from "@/assets/news/pre-incubacao.jpg";
import workshopInovacaoImage from "@/assets/news/workshop-inovacao.jpg";
import agtechStartupImage from "@/assets/news/agtech-startup.jpg";
import edtechPlatformImage from "@/assets/news/edtech-platform.jpg";

import mulheresQueInovam from "@/assets/news/mulheres-que-inovam.jpeg"
import pernambucanasInovadoras from "@/assets/news/pernambucanas-inovadoras.jpeg"
{/*import centelha from "@/assets/news/centelha.png";
import  sebraeStartups from "@/assets/news/sebraeStartups.png"
import competSolucoes from "@/assets/news/Compet-Soluções.png"
import desafiosSociais from "@/assets/news/desafiosSociais.jpeg"
*/}

const NewsSection = () => {
  const [selectedCategory, setSelectedCategory] = useState("todas");

  const news = [
    {
      type: "processo",
      title: "Edital Pró-Startups: Mulheres que Inovam incentiva empreendedorismo feminino em Pernambuco",
      excerpt: "Iniciativa voltada a empreendedoras representantes de startups pernambucanas interessadas em desenvolver soluções inovadoras. A ação integra o Programa Inova PE, estratégia do Governo de Pernambuco para fortalecer a integração entre ciência, tecnologia, inovação e empreendedorismo, impulsionando o desenvolvimento humano, econômico e tecnológico de Pernambuco.",
      date: "Até 27 Abr",
      readTime: "10 min",
      category: "Editais",
      image: mulheresQueInovam,
      link: "https://www.facepe.br/governo-de-pernambuco-lanca-edital-pro-startups-mulheres-que-inovam-e-fortalece-a-lideranca-feminina-no-estado/"
    },
    {
      type: "processo",
      title: "Edital Pernambucanas Inovadoras fortalece protagonismo feminino na ciência e inovação",
      excerpt: "A iniciativa apoia projetos de pesquisa que possam se transformar em soluções inovadoras e busca valorizar a participação ativa das mulheres em iniciativas de empreendedorismo e inovação, além de promover a equidade de gênero no Sistema de Ciência, Tecnologia e Inovação de Pernambuco.",
      date: "Até 11 Mai",
      readTime: "10 min",
      category: "Editais",
      image: pernambucanasInovadoras,
      link: "https://www.facepe.br/edital-pernambucanas-inovadoras-r-21-milhoes-para-projetos-liderados-por-mulheres-pesquisadoras/"
    },
  ];

  const categories = ["todas", "Parcerias", "Eventos", "Editais", "Capacitação", "Investimentos", "Tecnologia"];

  const filteredNews = selectedCategory === "todas" 
    ? news 
    : news.filter(item => item.category === selectedCategory);

  const getTypeIcon = (type: string) => {
    switch (type) {
      case "noticia": return <Megaphone className="w-5 h-5" />;
      case "evento": return <Users className="w-5 h-5" />;
      case "processo": return <Calendar className="w-5 h-5" />;
      default: return <Calendar className="w-5 h-5" />;
    }
  };

  const getTypeColor = (type: string) => {
    switch (type) {
      case "noticia": return "bg-sertao-green/20 text-sertao-green border-sertao-green/30";
      case "evento": return "bg-sertao-blue/20 text-sertao-blue border-sertao-blue/30";
      case "processo": return "bg-sertao-earth/20 text-sertao-earth border-sertao-earth/30";
      default: return "bg-muted text-muted-foreground";
    }
  };

  const getTypeLabel = (type: string) => {
    switch (type) {
      case "noticia": return "Notícia";
      case "evento": return "Evento";
      case "processo": return "Edital";
      default: return type;
    }
  };

  return (
    <section id="noticias" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-6">
            Notícias, Eventos e Editais
          </h2>
          <p className="text-lg text-muted-foreground">
            Fique por dentro das últimas novidades e oportunidades da Incubadora Sertão Maker
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
            <Filter className="w-4 h-4" />
            <span>Filtrar por categoria:</span>
          </div>
          <div className="flex flex-wrap justify-center gap-2">
            {categories.map((category) => (
              <Button
                key={category}
                variant={selectedCategory === category ? "default" : "outline"}
                size="sm"
                onClick={() => setSelectedCategory(category)}
                className="capitalize"
              >
                {category}
              </Button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredNews.map((item, index) => (
            <Card key={index} className="overflow-hidden bg-background border-border/50 hover:shadow-soft transition-all  duration-300 group">
              <div className="aspect-video overflow-hidden">
                <img 
                  src={item.image} 
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <Badge 
                    variant="outline" 
                    className={`${getTypeColor(item.type)} flex items-center gap-1`}
                  >
                    {getTypeIcon(item.type)}
                    {getTypeLabel(item.type)}
                  </Badge>
                  <Badge variant="secondary" className="text-xs">
                    {item.category}
                  </Badge>
                </div>

                <h3 className="text-xl font-semibold text-foreground mb-3 leading-tight">
                  {item.title}
                </h3>

                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {item.excerpt}
                </p>

                <div className="flex items-center justify-between text-sm text-muted-foreground mb-4">
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4" />
                    <span>{item.date}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4" />
                    <span>{item.readTime}</span>
                  </div>
                </div>

                {/* Botão com link único */}
                <a 
                  href={item.link} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex justify-center items-center w-full px-4 py-2 text-sm font-medium rounded-md border border-transparent bg-background text-foreground hover:bg-primary/10 hover:text-primary transition-all duration-300"
                >
                  {item.type === "processo" ? "Ver Edital" : "Ler Mais"}
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </a>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default NewsSection;
