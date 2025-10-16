import React, { useState } from "react";
import { generateSite } from "../utils/generateSite";
import { shuffle } from "../hooks/useShuffle";
import { downloadHTML } from "../hooks/downloadHTML";

export default function GeneratedSite() {
  const [siteHTML, setSiteHTML] = useState(generateSite());

  // згенерувати новий сайт
  const handleGenerate = () => {
    setSiteHTML(generateSite());
  };

  // перемішати секції, крім header/hero/footer
  const handleShuffle = () => {
    const parser = new DOMParser();
    const doc = parser.parseFromString(siteHTML, "text/html");
    const allSections = Array.from(doc.body.children);

    const fixedTop = allSections.slice(0, 2); // header + hero
    const middle = allSections.slice(2, -1); // все між ними
    const fixedBottom = allSections.slice(-1); // footer

    const shuffledMiddle = shuffle(middle);
    const newOrder = [...fixedTop, ...shuffledMiddle, ...fixedBottom];

    const htmlString = newOrder.map((el) => el.outerHTML).join("\n");
    setSiteHTML(htmlString);
  };

  // завантажити HTML-файл
  const handleDownload = () => {
    downloadHTML(siteHTML);
  };

  return (
    <div className="text-center py-4">
      <div className="mb-3">
        <button className="btn btn-warning me-2" onClick={handleGenerate}>
          🎲 Згенерувати новий сайт
        </button>
        <button className="btn btn-outline-dark me-2" onClick={handleShuffle}>
          🔁 Перемішати секції
        </button>
        <button className="btn btn-success" onClick={handleDownload}>
          ⬇️ Завантажити HTML
        </button>
      </div>

      <main
        id="site-container"
        className="text-start"
        dangerouslySetInnerHTML={{ __html: siteHTML }}
      />
    </div>
  );
}
