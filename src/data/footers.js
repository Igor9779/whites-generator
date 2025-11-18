import { randomItem } from "../hooks/useRandomItem";

// 🎨 Стилі футера
export const footerStyles = [
  {
    className: "bg-black text-white pt-5 pb-3",
    yearClass: "text-secondary",
    brandClass: "link-warning text-decoration-none fw-bold fs-4",
  },
  {
    className: "bg-light text-dark pt-5 pb-3",
    yearClass: "text-muted",
    brandClass: "text-primary text-decoration-none fw-bold fs-4",
  },
  {
    className: "bg-dark text-white pt-5 pb-3 border-top border-warning",
    yearClass: "text-secondary",
    brandClass: "text-warning text-decoration-none fw-bold fs-4",
  },
  {
    className: "bg-primary text-white pt-5 pb-3",
    yearClass: "text-light opacity-75",
    brandClass: "text-white text-decoration-none fw-bold fs-4",
  },
];

// 🗺️ Тексти футера різними мовами
export const footerTranslations = {
  uk: {
    nav: [
      { page: "about.html", label: "Про нас" },
      { page: "price.html", label: "Послуги" },
      { page: "contact.html", label: "Контакти" },
      { page: "privacy.html", label: "Конфіденційність" },
      { page: "terms.html", label: "Умови використання" },
    ],
    addressLabel: "Адреса:",
    phoneLabel: "Телефон:",
  },
  en: {
    nav: [
      { page: "about.html", label: "About" },
      { page: "price.html", label: "Pricing" },
      { page: "contact.html", label: "Contact" },
      { page: "privacy.html", label: "Privacy Policy" },
      { page: "terms.html", label: "Terms of Use" },
    ],
    addressLabel: "Address:",
    phoneLabel: "Phone:",
  },
  de: {
    nav: [
      { page: "about.html", label: "Über uns" },
      { page: "price.html", label: "Preise" },
      { page: "contact.html", label: "Kontakt" },
      { page: "privacy.html", label: "Datenschutz" },
      { page: "terms.html", label: "Nutzungsbedingungen" },
    ],
    addressLabel: "Adresse:",
    phoneLabel: "Telefon:",
  },
  fr: {
    nav: [
      { page: "about.html", label: "À propos" },
      { page: "price.html", label: "Tarifs" },
      { page: "contact.html", label: "Contact" },
      { page: "privacy.html", label: "Confidentialité" },
      { page: "terms.html", label: "Conditions d'utilisation" },
    ],
    addressLabel: "Adresse:",
    phoneLabel: "Téléphone:",
  },
};

// 🔗 Соцмережі
function socialIcons(color = "white") {
  return `
    <a href="#" class="mx-1 text-${color}"><i class="bi bi-facebook"></i></a>
    <a href="#" class="mx-1 text-${color}"><i class="bi bi-twitter-x"></i></a>
    <a href="#" class="mx-1 text-${color}"><i class="bi bi-instagram"></i></a>
    <a href="#" class="mx-1 text-${color}"><i class="bi bi-linkedin"></i></a>
  `;
}

// 🏁 Генерація футера
export function generateFooter(config) {
  const style = randomItem(footerStyles);
  const lang = footerTranslations[config.langAttr] || footerTranslations.en;

  const brand = config.siteName || "Website";
  const address = config.address || "Bahnhofstrasse 20, Zürich, Schweiz";
  const phone = config.phone || "+410441234567";

  // ✨ Авто-генерація email з назви сайту
  const domain = brand
    .trim()
    .toLowerCase()
    .replace(/[^a-z0-9-]/g, "");
  const email = `info@${domain}.com`;

  const uid = config.businessNumber || "";
  const year = new Date().getFullYear();

  return `
<footer class="${style.className}">
  <div class="container text-center">
    <a href="index.html" class="${style.brandClass}">
      ${brand}
    </a>

    <p class="small mt-2 mb-1"><strong>${
      lang.addressLabel
    }</strong> ${address}</p>
    <p class="small mb-1"><strong>${lang.phoneLabel}</strong> ${phone}</p>
    <p class="small mb-1">${email}</p>
    <p class="small mb-3">${uid}</p>

    <div class="d-inline-flex flex-wrap justify-content-center mb-2">
      ${socialIcons(style.className.includes("bg-light") ? "dark" : "white")}
    </div>

    <ul class="list-inline small mb-3">
      ${lang.nav
        .map(
          (item) => `
        <li class="list-inline-item mx-2">
          <a class="text-reset text-decoration-none" href="${item.page}">
            ${item.label}
          </a>
        </li>`
        )
        .join("")}
    </ul>

    <p class="${style.yearClass} small mb-0">
      © ${year} ${brand}. All rights reserved.
    </p>
  </div>
</footer>`;
}
