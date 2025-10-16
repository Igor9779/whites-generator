import React, { useState } from "react";
import { generateSite } from "../utils/generateSite";
import { generateSingleSite } from "../utils/generateSingleSite";
import { generateMultiSite } from "../utils/generateMultiSite";
import { downloadHTML } from "../hooks/downloadHTML";
import { shuffle } from "../hooks/useShuffle";
import JSZip from "jszip";
import { saveAs } from "file-saver";

export default function GeneratedSite({ mode }) {
  const [siteHTML, setSiteHTML] = useState(generateSite("single"));
  const [previewPages, setPreviewPages] = useState(null);
  const [activePage, setActivePage] = useState("index.html");

  // 🟡 Генерація сайту (single або multi)
  const handleGenerate = async () => {
    const generator =
      mode === "single" ? generateSingleSite : generateMultiSite;
    const pages = await generator(true); // 🟢 отримуємо HTML для попереднього перегляду
    setPreviewPages(pages);
    setActivePage("index.html");
  };

  // 🟢 Завантаження ZIP
  const handleDownload = async () => {
    if (!previewPages) return;

    const zip = new JSZip();
    Object.entries(previewPages).forEach(([name, html]) =>
      zip.file(name, html)
    );

    const blob = await zip.generateAsync({ type: "blob" });
    const fileName =
      mode === "single"
        ? `whiteex-single-${Date.now()}.zip`
        : `whiteex-multisite-${Date.now()}.zip`;

    saveAs(blob, fileName);
  };

  // 🔁 Перемішування секцій (для будь-якого режиму)
  const handleShuffle = () => {
    if (!previewPages || !activePage) return;

    // 1️⃣ Парсимо HTML вибраної сторінки
    const parser = new DOMParser();
    const doc = parser.parseFromString(previewPages[activePage], "text/html");

    // 2️⃣ Основні елементи
    const header = doc.querySelector("nav, header");
    const footer = doc.querySelector("footer, .footer");
    const hero = doc.querySelector("#hero"); // 🔥 шукаємо саме по id="hero"
    const contact = doc.querySelector(
      "section.contact, section[id*='contact'], section[class*='contact']"
    );

    // 3️⃣ Усі секції
    const allSections = Array.from(doc.querySelectorAll("section"));
    let newBodyContent = "";

    // === 🟢 SINGLE або INDEX (багатосторінковий) ===
    if (
      mode === "single" ||
      (mode === "multi" && activePage === "index.html")
    ) {
      // середні секції між hero та contact
      const middle = allSections.filter((s) => s !== hero && s !== contact);
      const shuffledMiddle = shuffle(middle);

      // Фіксований порядок: hero завжди після header
      newBodyContent = [
        header?.outerHTML || "",
        hero?.outerHTML || "", // 🟢 завжди друга
        ...shuffledMiddle.map((s) => s.outerHTML),
        contact?.outerHTML || "", // перед футером
        footer?.outerHTML || "",
      ].join("\n");
    }

    // === 🟡 MULTI (about, price, contact) — без hero ===
    else if (
      mode === "multi" &&
      ["about.html", "price.html", "contact.html"].includes(activePage)
    ) {
      const sectionsWithoutStatic = allSections.filter(
        (s) => s !== header && s !== footer
      );
      const shuffledSections = shuffle(sectionsWithoutStatic);

      newBodyContent = [
        header?.outerHTML || "",
        ...shuffledSections.map((s) => s.outerHTML),
        footer?.outerHTML || "",
      ].join("\n");
    }

    // === 🔴 MULTI (bmodel, privacy, terms) — нічого не перемішуємо ===
    else {
      return;
    }

    // 4️⃣ Оновлення HTML
    const newHtml = doc.documentElement.outerHTML.replace(
      doc.body.outerHTML,
      `<body>${newBodyContent}</body>`
    );

    setPreviewPages({
      ...previewPages,
      [activePage]: newHtml,
    });
  };

  return (
    <div className="text-center">
      <div className="mb-3 d-flex flex-wrap justify-content-center gap-2">
        <button className="btn btn-warning" onClick={handleGenerate}>
          🎲 Згенерувати{" "}
          {mode === "single" ? "односторінковий" : "багатосторінковий"} сайт
        </button>

        <button className="btn btn-outline-dark" onClick={handleShuffle}>
          🔁 Перемішати секції ({mode === "single" ? "Single" : "Multi"})
        </button>

        <button className="btn btn-success" onClick={handleDownload}>
          ⬇️ Завантажити ZIP
        </button>
      </div>

      {/* 🟣 Попередній перегляд */}
      {previewPages && (
        <div className="container mt-4">
          {/* 🔹 Вкладки сторінок */}
          <ul className="nav nav-tabs justify-content-center mb-3">
            {Object.keys(previewPages).map((page) => (
              <li className="nav-item" key={page}>
                <button
                  className={`nav-link ${activePage === page ? "active" : ""}`}
                  onClick={() => setActivePage(page)}
                >
                  {page}
                </button>
              </li>
            ))}
          </ul>

          {/* 🔹 Вбудований iframe для перегляду */}
          <iframe
            title={activePage}
            srcDoc={previewPages[activePage]}
            style={{
              width: "100%",
              height: "80vh",
              border: "1px solid #ccc",
              borderRadius: "8px",
            }}
          ></iframe>
        </div>
      )}
    </div>
  );
}
