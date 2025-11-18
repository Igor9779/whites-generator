// src/utils/generateSite.js

import { generateHeader } from "../data/headers";
import { generateFooter } from "../data/footers";

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

import { randomItem } from "../hooks/useRandomItem";

/**
 * Генерує структуру HTML-сайту
 * config → містить siteName, langAttr, address, phone, businessNumber тощо
 */
export function generateSite(config) {
  const parts = [];

  // 🔹 Header (динамічний по мові та назві)
  const header = generateHeader(config);
  parts.push(header);

  // 🔹 Hero
  parts.push(randomItem(heroes));

  // 🔹 About
  parts.push(randomItem(about));

  // 🔹 Why choose
  parts.push(randomItem(whyChooseSections));

  // 🔹 Tabs / System
  parts.push(randomItem(tabSections));

  // 🔹 Price
  parts.push(randomItem(priceSections));

  // 🔹 Team
  parts.push(randomItem(teamSections));

  // 🔹 Advantages
  parts.push(randomItem(advantagesSections));

  // 🔹 Reviews
  parts.push(randomItem(reviewsSections));

  // 🔹 FAQ
  parts.push(randomItem(faqSections));

  // 🔹 Slider
  parts.push(randomItem(sliderSection));

  // 🔹 Contact
  parts.push(randomItem(contact));

  // 🔹 Footer — тепер теж динамічний (бренд, адреса, телефон, BN)
  const footer = generateFooter(config);
  parts.push(footer);

  return parts.join("\n");
}
