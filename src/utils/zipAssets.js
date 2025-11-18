// src/utils/zipAssets.js

const base = process.env.PUBLIC_URL || "/whites-generator"; // для prod буде наприклад "/whites-generator"

const cookieFiles = {
  v1: `${base}/assets/js/cookie1.min.js`,
  v2: `${base}/assets/js/cookie2.min.js`,
  v3: `${base}/assets/js/cookie3.min.js`,
  v4: `${base}/assets/js/cookie4.min.js`,
  v5: `${base}/assets/js/cookie5.min.js`,
};

export async function addAssetsToZip(zip, config = {}) {
  const variant = config.cookieVariant || "v1";
  const fileUrl = cookieFiles[variant] || cookieFiles.v1;

  const jsFolder = zip.folder("assets/js");

  try {
    const res = await fetch(fileUrl);

    if (!res.ok) {
      console.error("❌ Failed to fetch cookie script:", fileUrl, res.status);
      return;
    }

    // важливо: беремо сирі байти, а не текст
    const buffer = await res.arrayBuffer();

    jsFolder.file("cookie.min.js", buffer);
  } catch (err) {
    console.error("❌ Error while fetching cookie script:", err);
  }
}
