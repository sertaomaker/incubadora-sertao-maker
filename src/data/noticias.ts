// HERO (agora vem de /public/news/)
const centelhaHero = "/news/centelha.png";
const inovaCaatingaHero = "/news/sebraeStartups.png";
const competSolucoesHero = "/news/Compet-Soluções.png";
const desafiosSociaisHero = "/news/desafiosSociais.jpeg";
const mulheresQueInovamHero = "/news/mulheres-que-inovam.jpeg";
const pernambucanasInovadorasHero = "/news/pernambucanas-inovadoras.jpeg";

// Imagens internas da página de notícias (essas podem continuar importadas)
import noticiaCentelha1 from "@/assets/news/noticias-img/noticiaCompet1.jpeg";
import noticiaCentelha2 from "@/assets/news/noticias-img/noticiaCentelha2.jpeg";
import noticiaInovaCaatinga1 from "@/assets/news/noticias-img/noticiaInovaCaatinga1.jpeg";
import noticiaCompet1 from "@/assets/news/noticias-img/noticiaCompet1.jpeg";
import noticiaCompet2 from "@/assets/news/noticias-img/noticiaCompet2.jpeg";
import noticiaMulheresQueInovam from "@/assets/news/noticias-img/mulheres-que-inovam1.jpeg";
import noticiaPernambucanasInovadoras from "@/assets/news/noticias-img/pernambucanas-inovadoras.jpeg";

export const noticias = {

 

 

  "mulheres-que-inovam": {
    slug: "mulheres-que-inovam",
    title: "Edital Pró-Startups: Mulheres que Inovam",
    description:
      "Programa que fortalece o empreendedorismo feminino e apoia startups lideradas por mulheres no ecossistema de inovação.",
    category: "Editais",
    author: "Equipe Sertão Maker",
    date: "Até 27 Abr",
    readTime: "10 min",
    hero: mulheresQueInovamHero,
    tags: ["Empreendedorismo Feminino", "Inovação", "Startups"],

    content: [
      {
        type: "paragraph",
        text: "O edital Mulheres que Inovam incentiva o empreendedorismo feminino e apoia startups lideradas por mulheres em Pernambuco.",
      },
      {
        type: "image",
        src: noticiaMulheresQueInovam,
        caption:
          "Programa incentiva liderança feminina na inovação. (Imagem gerada por Inteligência Artificial)",
      },
      {
        type: "paragraph",
        text: "A iniciativa faz parte do Programa Inova PE, que busca fortalecer o ecossistema de inovação e empreendedorismo no estado.",
      },
      {
        type: "paragraph",
        text: "O programa oferece apoio a empreendedoras interessadas em desenvolver soluções inovadoras com potencial de impacto econômico e social.",
      },
      {
        type: "paragraph",
        text: "Além do apoio financeiro, as participantes também recebem mentorias, capacitações e acesso a redes de inovação.",
      },
      {
        type: "paragraph",
        text: "A iniciativa busca ampliar a participação feminina no empreendedorismo tecnológico e promover maior igualdade de oportunidades no setor de inovação.",
      },
    ],

    externalLink:
      "https://www.facepe.br/governo-de-pernambuco-lanca-edital-pro-startups-mulheres-que-inovam-e-fortalece-a-lideranca-feminina-no-estado/",
  },

  "pernambucanas-inovadoras": {
    slug: "pernambucanas-inovadoras",
    title: "Edital Pernambucanas Inovadoras",
    description:
      "Edital que apoia projetos liderados por mulheres pesquisadoras, fortalecendo ciência, tecnologia e inovação em Pernambuco.",
    category: "Editais",
    author: "Equipe Sertão Maker",
    date: "Até 11 Mai",
    readTime: "10 min",
    hero: pernambucanasInovadorasHero,
    tags: ["Ciência", "Inovação", "Mulheres no CTI"],

    content: [
      {
        type: "paragraph",
        text: "O edital Pernambucanas Inovadoras apoia projetos de pesquisa liderados por mulheres com potencial de gerar soluções inovadoras.",
      },
      {
        type: "image",
        src: noticiaPernambucanasInovadoras,
        caption:
          "Programa fortalece a participação feminina na ciência. (Imagem gerada por Inteligência Artificial)",
      },
      {
        type: "paragraph",
        text: "A iniciativa busca fortalecer a presença feminina no sistema de ciência, tecnologia e inovação de Pernambuco.",
      },
      {
        type: "paragraph",
        text: "Pesquisadoras podem submeter projetos que envolvam desenvolvimento científico, inovação tecnológica e soluções aplicadas.",
      },
      {
        type: "paragraph",
        text: "Os projetos selecionados recebem apoio para desenvolver pesquisas aplicadas e transformar conhecimento científico em soluções inovadoras.",
      },
      {
        type: "paragraph",
        text: "Além de incentivar a inovação, o programa também promove a equidade de gênero no ambiente científico e tecnológico.",
      },
    ],

    externalLink:
      "https://www.facepe.br/edital-pernambucanas-inovadoras-r-21-milhoes-para-projetos-liderados-por-mulheres-pesquisadoras/",
  },

   
  "desafios-sociais": {
    slug: "desafios-sociais",
    title: "Edital Inovação Aberta para Desafios Sociais",
    description:
      "Edital de inovação aberta que busca soluções para desafios sociais em Pernambuco, conectando startups e instituições.",
    category: "Editais",
    author: "Equipe Sertão Maker",
    date: "Até 22 Dez",
    readTime: "15 min",
    hero: desafiosSociaisHero,
    tags: ["Inovação", "Impacto Social", "Startup"],

    content: [
      {
        type: "paragraph",
        text: "O edital de Inovação Aberta para Desafios Sociais busca incentivar a criação de soluções inovadoras para problemas sociais relevantes em Pernambuco.",
      },
      {
        type: "paragraph",
        text: "A iniciativa promove a colaboração entre startups e instituições de ciência e tecnologia, criando um ambiente de cooperação para o desenvolvimento de soluções de impacto.",
      },
      {
        type: "paragraph",
        text: "Projetos podem atuar em áreas como educação, saúde, sustentabilidade e inclusão social.",
      },
      {
        type: "image",
        src: desafiosSociaisHero,
        caption: "Startups podem colaborar com instituições de pesquisa.",
      },
      {
        type: "paragraph",
        text: "Os participantes recebem apoio financeiro, mentorias e acompanhamento especializado durante o desenvolvimento das soluções.",
      },
      {
        type: "paragraph",
        text: "O objetivo é gerar tecnologias e iniciativas que melhorem a qualidade de vida da população e contribuam para o desenvolvimento social.",
      },
    ],

    externalLink:
      "https://www.facepe.br/facepe-prorroga-o-prazo-de-submissoes-do-edital-332025-inovacao-aberta-para-desafios-sociais/",
  },

"compet-solucoes": {
    slug: "compet-solucoes",
    title: "Edital Aberto: Compet Soluções",
    description:
      "O Compet Soluções apoia empresas e startups com investimento e suporte para desenvolver projetos inovadores em Pernambuco.",
    category: "Editais",
    author: "Equipe Sertão Maker",
    date: "Até 26 Jan",
    readTime: "10 min",
    hero: competSolucoesHero,
    tags: ["Empresas", "Inovação", "Tecnologia"],

    content: [
      {
        type: "paragraph",
        text: "O edital Compet Soluções apoia empresas e startups que desejam desenvolver projetos inovadores capazes de aumentar a competitividade e gerar impacto tecnológico.",
      },
      {
        type: "image",
        src: noticiaCompet1,
        caption:
          "Programa Compet Soluções incentiva projetos inovadores. (Imagem gerada por Inteligência Artificial)",
      },
      {
        type: "paragraph",
        text: "Nesta edição, o programa conta com um investimento total de R$ 2,24 milhões destinados ao financiamento de projetos que promovam inovação em diferentes setores da economia.",
      },
      {
        type: "paragraph",
        text: "Empresas selecionadas recebem apoio financeiro, mentorias e acompanhamento técnico para desenvolver suas soluções e levar novas tecnologias ao mercado.",
      },
      {
        type: "image",
        src: noticiaCompet2,
        caption:
          "Empresas recebem apoio para desenvolver novas soluções. (Imagem gerada por Inteligência Artificial)",
      },
      {
        type: "paragraph",
        text: "O programa incentiva a criação de soluções tecnológicas que contribuam para aumentar a competitividade das empresas e gerar novos produtos, processos e serviços.",
      },
      {
        type: "paragraph",
        text: "A iniciativa faz parte das estratégias de incentivo à inovação e ao empreendedorismo tecnológico em Pernambuco.",
      },
      {
        type: "paragraph",
        text: "Empresas interessadas devem consultar o edital completo para entender os critérios de participação e as etapas do processo de seleção.",
      },
    ],

    externalLink:
      "https://www.facepe.br/compet-solucoes-governo-lanca-nova-edicao-de-r-224-milhoes-para-apoiar-empresas-em-projetos-inovadores/",
    related: ["centelha", "inova-caatinga"],
  },


  
   "inova-caatinga": {
    slug: "inova-caatinga",
    title: "Edital Aberto: Inova Caatinga",
    description:
      "O Inova Caatinga incentiva soluções sustentáveis e inovadoras para fortalecer o bioma e gerar desenvolvimento regional.",
    category: "Editais",
    author: "Equipe Sertão Maker",
    date: "Até 07 Dez",
    readTime: "10 min",
    hero: inovaCaatingaHero,
    tags: ["Bioeconomia", "Inovação", "Sustentabilidade"],

    content: [
      {
        type: "paragraph",
        text: "O programa Inova Caatinga foi criado para incentivar o desenvolvimento de soluções inovadoras voltadas ao bioma Caatinga, um dos ecossistemas mais importantes e exclusivos do Brasil.",
      },
      {
        type: "image",
        src: noticiaInovaCaatinga1,
        caption:
          "Inova Caatinga incentiva soluções sustentáveis para o bioma. (Imagem gerada por Inteligência Artificial)",
      },
      {
        type: "paragraph",
        text: "A iniciativa busca apoiar projetos que utilizem ciência, tecnologia e inovação para promover o uso sustentável dos recursos naturais da região.",
      },
      {
        type: "paragraph",
        text: "Startups, pesquisadores e empreendedores podem submeter propostas que envolvam áreas como bioeconomia, agricultura sustentável, preservação ambiental e desenvolvimento de novos produtos derivados da biodiversidade da Caatinga.",
      },
      {
        type: "paragraph",
        text: "Os participantes selecionados passam por um processo de aceleração com mentorias especializadas, capacitações e conexão com instituições parceiras.",
      },
      {
        type: "paragraph",
        text: "O programa também estimula a criação de novos modelos de negócio que possam gerar renda e desenvolvimento econômico para comunidades locais.",
      },
      {
        type: "paragraph",
        text: "Ao fortalecer iniciativas inovadoras na região, o Inova Caatinga contribui para a preservação do bioma e para o crescimento de um ecossistema de inovação voltado à sustentabilidade.",
      },
    ],

    externalLink: "https://programas.sebraestartups.com.br/in/inovacaatinga",
    related: ["centelha", "compet-solucoes"],
  },


  centelha: {
    slug: "centelha",
    title: "Edital Aberto: Programa Centelha",
    description:
      "O Programa Centelha apoia inovadores com capacitações, recursos e suporte para transformar ideias em startups.",
    category: "Editais",
    author: "Equipe Sertão Maker",
    date: "Até 15 Dez",
    readTime: "10 min",
    hero: centelhaHero,
    tags: ["Startup", "Inovação", "Empreendedorismo"],

    content: [
      {
        type: "paragraph",
        text: "O Programa Centelha é uma iniciativa nacional voltada para incentivar a criação de startups a partir de ideias inovadoras. O objetivo é transformar conhecimento científico e tecnológico em novos negócios capazes de gerar impacto econômico e social.",
      },
      {
        type: "image",
        src: noticiaCentelha1,
        caption:
          "Programa Centelha incentiva a criação de startups inovadoras. (Imagem gerada por Inteligência Artificial)",
      },
      {
        type: "paragraph",
        text: "A iniciativa apoia empreendedores desde as primeiras etapas do desenvolvimento de suas ideias, oferecendo suporte técnico e financeiro para que projetos inovadores possam sair do papel e se transformar em soluções de mercado.",
      },
      {
        type: "paragraph",
        text: "Durante o programa, os participantes passam por etapas de capacitação, mentorias e acompanhamento especializado. Esse processo ajuda os empreendedores a validar suas propostas, entender melhor seu público-alvo e estruturar um modelo de negócio sustentável.",
      },
      {
        type: "image",
        src: noticiaCentelha2,
        caption:
          "Capacitações e mentorias fazem parte da jornada dos participantes. (Imagem gerada por Inteligência Artificial)",
      },
      {
        type: "paragraph",
        text: "Além das mentorias, o programa também oferece recursos financeiros que permitem o desenvolvimento de protótipos, testes de mercado e validação de soluções inovadoras.",
      },
      {
        type: "paragraph",
        text: "O Centelha se tornou uma das principais portas de entrada para quem deseja iniciar uma startup no Brasil, estimulando a cultura de inovação e fortalecendo o ecossistema empreendedor em diversas regiões.",
      },
      {
        type: "paragraph",
        text: "Empreendedores interessados devem acompanhar o edital e realizar a inscrição dentro do prazo estabelecido, apresentando suas ideias e propostas de inovação.",
      },
    ],

    externalLink: "https://pe.programacentelha.com.br/",
    related: [
      "inova-caatinga",
      "compet-solucoes",
      "desafios-sociais",
      "mulheres-que-inovam",
      "pernambucanas-inovadoras",
    ],
  },
};