import { runtimeDiplomacy } from './runtimeDiplomacy.js';

// 🧭 Phase Logging Utility
export function logPhase(phaseKey) {
  if (!runtimeDiplomacy || !runtimeDiplomacy[phaseKey]) {
    console.error("[RuntimeLog] Error: runtimeDiplomacy not loaded or phase key not found:", phaseKey);
    return;
  }

  const phase = runtimeDiplomacy[phaseKey];
  phase.log(); // Execute the associated log method
}

// 🌞 Theme Toggle Utility
export function initThemeToggle() {
  const toggleBtn = document.getElementById("themeToggle");
  const root = document.body;

  if (!toggleBtn || !root) {
    console.warn("[ThemeToggle] Missing button or root element.");
    return;
  }

  toggleBtn.addEventListener("click", () => {
    const currentTheme = root.getAttribute("data-theme");
    const newTheme = currentTheme === "day" ? "night" : "day";
    root.setAttribute("data-theme", newTheme);
    toggleBtn.textContent = newTheme === "day" ? "🌞 Toggle Theme" : "🌜 Toggle Theme";
  });
}
