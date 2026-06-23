export function SiteFooter() {
  return (
    <footer className="bg-foreground text-background">
      <div className="mx-auto max-w-7xl px-6 py-14 lg:px-10">
        <div className="flex flex-col items-start justify-between gap-8 md:flex-row md:items-center">
          <div>
            <p className="font-serif text-2xl">
              Studio <span className="italic">Elegancji</span>
            </p>
            <p className="mt-2 max-w-sm text-sm leading-relaxed text-background/70">
              Profesjonalna pielęgnacja włosów w samym sercu miasta.
            </p>
          </div>
          <nav className="flex flex-wrap gap-x-8 gap-y-3 text-sm">
            <a href="#uslugi" className="text-background/80 transition-colors hover:text-background">
              Usługi
            </a>
            <a href="#o-nas" className="text-background/80 transition-colors hover:text-background">
              O Nas
            </a>
            <a href="#kontakt" className="text-background/80 transition-colors hover:text-background">
              Kontakt
            </a>
          </nav>
        </div>
        <div className="mt-12 border-t border-background/15 pt-6">
          <p className="text-sm text-background/60">
            © {new Date().getFullYear()} Studio Elegancji. Wszelkie prawa
            zastrzeżone.
          </p>
        </div>
      </div>
    </footer>
  )
}
