import { Scissors, Palette, Sparkles } from "lucide-react"

const services = [
  {
    icon: Scissors,
    title: "Strzyżenie i Modelowanie",
    description:
      "Precyzyjne strzyżenie dopasowane do kształtu twarzy i stylu życia. Tworzymy fryzury, które podkreślają Twój charakter i są łatwe w codziennej pielęgnacji.",
  },
  {
    icon: Palette,
    title: "Koloryzacja Premium",
    description:
      "Wyrafinowane techniki koloryzacji z użyciem najwyższej jakości produktów. Od subtelnego rozświetlenia po odważne metamorfozy — zawsze z dbałością o kondycję włosa.",
  },
  {
    icon: Sparkles,
    title: "Pielęgnacja Spa",
    description:
      "Rytuały regeneracyjne, które przywracają włosom blask i witalność. Głębokie odżywienie, masaż skóry głowy i chwila pełnego relaksu w eleganckim wnętrzu.",
  },
]

export function ServicesSection() {
  return (
    <section id="uslugi" className="bg-background py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="mb-16 max-w-2xl">
          <p className="mb-4 text-sm uppercase tracking-[0.3em] text-muted-foreground">
            Co Oferujemy
          </p>
          <h2 className="font-serif text-4xl text-balance text-foreground sm:text-5xl">
            Nasze Usługi
          </h2>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {services.map((service) => (
            <article
              key={service.title}
              className="group flex flex-col rounded-2xl border border-border bg-card p-8 transition-all duration-500 hover:-translate-y-1 hover:border-foreground/30 hover:shadow-xl hover:shadow-foreground/5"
            >
              <div className="mb-6 flex size-14 items-center justify-center rounded-full bg-accent text-accent-foreground transition-colors duration-500 group-hover:bg-foreground group-hover:text-background">
                <service.icon className="size-6" strokeWidth={1.5} />
              </div>
              <h3 className="font-serif text-2xl text-card-foreground">
                {service.title}
              </h3>
              <p className="mt-4 leading-relaxed text-muted-foreground">
                {service.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
