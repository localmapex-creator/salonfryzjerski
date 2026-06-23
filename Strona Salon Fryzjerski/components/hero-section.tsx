import { ArrowRight } from "lucide-react"

export function HeroSection() {
  return (
    <section className="relative flex min-h-screen items-center overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src="/images/hero-salon.png"
          alt="Wnętrze luksusowego salonu fryzjerskiego Studio Elegancji"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-foreground/70 via-foreground/40 to-foreground/10" />
      </div>

      <div className="relative mx-auto w-full max-w-7xl px-6 pt-28 lg:px-10">
        <div className="max-w-2xl">
          <p className="mb-6 text-sm uppercase tracking-[0.3em] text-background/80">
            Salon Fryzjerski Premium
          </p>
          <h1 className="font-serif text-5xl leading-[1.05] text-balance text-background sm:text-6xl lg:text-7xl">
            Twój Styl, <span className="italic">Nasza Pasja</span>
          </h1>
          <p className="mt-8 max-w-xl text-lg leading-relaxed text-pretty text-background/85">
            Odkryj profesjonalną pielęgnację włosów w samym sercu miasta. Umów
            się na wizytę już dziś.
          </p>
          <div className="mt-10 flex flex-wrap items-center gap-4">
            <a
              href="#kontakt"
              className="group inline-flex items-center gap-2 rounded-full bg-background px-8 py-4 text-sm font-medium tracking-wide text-foreground transition-all duration-300 hover:bg-accent"
            >
              Rezerwuj Wizytę
              <ArrowRight className="size-4 transition-transform duration-300 group-hover:translate-x-1" />
            </a>
            <a
              href="#uslugi"
              className="inline-flex items-center gap-2 rounded-full border border-background/60 px-8 py-4 text-sm font-medium tracking-wide text-background transition-all duration-300 hover:bg-background/10"
            >
              Nasze Usługi
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
