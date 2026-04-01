import { CalendarDays, Clock, Users, GraduationCap } from "lucide-react";

const cronograma = [
  {
    etapa: "INSCRIÇÕES E SELEÇÃO",
    icon: Users,
    items: [
      {
        titulo: "Período de inscrições",
        inicio: "01/04/2026",
        termino: "17/04/2026",
      },
      {
        titulo: "Avaliação e seleção",
        inicio: "23/04/2026",
        termino: "29/04/2026",
      },
      {
        titulo: "Divulgação do resultado preliminar",
        inicio: "30/04/2026",
        termino: "30/04/2026",
      },
      {
        titulo: "Prazo de recursos",
        inicio: "01/05/2026",
        termino: "03/05/2026",
      },
      {
        titulo: "Divulgação do resultado final",
        inicio: "04/05/2026",
        termino: "04/05/2026",
      },
    ],
  },
  {
    etapa: "CAPACITAÇÃO EMPREENDEDORA",
    icon: GraduationCap,
    items: [
      {
        titulo: "Atividades de capacitação empreendedora e mentorias",
        inicio: "06/05/2026",
        termino: "08/07/2026",
      },
      {
        titulo: "Demoday de apresentação das soluções",
        inicio: "14/07/2026",
        termino: "14/07/2026",
      },
    ],
  },
];

export default function Cronograma() {
  return (
    <section id="cronograma" className="py-16 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 space-y-14">
        {/* TÍTULO */}
        <div className="text-center max-w-4xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Cronograma do Programa
          </h2>
          <p className="text-lg text-muted-foreground">
            Confira todas as etapas e datas importantes do edital
          </p>
        </div>

        {/* ETAPAS */}
        {cronograma.map((bloco, index) => {
          const Icon = bloco.icon;

          return (
            <div key={index} className="space-y-6">
              {/* HEADER DA ETAPA */}
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-2xl bg-blue-100 flex items-center justify-center shadow-soft">
                  <Icon className="w-7 h-7 text-primary" />
                </div>

                <h3 className="text-xl sm:text-2xl font-bold text-foreground">
                  {bloco.etapa}
                </h3>
              </div>

              {/* GRID DOS CARDS */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {bloco.items.map((item, i) => (
                  <div
                    key={i}
                    className="relative bg-white rounded-2xl shadow-md border border-border/40 overflow-hidden hover:shadow-xl transition-all duration-300"
                  >
                    {/* BARRA TOPO */}
                    <div className="h-2 bg-gradient-to-r from-primary to-primary" />

                    <div className="p-6">
                      {/* TÍTULO */}
                      <h4 className="font-semibold text-foreground mb-5">
                        {item.titulo}
                      </h4>

                      {/* INÍCIO */}
                      <div className="flex items-center gap-2 px-4 py-3 rounded-xl bg-blue-50 border border-blue-200 mb-3">
                        <CalendarDays className="w-4 h-4 text-primary" />
                        <span className="text-sm text-primary font-medium">
                          Início:{" "}
                          <span className="font-semibold text-foreground">
                            {item.inicio}
                          </span>
                        </span>
                      </div>

                      {/* TÉRMINO */}
                      <div className="flex items-center gap-2 px-4 py-3 rounded-xl bg-orange-50 border border-orange-200">
                        <Clock className="w-4 h-4 text-orange-600" />
                        <span className="text-sm text-orange-700 font-medium">
                          Término:{" "}
                          <span className="font-semibold text-foreground">
                            {item.termino}
                          </span>
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}