"use client"

import { useState } from "react"
import { MapPin, Phone, Clock, ArrowRight } from "lucide-react"

const details = [
  {
    icon: MapPin,
    label: "Adres",
    lines: ["ul. Elegancka 12", "00-001 Warszawa, Polska"],
  },
  {
    icon: Phone,
    label: "Telefon",
    lines: ["+48 22 123 45 67", "kontakt@studioelegancji.pl"],
  },
  {
    icon: Clock,
    label: "Godziny otwarcia",
    lines: ["Pon — Pt: 9:00 — 20:00", "Sob: 9:00 — 16:00"],
  },
]

export function ContactSection() {
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <section id="kontakt" className="bg-background py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="mb-16 max-w-2xl">
          <p className="mb-4 text-sm uppercase tracking-[0.3em] text-muted-foreground">
            Zapraszamy
          </p>
          <h2 className="font-serif text-4xl text-balance text-foreground sm:text-5xl">
            Kontakt
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
            Masz pytania lub chcesz umówić wizytę? Skontaktuj się z nami —
            chętnie pomożemy dobrać idealną usługę dla Ciebie.
          </p>
        </div>

        <div className="grid gap-12 lg:grid-cols-2">
          <div className="flex flex-col gap-8">
            {details.map((item) => (
              <div key={item.label} className="flex items-start gap-5">
                <div className="flex size-12 shrink-0 items-center justify-center rounded-full bg-accent text-accent-foreground">
                  <item.icon className="size-5" strokeWidth={1.5} />
                </div>
                <div>
                  <h3 className="text-sm font-semibold uppercase tracking-wide text-foreground">
                    {item.label}
                  </h3>
                  {item.lines.map((line) => (
                    <p
                      key={line}
                      className="mt-1 leading-relaxed text-muted-foreground"
                    >
                      {line}
                    </p>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="rounded-2xl border border-border bg-card p-8 lg:p-10">
            {submitted ? (
              <div className="flex h-full min-h-64 flex-col items-center justify-center text-center">
                <h3 className="font-serif text-2xl text-card-foreground">
                  Dziękujemy!
                </h3>
                <p className="mt-3 max-w-sm leading-relaxed text-muted-foreground">
                  Twoja wiadomość została wysłana. Skontaktujemy się z Tobą
                  najszybciej, jak to możliwe.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                <div className="grid gap-5 sm:grid-cols-2">
                  <Field id="name" label="Imię i nazwisko" type="text" />
                  <Field id="phone" label="Telefon" type="tel" />
                </div>
                <Field id="email" label="E-mail" type="email" />
                <div className="flex flex-col gap-2">
                  <label
                    htmlFor="message"
                    className="text-sm font-medium text-foreground"
                  >
                    Wiadomość
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    required
                    placeholder="Opisz, czego potrzebujesz..."
                    className="resize-none rounded-xl border border-input bg-background px-4 py-3 text-foreground outline-none transition-colors placeholder:text-muted-foreground/60 focus:border-foreground"
                  />
                </div>
                <button
                  type="submit"
                  className="group mt-2 inline-flex items-center justify-center gap-2 rounded-full bg-foreground px-8 py-4 text-sm font-medium tracking-wide text-background transition-all duration-300 hover:opacity-90"
                >
                  Wyślij wiadomość
                  <ArrowRight className="size-4 transition-transform duration-300 group-hover:translate-x-1" />
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}

function Field({
  id,
  label,
  type,
}: {
  id: string
  label: string
  type: string
}) {
  return (
    <div className="flex flex-col gap-2">
      <label htmlFor={id} className="text-sm font-medium text-foreground">
        {label}
      </label>
      <input
        id={id}
        name={id}
        type={type}
        required
        className="rounded-xl border border-input bg-background px-4 py-3 text-foreground outline-none transition-colors placeholder:text-muted-foreground/60 focus:border-foreground"
      />
    </div>
  )
}
