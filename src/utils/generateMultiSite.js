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

export async function generateMultiSite(previewOnly = false) {
  const header = randomItem(headers);
  const footer = randomItem(footers);
  const usedSections = new Set();

  const pages = {
    "index.html": buildIndexPage(header, footer),
    "about.html": buildUniqueContentPage(header, footer, "about", usedSections),
    "price.html": buildUniqueContentPage(header, footer, "price", usedSections),
    "contact.html": buildUniqueContentPage(
      header,
      footer,
      "contact",
      usedSections
    ),
    "bmodel.html": buildSimplePage(header, footer),
    "privacy.html": buildSimplePage(header, footer),
    "terms.html": buildSimplePage(header, footer),
  };

  if (previewOnly) return pages;

  const zip = new JSZip();
  Object.entries(pages).forEach(([name, html]) => zip.file(name, html));
  const blob = await zip.generateAsync({ type: "blob" });
  saveAs(blob, `whiteex-multisite-${Date.now()}.zip`);
}

// --------------------------------------------
// 🟡 Головна сторінка: hero після header, contact перед footer
function buildIndexPage(header, footer) {
  const heroesSection = randomItem(heroes);
  const aboutSection = randomItem(about); // ✅ тільки тут і на about.html

  const middleSections = [
    aboutSection,
    randomItem(whyChooseSections),
    randomItem(priceSections),
    randomItem(teamSections),
    randomItem(tabSections),
    randomItem(sliderSection),
    randomItem(advantagesSections),
    randomItem(reviewsSections),
    randomItem(faqSections),
  ];

  const shuffledMiddle = shuffleArray(middleSections).slice(0, 6);
  const contactSection = randomItem(contact);

  const orderedSections = [heroesSection, ...shuffledMiddle, contactSection];

  const safeSections = orderedSections.filter(
    (s) => !s.includes("<footer") && !s.includes('class="footer"')
  );

  return wrapHTML("WhiteEx – головна", header, safeSections, footer);
}

// --------------------------------------------
// 🟢 Унікальні сторінки (about, price, contact)
function buildUniqueContentPage(header, footer, type, usedSections) {
  let sections = [];

  const availableWhy = whyChooseSections.filter((s) => !usedSections.has(s));
  const availableTeam = teamSections.filter((s) => !usedSections.has(s));
  const availableFaq = faqSections.filter((s) => !usedSections.has(s));

  // ✅ тільки сторінка "about" отримує aboutSection
  if (type === "about") {
    const aboutSection = randomItem(about);
    const sectionSet = [
      aboutSection,
      randomItem(availableWhy),
      randomItem(availableTeam),
      randomItem(availableFaq),
    ].filter(Boolean);
    sections = sectionSet;
  }
  // 🟡 сторінка "price" — без about
  else if (type === "price") {
    const sectionSet = [
      randomItem(availableWhy),
      randomItem(priceSections),
      randomItem(availableFaq),
    ].filter(Boolean);
    sections = sectionSet;
  }
  // 🟢 сторінка "contact" — без about
  else if (type === "contact") {
    const coreSections = [
      randomItem(availableWhy),
      randomItem(availableTeam),
      randomItem(availableFaq),
    ].filter(Boolean);

    const contactForm = randomItem(contact);
    const insertIndex = Math.floor(Math.random() * (coreSections.length + 1));
    coreSections.splice(insertIndex, 0, contactForm);
    sections = coreSections;
  }

  sections.forEach((s) => usedSections.add(s));
  return wrapHTML(`WhiteEx – ${type}`, header, sections, footer);
}

// --------------------------------------------
// 🟣 Порожні сторінки
function buildSimplePage(header, footer) {
  const emptySection = `<section class="py-5 text-center bg-light">
    <div class="container"><h2 class="h5 text-muted">Ця сторінка поки порожня</h2></div>
  </section>`;
  return wrapHTML("WhiteEx – інформація", header, [emptySection], footer);
}

// --------------------------------------------
// 🧱 HTML обгортка
function wrapHTML(title, header, sections, footer) {
  return `<!DOCTYPE html>
<html lang="uk">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <title>${title}</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/font/bootstrap-icons.min.css" rel="stylesheet">
  </head>
  <body>
    ${header}
    ${sections.join("\n")}
    ${footer}
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js"></script>
  </body>
</html>`;
}

// --------------------------------------------
// 🔁 Функція перемішування
function shuffleArray(arr) {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}
