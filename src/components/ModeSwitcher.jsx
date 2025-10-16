import React from "react";

export default function ModeSwitcher({ mode, setMode }) {
  return (
    <div className="text-center my-4">
      <h2 className="h5 mb-3">🔧 Вибір типу сайту</h2>

      <button
        className={`btn me-2 ${
          mode === "single" ? "btn-warning" : "btn-outline-warning"
        }`}
        onClick={() => setMode("single")}
      >
        🔹 Односторінковий сайт
      </button>

      <button
        className={`btn ${
          mode === "multi" ? "btn-warning" : "btn-outline-warning"
        }`}
        onClick={() => setMode("multi")}
      >
        🔸 Багатосторінковий сайт
      </button>
    </div>
  );
}
