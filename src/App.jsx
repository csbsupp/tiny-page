export default function App() {
  const introVideoUrl = ""; // z. B. YouTube-Embed-URL
  const introImageUrl = ""; // z. B. /tiny-page/intro-prompt-journeys.jpg

  const journeys = [
    {
      title: "Sanfter Einstieg in ChatGPT",
      audience: "Für Einsteiger:innen ohne KI-Erfahrung",
      description:
        "Eine sehr einfache erste Journey mit klarer Führung, wenig Fachbegriffen und einem schnellen Erfolgserlebnis.",
      duration: "2–3 Minuten",
      status: "Bereit",
      cta: "Journey öffnen",
      href: "https://chatgpt.com/?prompt=",
      tag: "Einfach starten",
    },
    {
      title: "KVP-Scout",
      audience: "Für Mitarbeitende mit Verbesserungsideen",
      description:
        "Hilft Schritt für Schritt, Verschwendung, Reibungen und Verbesserungspotenziale im Arbeitsalltag zu erkennen.",
      duration: "5–8 Minuten",
      status: "Bereit",
      cta: "Journey öffnen",
      href: "https://chatgpt.com/?prompt=",
      tag: "Prozesse verbessern",
    },
    {
      title: "Excel-Trainer",
      audience: "Für Anwender:innen, die Excel sicherer nutzen möchten",
      description:
        "Lernt wichtige Excel-Funktionen interaktiv und mit sofortigem Feedback – in kleinen, gut verständlichen Schritten.",
      duration: "10–15 Minuten",
      status: "In Vorbereitung",
      cta: "Mehr erfahren",
      href: "#",
      tag: "Lernen",
    },
    {
      title: "IT-Helper",
      audience: "Für klarere Support-Anfragen",
      description:
        "Führt Nutzende so durch ihr Problem, dass am Ende eine vollständige, verständliche Support-Anfrage entsteht.",
      duration: "3–5 Minuten",
      status: "Bereit",
      cta: "Journey öffnen",
      href: "https://chatgpt.com/?prompt=",
      tag: "Support",
    },
  ];

  const steps = [
    {
      step: "1",
      title: "Journey öffnen",
      text: "Der Einstieg ist bewusst einfach gehalten: QR-Code scannen oder auf einen Startbutton klicken.",
    },
    {
      step: "2",
      title: "Frage für Frage geführt werden",
      text: "Die KI stellt nacheinander verständliche Fragen und passt den nächsten Schritt an die Antwort an.",
    },
    {
      step: "3",
      title: "Direkt nutzbares Ergebnis erhalten",
      text: "Am Ende steht ein konkretes Resultat, z. B. eine Mail, ein Backlog, eine Idee oder eine strukturierte Anfrage.",
    },
  ];

  const examples = [
    "E-Mail formulieren",
    "Problem strukturieren",
    "Ideen entwickeln",
    "Abläufe verbessern",
    "Excel üben",
    "Support-Anfrage vorbereiten",
  ];

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      <header className="relative overflow-hidden border-b border-slate-200 bg-white">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-100 via-white to-slate-200" />
        <div className="relative mx-auto max-w-7xl px-6 py-16 lg:px-8 lg:py-24">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div>
              <div className="mb-4 inline-flex items-center rounded-full border border-slate-200 bg-white px-3 py-1 text-sm text-slate-600 shadow-sm">
                Prompt-Journeys für den einfachen Einstieg in KI
              </div>
              <h1 className="max-w-2xl text-4xl font-semibold tracking-tight sm:text-5xl">
                Schritt für Schritt zu einem brauchbaren Ergebnis
              </h1>
              <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-600">
                Prompt-Journeys sind strukturierte KI-Dialoge, die Mitarbeitende sicher, einfach und mit klarer Führung durch eine Aufgabe begleiten.
                Statt mit einer leeren Eingabe zu starten, werden Nutzende Schritt für Schritt zum Ziel geführt.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <a
                  href="#journeys"
                  className="rounded-2xl bg-slate-900 px-5 py-3 text-sm font-medium text-white shadow-sm transition hover:scale-[1.01]"
                >
                  Journeys ansehen
                </a>
                <a
                  href="#so-funktioniert-es"
                  className="rounded-2xl border border-slate-300 bg-white px-5 py-3 text-sm font-medium text-slate-700 shadow-sm transition hover:bg-slate-100"
                >
                  So funktioniert es
                </a>
              </div>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              <div className="rounded-3xl bg-white p-4 shadow-sm ring-1 ring-slate-200">
                {introImageUrl ? (
                  <img
                    src={introImageUrl}
                    alt="Einführung in Prompt-Journeys"
                    className="aspect-[16/10] w-full rounded-2xl object-cover"
                  />
                ) : (
                  <div className="aspect-[16/10] rounded-2xl bg-gradient-to-br from-slate-200 to-slate-100 p-4">
                    <div className="flex h-full flex-col justify-between rounded-2xl border border-dashed border-slate-300 bg-white/70 p-4">
                      <div>
                        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">Bild / Illustration</p>
                        <h3 className="mt-2 text-lg font-semibold">Was ist eine Prompt-Journey?</h3>
                        <p className="mt-2 text-sm text-slate-600">
                          Hier kann später ein erklärendes Bild, ein Screenshot oder eine einfache Infografik eingefügt werden.
                        </p>
                      </div>
                      <div className="rounded-xl bg-white px-3 py-2 text-sm text-slate-500 shadow-sm">
                        Empfohlen: Illustration, Ablaufgrafik oder Foto aus einer Schulung
                      </div>
                    </div>
                  </div>
                )}
              </div>

              <div className="rounded-3xl bg-white p-4 shadow-sm ring-1 ring-slate-200">
                {introVideoUrl ? (
                  <div className="aspect-[16/10] overflow-hidden rounded-2xl">
                    <iframe
                      className="h-full w-full"
                      src={introVideoUrl}
                      title="Einführung in Prompt-Journeys"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    />
                  </div>
                ) : (
                  <div className="aspect-[16/10] rounded-2xl bg-gradient-to-br from-slate-900 to-slate-700 p-4 text-white">
                    <div className="flex h-full flex-col justify-between rounded-2xl border border-white/20 bg-white/5 p-4">
                      <div>
                        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-200">Video</p>
                        <h3 className="mt-2 text-lg font-semibold">Kurze Einführung in 60 Sekunden</h3>
                        <p className="mt-2 text-sm text-slate-200">
                          Platzhalter für ein kurzes Erklärvideo: Was sind Prompt-Journeys, wie starte ich, und was bringt mir das im Alltag?
                        </p>
                      </div>
                      <div className="inline-flex w-fit items-center rounded-full bg-white/10 px-3 py-2 text-sm">
                        Video später einbetten
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </header>

      <main className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <section id="so-funktioniert-es" className="mb-20">
          <div className="mb-8 max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">Einfach erklärt</p>
            <h2 className="mt-2 text-3xl font-semibold tracking-tight">So funktionieren Prompt-Journeys</h2>
            <p className="mt-4 text-lg text-slate-600">
              Eine Prompt-Journey ist kein komplizierter Befehl, sondern ein geführter Dialog.
              Die KI stellt nacheinander verständliche Fragen, reagiert auf die Antworten und führt schrittweise zu einem konkreten Ergebnis.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
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

          <div className="mt-8 rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
            <h3 className="text-lg font-semibold">Typische Einsatzbereiche</h3>
            <div className="mt-4 flex flex-wrap gap-3">
              {examples.map((example) => (
                <span key={example} className="rounded-full bg-slate-100 px-4 py-2 text-sm text-slate-700">
                  {example}
                </span>
              ))}
            </div>
          </div>
        </section>

        <section className="mb-20">
          <div className="grid gap-6 lg:grid-cols-[1.3fr_0.7fr]">
            <div className="rounded-3xl bg-white p-8 shadow-sm ring-1 ring-slate-200">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">Wichtiger Vorteil</p>
              <h2 className="mt-2 text-2xl font-semibold">Ideal für Menschen ohne KI-Vorerfahrung</h2>
              <p className="mt-4 text-slate-600">
                Prompt-Journeys senken die Einstiegshürde: Nutzende müssen nicht wissen, wie man „richtig promptet“.
                Sie werden von der KI geführt und erhalten schnell ein positives erstes Erlebnis.
              </p>
            </div>
            <div className="rounded-3xl bg-slate-900 p-8 text-white shadow-sm">
              <h3 className="text-xl font-semibold">Das Ziel</h3>
              <p className="mt-4 text-slate-200">
                Nicht Technik erklären – sondern zeigen, wie KI im Alltag konkret helfen kann.
              </p>
            </div>
          </div>
        </section>

        <section id="journeys">
          <div className="mb-8 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">Übersicht</p>
              <h2 className="mt-2 text-3xl font-semibold tracking-tight">Unsere Prompt-Journeys</h2>
              <p className="mt-4 max-w-3xl text-lg text-slate-600">
                Wähle eine Journey aus und starte direkt. Hinterlege dafür einfach pro Karte den Link in <code>href</code>.
              </p>
            </div>
          </div>

          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {journeys.map((journey) => (
              <article
                key={journey.title}
                className="rounded-3xl bg-white p-6 shadow-sm ring-1 ring-slate-200 transition hover:-translate-y-0.5 hover:shadow-md"
              >
                <div className="mb-4 flex items-center justify-between gap-4">
                  <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-700">
                    {journey.tag}
                  </span>
                  <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-700">
                    {journey.status}
                  </span>
                </div>
                <div>
                  <h3 className="text-xl font-semibold">{journey.title}</h3>
                  <p className="mt-2 text-sm text-slate-500">{journey.audience}</p>
                </div>
                <p className="mt-4 text-sm leading-6 text-slate-600">{journey.description}</p>
                <div className="mt-6 flex items-center justify-between gap-4">
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
