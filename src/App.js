import React, { useState } from "react";
import "./App.css";
import GeneratedSite from "./components/GeneratedSite";
import ModeSwitcher from "./components/ModeSwitcher";

function App() {
  // 🔹 Зберігаємо вибраний режим (за замовчуванням "single")
  const [mode, setMode] = useState("single");

  return (
    <div>
      {/* Компонент з кнопками */}
      <ModeSwitcher mode={mode} setMode={setMode} />

      {/* Генератор сайту */}
      <GeneratedSite mode={mode} />
    </div>
  );
}

export default App;
