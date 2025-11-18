import React, { useState } from "react";
import "./GeneratedSite.css";
import { generateSite } from "../utils/generateSite";
import { generateSingleSite } from "../utils/generateSingleSite";
import { generateMultiSite } from "../utils/generateMultiSite";
import { downloadHTML } from "../hooks/downloadHTML";
import { shuffle } from "../hooks/useShuffle";
import JSZip from "jszip";
import { saveAs } from "file-saver";
import { getSiteConfig, setSiteConfig } from "../store/siteConfig";
import { addAssetsToZip } from "../utils/zipAssets";

export default function GeneratedSite({ mode }) {
  const [siteHTML, setSiteHTML] = useState(generateSite("single"));
  const [previewPages, setPreviewPages] = useState(null);
  const [activePage, setActivePage] = useState("index.html");
  const [formData, setFormData] = useState({
    siteName: "",
    address: "",
    phone: "",
    businessNumber: "",
    langAttr: "en",
    title: "",
    description: "",
  });

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setSiteConfig({ ...formData, [e.target.name]: e.target.value });
  };

  // 🟡 Генерація сайту (single або multi)
  const handleGenerate = async () => {
    setSiteConfig(formData);
    const generator =
      mode === "single" ? generateSingleSite : generateMultiSite;
    const pages = await generator(true); // 🟢 отримуємо HTML для попереднього перегляду
    setPreviewPages(pages);
    setActivePage("index.html");
  };

  // 🟢 Завантаження ZIP
  const handleDownload = async () => {
    if (!previewPages) return;
    const config = getSiteConfig();
    const siteName = config.siteName?.trim() || "website";
    const domain = `https://${siteName}.com`;
    const today = new Date().toISOString().split("T")[0];

    const zip = new JSZip();

    // 🔹 додаємо всі сторінки
    Object.entries(previewPages).forEach(([name, html]) =>
      zip.file(name, html)
    );

    // 🔹 ROBOTS.TXT
    zip.file(
      "robots.txt",
      `
User-agent: *
Disallow:

Sitemap: ${domain}/sitemap.xml
  `.trim()
    );

    // 🔹 SITEMAP.XML
    zip.file(
      "sitemap.xml",
      `<?xml version="1.0" encoding="UTF-8"?>
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
</urlset>`.trim()
    );

    // 🔹 Додаємо assets
    await addAssetsToZip(zip, config);

    // 🔵 Генеруємо ZIP-файл
    const blob = await zip.generateAsync({ type: "blob" });
    const fileName =
      mode === "single"
        ? `${siteName}-single-${Date.now()}.zip`
        : `${siteName}-multisite-${Date.now()}.zip`;

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
      <div className="generator-inputs container mb-4 p-3 rounded shadow-sm">
        <h5 className="text-start mb-3" style={{ color: "#6a2ef0" }}>
          🔧 Налаштування сайту
        </h5>

        <div className="row g-3">
          <div className="col-md-6">
            <label className="form-label">Title сайту</label>
            <input
              type="text"
              name="title"
              className="form-control"
              value={formData.title || ""}
              onChange={handleInputChange}
              placeholder="Напр.: Professional Business Services"
            />
          </div>

          <div className="col-md-6">
            <label className="form-label">Meta Description</label>
            <input
              type="text"
              name="description"
              className="form-control"
              value={formData.description || ""}
              onChange={handleInputChange}
              placeholder="Короткий опис сайту для SEO"
            />
          </div>
          <div className="col-md-6">
            <label className="form-label">Назва сайту (без .com)</label>
            <input
              type="text"
              className="form-control"
              value={formData.siteName}
              onChange={(e) =>
                setFormData({ ...formData, siteName: e.target.value })
              }
              placeholder="Напр.: whiteex"
              required
            />
          </div>

          <div className="col-md-6">
            <label className="form-label">Адреса компанії</label>
            <input
              type="text"
              className="form-control"
              value={formData.address}
              onChange={(e) =>
                setFormData({ ...formData, address: e.target.value })
              }
              placeholder="Напр.: 5820 51 St, AB, Canada"
            />
          </div>

          <div className="col-md-6">
            <label className="form-label">Телефон</label>
            <input
              type="text"
              className="form-control"
              value={formData.phone}
              onChange={(e) =>
                setFormData({ ...formData, phone: e.target.value })
              }
              placeholder="+17803322299"
            />
          </div>

          <div className="col-md-6">
            <label className="form-label">Business Number</label>
            <input
              type="text"
              className="form-control"
              value={formData.businessNumber}
              onChange={(e) =>
                setFormData({ ...formData, businessNumber: e.target.value })
              }
              placeholder="BN: XXXXXXXX"
            />
          </div>

          <div className="col-md-6">
            <label className="form-label">Мова HTML</label>
            <select
              className="form-select"
              value={formData.langAttr}
              onChange={(e) =>
                setFormData({ ...formData, langAttr: e.target.value })
              }
            >
              <option value="en">English (en)</option>
              <option value="de">Deutsch (de)</option>
              <option value="fr">Français (fr)</option>
              <option value="ja">日本語 (ja)</option>
              <option value="hr">Hrvatski (hr)</option>
              <option value="sl">Slovensko (sl)</option>
              <option value="uk">Українська (uk)</option>
            </select>
          </div>
          <div className="col-md-6">
            <label className="form-label">Cookie Script</label>
            <select
              className="form-select"
              name="cookieVariant"
              value={formData.cookieVariant}
              onChange={handleInputChange}
            >
              <option value="v1">v1</option>
              <option value="v2">v2</option>
              <option value="v3">v3</option>
              <option value="v4">v4</option>
              <option value="v5">v5</option>
            </select>
          </div>
        </div>
      </div>

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
