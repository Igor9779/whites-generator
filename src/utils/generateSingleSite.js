import JSZip from "jszip";
import { saveAs } from "file-saver";

import { headers } from "../data/headers";
import { heroes } from "../data/heroes";
import { about } from "../data/about";
import { whyChooseSections } from "../data/whyChooseSections";
import { priceSections } from "../data/priceSections";
import { teamSections } from "../data/teamSections";
import { tabSections } from "../data/tabSections";
import { sliderSection } from "../data/sliderSection";
import { advantagesSections } from "../data/advantagesSections";
import { reviewsSections } from "../data/reviewsSections";
import { faqSections } from "../data/faqSections";
import { contact } from "../data/contact";
import { footers } from "../data/footers";

import { randomItem } from "../hooks/useRandomItem";

// ---------------------------------------------------

export async function generateSingleSite(previewOnly = false) {
  const header = randomItem(headers);
  const footer = randomItem(footers);

  // 🔹 Формуємо сторінки
  const pages = {
    "index.html": buildIndexPage(header, footer),
    "bmodel.html": buildSimplePage(header, footer, "bmodel"),
    "privacy.html": buildSimplePage(header, footer, "privacy"),
    "terms.html": buildSimplePage(header, footer, "terms"),
  };

  if (previewOnly) return pages; // 🟢 Повертаємо сторінки для перегляду

  // 🔹 Інакше створюємо ZIP
  const zip = new JSZip();
  Object.entries(pages).forEach(([name, html]) => zip.file(name, html));

  const blob = await zip.generateAsync({ type: "blob" });
  saveAs(blob, `whiteex-single-${Date.now()}.zip`);
}

// ---------------------------------------------------
// index.html — hero перший після header + 6 випадкових + contact над футером
function buildIndexPage(header, footer) {
  // ✅ hero завжди перший
  const hero = randomItem(heroes);

  // решта секцій, без hero
  const pool = [
    randomItem(about),
    randomItem(whyChooseSections),
    randomItem(priceSections),
    randomItem(teamSections),
    randomItem(tabSections),
    randomItem(sliderSection),
    randomItem(advantagesSections),
    randomItem(reviewsSections),
    randomItem(faqSections),
  ];

  // беремо 6 рандомних секцій
  const shuffled = shuffleArray(pool).slice(0, 6);

  // ✅ контактна форма завжди перед футером
  const allSections = [hero, ...shuffled, randomItem(contact)];

  return wrapHTML("WhiteEx – головна", header, allSections, footer);
}

// ---------------------------------------------------
// прості сторінки (bmodel, privacy, terms)
function buildSimplePage(header, footer, type) {
  const empty = `<section class="py-5 text-center bg-light">
    <div class="container">
      <h2 class="h5 text-muted">Ця сторінка поки порожня</h2>
    </div>
  </section>`;
  return wrapHTML(`WhiteEx – ${type}`, header, [empty], footer);
}

// ---------------------------------------------------
function wrapHTML(title, header, sections, footer) {
  return `<!DOCTYPE html>
<html lang="uk">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <title>${title}</title>
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet">
  <link href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/font/bootstrap-icons.min.css" rel="stylesheet">
  <style>html { scroll-behavior: smooth; }</style>
</head>
<body>
  ${header}
  ${sections.join("\n")}
  ${footer}
  <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js"></script>
</body>
</html>`;
}

// ---------------------------------------------------
function shuffleArray(arr) {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}
