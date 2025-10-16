// src/utils/generateSite.js

import { headers } from "../data/headers";
import { heroes } from "../data/heroes";
import { about } from "../data/about";
import { whyChooseSections } from "../data/whyChooseSections";
import { tabSections } from "../data/tabSections";
import { priceSections } from "../data/priceSections";
import { teamSections } from "../data/teamSections";
import { advantagesSections } from "../data/advantagesSections";
import { reviewsSections } from "../data/reviewsSections";
import { faqSections } from "../data/faqSections";
import { sliderSection } from "../data/sliderSection";
import { contact } from "../data/contact";
import { footers } from "../data/footers";
// 🔹 Якщо у тебе є інші секції (whyChoose, price, team і т.д.), імпортуй їх сюди

import { randomItem } from "../hooks/useRandomItem";

/**
 * Генерує структуру HTML-сайту як рядок
 * з випадковими секціями у заданому порядку.
 */
export function generateSite() {
  const parts = [];

  // 1. Header
  parts.push(randomItem(headers));

  // 2. Hero
  parts.push(randomItem(heroes));

  // 3. About
  parts.push(randomItem(about));

  // 4️⃣ Why Choose Us
  parts.push(randomItem(whyChooseSections));

  // 5️⃣ Tabs / System Sections
  parts.push(randomItem(tabSections));

  // 6️⃣ Price or Services
  parts.push(randomItem(priceSections));

  // 7️⃣ Team
  parts.push(randomItem(teamSections));

  // 8️⃣ Advantages
  parts.push(randomItem(advantagesSections));

  // 9️⃣ Reviews
  parts.push(randomItem(reviewsSections));

  // 🔟 FAQ
  parts.push(randomItem(faqSections));

  // 11️⃣ Slider or Gallery
  parts.push(randomItem(sliderSection));

  // 12️⃣ Contact
  parts.push(randomItem(contact));

  // 5. Footer
  parts.push(randomItem(footers));

  // 6. Об’єднуємо все в єдиний HTML-рядок
  return parts.join("\n");
}
