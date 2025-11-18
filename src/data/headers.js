import { randomItem } from "../hooks/useRandomItem";

// Варіанти стилів header
export const headerStyles = [
  {
    className: "navbar-light bg-light shadow-sm",
    brandClass: "fw-bold text-primary",
  },
  {
    className: "navbar-dark bg-dark py-3",
    brandClass: "fw-bold text-warning",
  },
  {
    className: "navbar-dark bg-primary w-100 top-0",
    brandClass: "fw-bold text-white text-center",
  },
  {
    className: "navbar-light bg-white shadow-sm border-bottom",
    brandClass: "fw-bold text-dark",
  },
  {
    className: "navbar-dark bg-black shadow-lg",
    brandClass: "text-warning fw-bold",
  },
];

// Меню — переклади
export const navTranslations = {
  uk: [
    { page: "index.html", label: "Головна" },
    { page: "about.html", label: "Про нас" },
    { page: "price.html", label: "Послуги" },
    { page: "contact.html", label: "Контакти" },
    { page: "bmodel.html", label: "Бізнес Модель" },
  ],
  en: [
    { page: "index.html", label: "Home" },
    { page: "about.html", label: "About" },
    { page: "price.html", label: "Pricing" },
    { page: "contact.html", label: "Contact" },
    { page: "bmodel.html", label: "Business Model" },
  ],
  de: [
    { page: "index.html", label: "Startseite" },
    { page: "about.html", label: "Über uns" },
    { page: "price.html", label: "Preise" },
    { page: "contact.html", label: "Kontakt" },
    { page: "bmodel.html", label: "Geschäftsmodell" },
  ],
  fr: [
    { page: "index.html", label: "Accueil" },
    { page: "about.html", label: "À propos" },
    { page: "price.html", label: "Tarifs" },
    { page: "contact.html", label: "Contact" },
    { page: "bmodel.html", label: "Modèle économique" },
  ],
};

// Головна функція генерації Header
export function generateHeader(config) {
  const style = randomItem(headerStyles);
  const menu = navTranslations[config.langAttr] || navTranslations.en;
  const brand = config.siteName || "Website";

  return `
<nav class="navbar navbar-expand-lg ${style.className}">
  <div class="container">
    <a class="navbar-brand ${style.brandClass}" href="index.html">${brand}</a>

    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#mainNav">
      <span class="navbar-toggler-icon"></span>
    </button>

    <div class="collapse navbar-collapse justify-content-center" id="mainNav">
      <ul class="navbar-nav ms-auto text-center">
        ${menu
          .map(
            (item) => `
          <li class="nav-item">
            <a class="nav-link" href="${item.page}">${item.label}</a>
          </li>`
          )
          .join("")}
      </ul>
    </div>
  </div>
</nav>
  `;
}
