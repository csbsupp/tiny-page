import { journeys } from "./data/journeys";
import { steps } from "./data/steps";

export default function App() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      <header className="relative overflow-hidden border-b border-slate-200 bg-white">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-100 via-white to-slate-200" />
        <div className="relative mx-auto max-w-7xl px-6 py-16 lg:px-8 lg:py-24">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">Einfach erklärt</p>
            <h2 className="mt-2 text-3xl font-semibold tracking-tight">So funktionieren Prompt-Journeys</h2>
            <p className="mt-4 text-lg text-slate-600">
              Eine Prompt-Journey ist kein komplizierter Befehl, sondern ein geführter Dialog.
              Die KI stellt nacheinander verständliche Fragen, reagiert auf die Antworten und führt schrittweise zu einem konkreten Ergebnis.
            </p>

            </div>

          </div>
          <div className="grid gap-6 md:grid-cols-4 mt-12">
            <img
                  src={`${import.meta.env.BASE_URL}video/manual.gif`}
                  className="w-full rounded-2xl shadow"
                />

            {steps.map((item) => (
              <div key={item.step} className="rounded-3xl bg-white p-6 shadow-sm ring-1 ring-slate-200">
                <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-slate-900 text-sm font-semibold text-white">
                  {item.step}
                </div>
                <h3 className="text-lg font-semibold">{item.title}</h3>
                <p className="mt-3 text-sm leading-6 text-slate-600">{item.text}</p>
              </div>
            ))}
          </div>
                                
              <div className="mt-8 flex flex-wrap gap-3">
                <a
                  href="#journeys"
                  className="rounded-2xl bg-slate-900 px-5 py-3 text-sm font-medium text-white shadow-sm transition hover:scale-[1.01]"
                >
                  Journeys ansehen
                </a>

              </div>

        </div>

      </header>

      <main className="mx-auto max-w-7xl px-6 py-16 lg:px-8">


        <section id="journeys"><div className="mb-8 rounded-2xl border border-amber-300 bg-amber-50 p-4 text-sm text-amber-900">
          <strong>Hinweis:</strong> QR-Codes funktionieren je nach Gerät nicht immer zuverlässig.
          Falls sich nichts öffnet, verwenden Sie bitte den Button direkt unter der jeweiligen Journey.
        </div>
          <div className="mb-8 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">Übersicht</p>
              <h2 className="mt-2 text-3xl font-semibold tracking-tight">HUG QuickWins</h2>
              <p className="mt-4 max-w-3xl text-lg text-slate-600">
                Wähle eine Journey aus und starte direkt.
              </p>
            </div>
          </div>

          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3 grid-rows-[repeat(5, auto)]">
            {journeys.map((journey) => (
              <article
                key={journey.title}
                className="rounded-3xl bg-white p-6 shadow-sm ring-1 ring-slate-200 transition hover:-translate-y-0.5 hover:shadow-md grid grid-rows-subgrid row-span-5 gap-2"
              >
                <div className="flex items-center justify-between gap-4">
                  <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-700">
                    {journey.tag}
                  </span>

                </div>    
                <div>
                  <h3 className="text-xl font-semibold">{journey.title}</h3>
                  <p className="text-sm text-slate-500">{journey.audience}</p>
                </div>
                <p className="text-sm leading-6 text-slate-600">{journey.description}</p>
                <img
                  src={journey.qrImage}
                  alt={`QR-Code für ${journey.title}`}
                  className="h-46 w-46 rounded-lg border border-slate-200 object-cover"
                />
                <div className="flex items-center justify-between gap-4">
                  <span className="text-sm font-medium text-slate-500">Dauer: {journey.duration}</span>
                  <a
                    href={journey.href}
                    target={journey.href.startsWith("http") ? "_blank" : undefined}
                    rel={journey.href.startsWith("http") ? "noreferrer" : undefined}
                    className="rounded-2xl bg-slate-900 px-4 py-2 text-sm font-medium text-white transition hover:scale-[1.01]"
                  >
                    {journey.cta}
                  </a>
                </div>
              </article>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}
