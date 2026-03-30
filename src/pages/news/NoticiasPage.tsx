import { useParams, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { noticias } from "@/data/noticias";

import { FaWhatsapp } from "react-icons/fa";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Header from "@/components/Header";

import {
  Calendar,
  Clock,
  User,
  ExternalLink,
  Linkedin,
} from "lucide-react";

const NoticiasPage = () => {
  const { slug } = useParams();
  const noticia = noticias[slug as keyof typeof noticias];

  const [progress, setProgress] = useState(0);

  // ✅ força voltar pro topo quando abrir outra notícia
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [slug]);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const height =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;

      setProgress((scrollTop / height) * 100);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!noticia) {
    return (
      <div className="text-center py-32 text-muted-foreground">
        Notícia não encontrada
      </div>
    );
  }

  const shareUrl = window.location.href;

  return (
    <section className="py-10 bg-gradient-to-br from-blue-100 via-indigo-100 to-purple-100">
      {/* progress bar */}
      <div
        className="fixed top-0 left-0 h-1 bg-gradient-to-r from-primary to-blue-400 z-50 transition-all"
        style={{ width: `${progress}%` }}
      />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 bg-white/40 backdrop-blur-xl p-8 rounded-2xl shadow-xl">
        {/* breadcrumb */}
        <div className="text-sm text-muted-foreground mb-8">
          <Link to="/" className="hover:text-primary">
            Início
          </Link>
          {" / "}
          <Link to="/#noticias" className="hover:text-primary">
            Notícias
          </Link>
          {" / "}
          {noticia.title}
        </div>

        {/* HERO */}
        <div className="relative mb-12 rounded-2xl overflow-hidden">
          <img src={noticia.hero} className="w-full h-[420px] object-cover" />

          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />

          <div className="absolute bottom-8 left-8 text-white max-w-xl">
            <Badge className="mb-3 bg-white/20 backdrop-blur text-white border-none">
              {noticia.category}
            </Badge>

            <h1 className="text-4xl font-bold leading-tight">
              {noticia.title}
            </h1>

            <div className="flex gap-4 text-sm mt-3 opacity-90">
              <span className="flex items-center gap-1">
                <User className="w-4 h-4" />
                {noticia.author}
              </span>

              <span className="flex items-center gap-1">
                <Calendar className="w-4 h-4" />
                {noticia.date}
              </span>

              <span className="flex items-center gap-1">
                <Clock className="w-4 h-4" />
                {noticia.readTime}
              </span>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-[1fr_280px] gap-12">
          {/* conteúdo */}
          <div>
            {/* tags */}
            {noticia.tags && (
              <div className="flex flex-wrap gap-2 mb-8">
                {noticia.tags.map((tag: string) => (
                  <Badge key={tag} variant="secondary">
                    {tag}
                  </Badge>
                ))}
              </div>
            )}

            <Card className="p-10 bg-gradient-to-br from-indigo-50 to-blue-50 border-indigo-200 shadow-xl space-y-8 animate-fade-in max-w-3xl mx-auto">
              {noticia.content.map((block: any, index: number) => {
                if (block.type === "title") {
                  return (
                    <h2 key={index} className="text-2xl font-bold mt-6">
                      {block.text}
                    </h2>
                  );
                }

                if (block.type === "paragraph") {
                  return (
                    <p
                      key={index}
                      className="text-muted-foreground text-lg leading-relaxed"
                    >
                      {block.text}
                    </p>
                  );
                }

                if (block.type === "image") {
                  return (
                    <div key={index}>
                      <img
                        src={block.src}
                        className="w-full rounded-xl shadow-xl ring-1 ring-border my-8 cursor-zoom-in transition hover:scale-[1.02]"
                        onClick={() => window.open(block.src)}
                      />

                      <p className="text-sm text-muted-foreground text-center mt-2 italic">
                        {block.caption}
                      </p>
                    </div>
                  );
                }

                if (block.type === "list") {
                  return (
                    <ul
                      key={index}
                      className="space-y-3 border-l-4 border-primary/40 pl-5"
                    >
                      {block.items.map((item: string, i: number) => (
                        <li key={i} className="text-muted-foreground text-lg">
                          {item}
                        </li>
                      ))}
                    </ul>
                  );
                }

                return null;
              })}
            </Card>

            {noticia.externalLink && (
              <div className="mt-8">
                <Button
                  onClick={() => window.open(noticia.externalLink)}
                  className="bg-primary hover:bg-primary/90"
                >
                  Acessar edital completo
                  <ExternalLink className="ml-2 h-4 w-4" />
                </Button>
              </div>
            )}
          </div>

          {/* SIDEBAR */}
          <div className="space-y-8 sticky top-24">
            <Card className="p-6 bg-gradient-to-br from-blue-100 via-indigo-100 to-purple-100 shadow-lg">
              <h3 className="text-lg font-bold mb-4 border-b pb-2">
                Outras notícias
              </h3>

              <div className="space-y-4">
                {Object.values(noticias)
                  .filter((n) => n.slug !== noticia.slug)
                  .slice(0, 6)
                  .map((item) => (
                    <Link
                      key={item.slug}
                      to={`/noticia/${item.slug}`}
                      className="block group"
                    >
                      <div className="flex gap-3">
                        <img
                          src={item.hero}
                          className="w-16 h-16 object-cover rounded-lg group-hover:scale-105 transition"
                        />

                        <div>
                          <p className="text-sm font-medium group-hover:text-primary">
                            {item.title}
                          </p>

                          <p className="text-xs text-muted-foreground">
                            {item.date}
                          </p>
                        </div>
                      </div>
                    </Link>
                  ))}
              </div>
            </Card>
          </div>
        </div>
      </div>

      <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-3">
        <Button
          size="icon"
          className="bg-[#25D366] hover:bg-[#1ebe5d] text-white shadow-lg"
          onClick={() =>
            window.open(
              `https://wa.me/?text=${encodeURIComponent(window.location.href)}`
            )
          }
        >
          <FaWhatsapp className="w-5 h-5" />
        </Button>

        <Button
          size="icon"
          className="bg-[#0A66C2] hover:bg-[#004182] text-white shadow-lg"
          onClick={() =>
            window.open(
              `https://www.linkedin.com/sharing/share-offsite/?url=${window.location.href}`
            )
          }
        >
          <Linkedin className="w-5 h-5" />
        </Button>
      </div>
    </section>
  );
};

export default NoticiasPage;