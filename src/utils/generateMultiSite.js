import JSZip from "jszip";
import { saveAs } from "file-saver";

import { generateHeader } from "../data/headers";
import { generateFooter } from "../data/footers";

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

import { randomItem } from "../hooks/useRandomItem";
import { getSiteConfig } from "../store/siteConfig";
import { addAssetsToZip } from "./zipAssets";

// =========================================================

export async function generateMultiSite(previewOnly = false) {
  const config = getSiteConfig();
  const siteName = config.siteName?.trim() || "website";
  const domain = `https://${siteName}.com`;
  const today = new Date().toISOString().split("T")[0];

  const header = generateHeader(config);
  const footer = generateFooter(config);

  const usedSections = new Set();

  const pages = {
    "index.html": buildIndexPage(header, footer, config),
    "about.html": buildUniquePage(
      header,
      footer,
      "About",
      usedSections,
      config
    ),
    "price.html": buildUniquePage(
      header,
      footer,
      "Pricing",
      usedSections,
      config
    ),
    "contact.html": buildUniquePage(
      header,
      footer,
      "Contact",
      usedSections,
      config
    ),
    "bmodel.html": buildSimplePage(header, footer, "Business Model", config),
    "privacy.html": buildSimplePage(header, footer, "Privacy Policy", config),
    "terms.html": buildSimplePage(header, footer, "Terms of Use", config),
  };

  if (previewOnly) return pages;

  const zip = new JSZip();
  Object.entries(pages).forEach(([name, html]) => zip.file(name, html));

  await addAssetsToZip(zip, config);

  zip.file(
    "robots.txt",
    `User-agent: *
Disallow:
Sitemap: ${domain}/sitemap.xml`
  );

  zip.file(
    "sitemap.xml",
    `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="https://www.sitemaps.org/schemas/sitemap/0.9">
${Object.keys(pages)
  .map(
    (page) => `
<url>
  <loc>${domain}/${page}</loc>
  <lastmod>${today}</lastmod>
  <changefreq>${page === "index.html" ? "daily" : "monthly"}</changefreq>
  <priority>${page === "index.html" ? "1.0" : "0.8"}</priority>
</url>`
  )
  .join("")}
</urlset>`
  );

  const blob = await zip.generateAsync({ type: "blob" });
  saveAs(blob, `${siteName}-multisite-${Date.now()}.zip`);
}

// =========================================================
function buildIndexPage(header, footer, config) {
  const hero = randomItem(heroes);
  const pool = [
    randomItem(about),
    randomItem(whyChooseSections),
    randomItem(priceSections),
    randomItem(teamSections),
    randomItem(tabSections),
    randomItem(sliderSection),
    randomItem(servicesSections),
    randomItem(advantagesSections),
    randomItem(reviewsSections),
    randomItem(faqSections),
  ];

  const shuffled = shuffleArray(pool).slice(0, 6);
  const contactSection = randomItem(contact);

  return wrapHTML(
    config.title?.trim() || `${config.siteName} — Home`,
    header,
    [hero, ...shuffled, contactSection],
    footer,
    true,
    config
  );
}

// =========================================================
function buildUniquePage(header, footer, pageTitle, usedSections, config) {
  const items = [
    randomItem(whyChooseSections),
    randomItem(teamSections),
    randomItem(faqSections),
  ].filter(Boolean);

  items.forEach((s) => usedSections.add(s));

  const siteName = config.siteName || "Website";
  return wrapHTML(
    `${siteName} — ${pageTitle}`,
    header,
    items,
    footer,
    false,
    config
  );
}

// =========================================================
function buildSimplePage(header, footer, pageTitle, config) {
  const siteName = config.siteName || "Website";
  return wrapHTML(
    `${siteName} — ${pageTitle}`,
    header,
    [
      `<section class="py-5 text-center bg-light">
        <div class="container"><h2 class="h5 text-muted">Coming soon...</h2></div>
      </section>`,
    ],
    footer,
    false,
    config
  );
}

// =========================================================
// 🧠 SEO — ONLY homepage gets meta+canonical
function wrapHTML(title, header, sections, footer, isHome, config) {
  const lang = config.langAttr || "en";
  const siteName = config.siteName || "website";
  const description =
    config.description?.trim() || `${siteName} official website`;
  const domain = `https://${siteName}.com`;

  return `<!DOCTYPE html>
<html lang="${lang}">
<head>
<meta charset="UTF-8"/>
<meta name="viewport" content="width=device-width,initial-scale=1"/>

<title>${title}</title>

${
  isHome
    ? `<meta name="description" content="${description}"/>
<link rel="canonical" href="${domain}/"/>`
    : ""
}

<link rel="icon" href="favicon.ico"/>
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
        lang: "${lang}",
        policy: "privacy.html",
        useOverlay: !1,
        required: ["essential"],
        defaultOn: ["performance"],
        preventClosure: !0,
        preventScroll: !1,
      }),
        window.addEventListener("load", initCookieLoader);
    </script>
    <script async="" src="./assets/js/cookie.min.js"></script>

<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet">
<link href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/font/bootstrap-icons.min.css" rel="stylesheet">
</head>
<body>
${header}
${sections.join("\n")}
${footer}
</body>
</html>`;
}

// =========================================================
function shuffleArray(arr) {
  const res = [...arr];
  for (let i = res.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [res[i], res[j]] = [res[j], res[i]];
  }
  return res;
}
