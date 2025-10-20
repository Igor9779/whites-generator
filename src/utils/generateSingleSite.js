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
import { servicesSections } from "../data/servicesSections";
import { faqSections } from "../data/faqSections";
import { contact } from "../data/contact";
import { footers } from "../data/footers";

import { randomItem } from "../hooks/useRandomItem";

// ---------------------------------------------------

export async function generateSingleSite(previewOnly = false) {
  const siteName = "whiteex"; // 🟢 зміни тут на актуальний домен без .com
  const domain = `https://${siteName}.com`; // автоматично формується URL
  const today = new Date().toISOString().split("T")[0]; // поточна дата у форматі YYYY-MM-DD

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

  // =====================================
  // 🔹 ROBOTS.TXT
  // =====================================
  const robotsTxt = `
User-agent: *
Disallow:

Sitemap: ${domain}/sitemap.xml
`.trim();

  zip.file("robots.txt", robotsTxt);

  // =====================================
  // 🔹 SITEMAP.XML
  // =====================================
  const sitemapXml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="https://www.sitemaps.org/schemas/sitemap/0.9">

  <url>
    <loc>${domain}/index.html</loc>
    <lastmod>${today}</lastmod>
    <changefreq>daily</changefreq>
    <priority>1.0</priority>
  </url>

  <url>
    <loc>${domain}/bmodel.html</loc>
    <lastmod>${today}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>

  <url>
    <loc>${domain}/privacy.html</loc>
    <lastmod>${today}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>

  <url>
    <loc>${domain}/terms.html</loc>
    <lastmod>${today}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>

</urlset>`.trim();

  zip.file("sitemap.xml", sitemapXml);

  // =====================================
  // 🔵 Генеруємо ZIP-файл
  // =====================================
  const blob = await zip.generateAsync({ type: "blob" });
  saveAs(blob, `${siteName}-single-${Date.now()}.zip`);
}

// ---------------------------------------------------
// index.html — hero перший після header + 6 випадкових + contact над футером
function buildIndexPage(header, footer) {
  // ✅ hero завжди перший
  const hero = randomItem(heroes);

  // ✅ priceSections завжди має бути присутня
  const priceSection = randomItem(priceSections);

  // решта секцій, без hero і без contact
  const pool = [
    randomItem(about),
    randomItem(whyChooseSections),
    randomItem(teamSections),
    randomItem(tabSections),
    randomItem(sliderSection),
    randomItem(advantagesSections),
    randomItem(reviewsSections),
    randomItem(servicesSections),
    randomItem(faqSections),
  ];

  // перемішуємо решту
  const shuffled = shuffleArray(pool).slice(0, 5);

  // вставляємо priceSection у випадкове місце серед середніх секцій
  const insertIndex = Math.floor(Math.random() * (shuffled.length + 1));
  shuffled.splice(insertIndex, 0, priceSection);

  // ✅ контактна форма завжди перед футером
  const contactSection = randomItem(contact);

  // фінальний порядок: header → hero → середні секції (включаючи price) → contact → footer
  const allSections = [hero, ...shuffled, contactSection];

  return wrapHTML("WhiteEx – головна", header, allSections, footer, true);
}

// ---------------------------------------------------
// прості сторінки (bmodel, privacy, terms)
function buildSimplePage(header, footer, type) {
  const empty = `<section class="py-5 text-center bg-light">
    <div class="container">
      <h2 class="h5 text-muted">Ця сторінка поки порожня</h2>
    </div>
  </section>`;
  return wrapHTML(`WhiteEx – ${type}`, header, [empty], footer, false);
}

// ---------------------------------------------------
function wrapHTML(title, header, sections, footer, isHome = false) {
  // умовно вставляємо canonical + cookie тільки якщо isHome === true
  const extraHead = isHome
    ? `
    <meta name="description" content="${title}">
    <link rel="canonical" href="https://www.whiteex.com/" />
    <script>
      function initCookieLoader() {
        let e = !1;
        window.addEventListener(
          "scroll",
          function () {
            if (e) return;
            e = !0;
            const n = document.createElement("script");
            (n.src = "./assets/js/cookie.min.js"),
              (n.async = !0),
              document.body.appendChild(n);
          },
          { once: !0 }
        );
      }
      (window.cookieConfig = {
        lang: "fr",
        policy: "privacy.html",
        useOverlay: !1,
        required: ["essential"],
        defaultOn: ["performance"],
        preventClosure: !0,
        preventScroll: !1,
      }),
        window.addEventListener("load", initCookieLoader);
    </script>
    <script async src="./assets/js/cookie.min.js"></script>
  `
    : "";
  return `<!DOCTYPE html>
<html lang="uk">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <link rel="icon" href="favicon.ico" type="image/x-icon" />
    <title>${title}</title>
    ${extraHead}
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

// ---------------------------------------------------
function shuffleArray(arr) {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}
