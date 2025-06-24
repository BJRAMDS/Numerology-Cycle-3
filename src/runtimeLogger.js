// runtimeLogger.js
// Purpose: Handle phase logging for dynamic web interface
// Author: brforeal.dev@gmail.com
// Date: 06/06/2025
// Context: Numerology-Cycle-3 (Expression)

export function logPhase(phaseKey) {
  const outputBox = document.getElementById("phaseOutput");

  if (!window.runtimeDiplomacy) {
    console.error("[RuntimeLog] Error: runtimeDiplomacy not loaded.");
    outputBox.textContent = "⚠️ Error: Phase data unavailable.";
    return;
  }

  const phase = runtimeDiplomacy[phaseKey];

  if (phase) {
    const message = `[${phaseKey}] ${phase.date} | Numerology: ${phase.numerology} | ${phase.note}`;
    console.log("[RuntimeLog]", message);
    console.table(runtimeDiplomacy); // Shows full table view
    outputBox.textContent = message;
  } else {
    console.warn(`[RuntimeLog] Phase "${phaseKey}" not found.`);
    outputBox.textContent = "⚠️ Phase not found.";
  }
}

// Optional: Theme toggle helper (can be used from main if preferred)
export function initThemeToggle() {
  const toggleBtn = document.getElementById("themeToggle");
  if (!toggleBtn) return;

  toggleBtn.addEventListener("click", () => {
    const currentTheme = document.body.getAttribute("data-theme");
    const newTheme = currentTheme === "day" ? "night" : "day";
    document.body.setAttribute("data-theme", newTheme);
    toggleBtn.textContent = newTheme === "day" ? "🌞 Toggle Theme" : "🌙 Toggle Theme";
    console.log(`[Theme] Switched to ${newTheme} mode`);
  });
}
