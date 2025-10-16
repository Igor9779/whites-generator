export const sliderSection = [
  // 1 — світла мінімалістична секція з пастельними акцентами
  `<section class="bg-light text-secondary py-5">
    <div class="container py-4">
      <h2 class="fw-bold text-center mb-5 text-dark">Unsere Grundprinzipien</h2>
      <div id="carouselLight" class="carousel slide" data-bs-ride="carousel">
        <div class="carousel-inner">

          <div class="carousel-item active">
            <div class="text-center mx-auto" style="max-width:720px;">
              <p class="fw-light h5 mb-4">
                „Klare Strukturen schaffen Orientierung und fördern Vertrauen – in jedem Schritt unserer Zusammenarbeit.“
              </p>
              <h3 class="fw-bold h5 text-primary">Transparenz</h3>
              <p class="text-muted">Jede Entscheidung basiert auf nachvollziehbaren Informationen.</p>
            </div>
          </div>

          <div class="carousel-item">
            <div class="text-center mx-auto" style="max-width:720px;">
              <p class="fw-light h5 mb-4">
                „Ein strukturierter Ansatz ermöglicht stabile Ergebnisse und nachhaltige Entwicklung.“
              </p>
              <h3 class="fw-bold h5 text-primary">Struktur</h3>
              <p class="text-muted">Wir arbeiten mit klaren Abläufen und dokumentierten Prozessen.</p>
            </div>
          </div>

          <div class="carousel-item">
            <div class="text-center mx-auto" style="max-width:720px;">
              <p class="fw-light h5 mb-4">
                „Verlässlichkeit entsteht durch Präzision – in Daten, Kommunikation und Entscheidungen.“
              </p>
              <h3 class="fw-bold h5 text-primary">Verlässlichkeit</h3>
              <p class="text-muted">Jedes Detail zählt, um das Ganze konsistent zu gestalten.</p>
            </div>
          </div>

        </div>
        <div class="carousel-indicators position-relative mt-4">
          <button type="button" data-bs-target="#carouselLight" data-bs-slide-to="0" class="active bg-primary"></button>
          <button type="button" data-bs-target="#carouselLight" data-bs-slide-to="1" class="bg-primary"></button>
          <button type="button" data-bs-target="#carouselLight" data-bs-slide-to="2" class="bg-primary"></button>
        </div>
      </div>
    </div>
  </section>`,

  // 2 — темна секція з елементами елегантного контрасту та рамкою
  `<section class="bg-dark text-white py-5">
    <div class="container py-4">
      <h2 class="fw-bold text-center mb-5 text-warning">Unsere Entwicklung</h2>
      <div id="carouselDark" class="carousel slide" data-bs-ride="carousel">
        <div class="carousel-inner border border-secondary rounded-4 p-4">

          <div class="carousel-item active">
            <div class="text-center mx-auto" style="max-width:720px;">
              <p class="fw-light h5 mb-4">„Der Beginn: klare Vision, einfache Struktur, ehrliche Kommunikation.“</p>
              <h3 class="fw-bold h5 text-warning">Phase 1 – Aufbau</h3>
              <p class="text-light opacity-75">Entwicklung erster Module und Basisprozesse.</p>
            </div>
          </div>

          <div class="carousel-item">
            <div class="text-center mx-auto" style="max-width:720px;">
              <p class="fw-light h5 mb-4">„Die Weiterentwicklung: Daten werden intelligent verknüpft, Abläufe digitalisiert.“</p>
              <h3 class="fw-bold h5 text-warning">Phase 2 – Integration</h3>
              <p class="text-light opacity-75">Verknüpfung von Tools, Teams und Informationen.</p>
            </div>
          </div>

          <div class="carousel-item">
            <div class="text-center mx-auto" style="max-width:720px;">
              <p class="fw-light h5 mb-4">„Heute: methodische Ordnung, Transparenz und skalierbare Systeme.“</p>
              <h3 class="fw-bold h5 text-warning">Phase 3 – Stabilität</h3>
              <p class="text-light opacity-75">Unsere Prozesse sind auf langfristige Sicherheit ausgerichtet.</p>
            </div>
          </div>

        </div>
        <div class="carousel-indicators position-relative mt-4">
          <button type="button" data-bs-target="#carouselDark" data-bs-slide-to="0" class="active bg-warning"></button>
          <button type="button" data-bs-target="#carouselDark" data-bs-slide-to="1" class="bg-warning"></button>
          <button type="button" data-bs-target="#carouselDark" data-bs-slide-to="2" class="bg-warning"></button>
        </div>
      </div>
    </div>
  </section>`,

  // 3 — градієнтна секція з цитатами у картках
  `<section class="py-5 text-white" style="background:linear-gradient(135deg,#1c1f24,#3a6ea5,#3fb3c3);">
    <div class="container py-4">
      <h2 class="fw-bold text-center mb-5 text-white">Unser Ansatz</h2>
      <div id="carouselGradient" class="carousel slide" data-bs-ride="carousel">
        <div class="carousel-inner">

          <div class="carousel-item active">
            <div class="card bg-transparent border border-light shadow-sm mx-auto" style="max-width:720px;">
              <div class="card-body text-center">
                <p class="fw-light h5 mb-4">„Effizienz entsteht nicht durch Eile, sondern durch Systematik.“</p>
                <h3 class="fw-bold h5 text-light">Systemdenken</h3>
                <p class="opacity-75">Wir verbinden Struktur mit Flexibilität.</p>
              </div>
            </div>
          </div>

          <div class="carousel-item">
            <div class="card bg-transparent border border-light shadow-sm mx-auto" style="max-width:720px;">
              <div class="card-body text-center">
                <p class="fw-light h5 mb-4">„Digitalisierung ist kein Ziel, sondern ein Werkzeug zur Klarheit.“</p>
                <h3 class="fw-bold h5 text-light">Digitale Ordnung</h3>
                <p class="opacity-75">Klare Prozesse schaffen Transparenz für alle Beteiligten.</p>
              </div>
            </div>
          </div>

          <div class="carousel-item">
            <div class="card bg-transparent border border-light shadow-sm mx-auto" style="max-width:720px;">
              <div class="card-body text-center">
                <p class="fw-light h5 mb-4">„Vertrauen wächst aus methodischer Genauigkeit.“</p>
                <h3 class="fw-bold h5 text-light">Methodik</h3>
                <p class="opacity-75">Wir bauen Systeme, die nachvollziehbar bleiben.</p>
              </div>
            </div>
          </div>

        </div>
        <div class="carousel-indicators position-relative mt-4">
          <button type="button" data-bs-target="#carouselGradient" data-bs-slide-to="0" class="active bg-white"></button>
          <button type="button" data-bs-target="#carouselGradient" data-bs-slide-to="1" class="bg-white"></button>
          <button type="button" data-bs-target="#carouselGradient" data-bs-slide-to="2" class="bg-white"></button>
        </div>
      </div>
    </div>
  </section>`,

  // 4 — контрастна секція з двоколонним макетом для тексту
  `<section class="bg-white text-secondary py-5">
    <div class="container py-4">
      <h2 class="fw-bold text-center mb-5 text-dark">Unsere Schwerpunkte</h2>
      <div id="carouselContrast" class="carousel slide" data-bs-ride="carousel">
        <div class="carousel-inner">

          <div class="carousel-item active">
            <div class="row justify-content-center align-items-center g-4">
              <div class="col-md-6 text-md-end text-center">
                <h3 class="fw-bold h5 text-primary mb-3">Finanzprozesse</h3>
                <p class="fw-light h6">Wir begleiten Unternehmen bei der Optimierung ihrer Finanzstrukturen und Abläufe.</p>
              </div>
              <div class="col-md-6 text-md-start text-center">
                <p class="text-muted">Strukturiert, nachvollziehbar, dokumentiert.</p>
              </div>
            </div>
          </div>

          <div class="carousel-item">
            <div class="row justify-content-center align-items-center g-4">
              <div class="col-md-6 text-md-end text-center">
                <h3 class="fw-bold h5 text-primary mb-3">Projektmanagement</h3>
                <p class="fw-light h6">Unsere Lösungen erleichtern die Planung und Kontrolle komplexer Projekte.</p>
              </div>
              <div class="col-md-6 text-md-start text-center">
                <p class="text-muted">Methodische Planung für langfristige Stabilität.</p>
              </div>
            </div>
          </div>

          <div class="carousel-item">
            <div class="row justify-content-center align-items-center g-4">
              <div class="col-md-6 text-md-end text-center">
                <h3 class="fw-bold h5 text-primary mb-3">Kommunikation</h3>
                <p class="fw-light h6">Wir schaffen klare Kommunikationsstrukturen zwischen Teams und Systemen.</p>
              </div>
              <div class="col-md-6 text-md-start text-center">
                <p class="text-muted">Klarheit in Sprache, Struktur und Verantwortung.</p>
              </div>
            </div>
          </div>

        </div>
        <div class="carousel-indicators position-relative mt-4">
          <button type="button" data-bs-target="#carouselContrast" data-bs-slide-to="0" class="active bg-primary"></button>
          <button type="button" data-bs-target="#carouselContrast" data-bs-slide-to="1" class="bg-primary"></button>
          <button type="button" data-bs-target="#carouselContrast" data-bs-slide-to="2" class="bg-primary"></button>
        </div>
      </div>
    </div>
  </section>`,
];
