export default function EditalIndisponivel() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-background px-4">
      <div className="max-w-xl w-full text-center bg-gradient-card border border-border/50 rounded-2xl p-10 shadow-warm">
        <h1 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
          Edital ainda não disponível
        </h1>

        <p className="text-lg text-muted-foreground mb-8">
          O edital ainda não foi publicado. Assim que estiver disponível, ele será liberado nesta página.
        </p>

        <div className="flex justify-center">
          <a
            href="/"
            className="bg-primary text-primary-foreground px-6 py-3 rounded-xl font-semibold hover:bg-primary/90 transition"
          >
            Voltar para o início
          </a>
        </div>
      </div>
    </section>
  );
}