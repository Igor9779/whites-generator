// downloadHTML.js
export const downloadHTML = (content) => {
  const blob = new Blob([content], { type: "text/html" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = `whiteex-${Date.now()}.html`;
  a.click();
  URL.revokeObjectURL(url);
};
