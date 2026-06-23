const stats = [
  { value: "15+", label: "Lat doświadczenia" },
  { value: "5000+", label: "Zadowolonych klientów" },
  { value: "100%", label: "Pasji w każdym detalu" },
]

export function AboutSection() {
  return (
    <section id="o-nas" className="bg-secondary py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="grid items-center gap-14 lg:grid-cols-2">
          <div className="relative">
            <div className="overflow-hidden rounded-2xl">
              <img
                src="/images/about-salon.png"
                alt="Eleganckie wnętrze salonu Studio Elegancji"
                className="h-full w-full object-cover transition-transform duration-700 hover:scale-105"
              />
            </div>
          </div>

          <div>
            <p className="mb-4 text-sm uppercase tracking-[0.3em] text-muted-foreground">
              Poznaj nas
            </p>
            <h2 className="font-serif text-4xl text-balance text-foreground sm:text-5xl">
              O Nas
            </h2>
            <p className="mt-8 text-lg leading-relaxed text-pretty text-foreground/80">
              W Studio Elegancji łączymy wieloletnie doświadczenie z najnowszymi
              trendami w fryzjerstwie, aby wydobyć z Ciebie to, co
              najpiękniejsze.
            </p>

            <div className="mt-12 grid grid-cols-3 gap-6 border-t border-border pt-10">
              {stats.map((stat) => (
                <div key={stat.label}>
                  <p className="font-serif text-3xl text-foreground sm:text-4xl">
                    {stat.value}
                  </p>
                  <p className="mt-2 text-sm leading-snug text-muted-foreground">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
