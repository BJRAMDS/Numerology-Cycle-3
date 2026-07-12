import { runtimeDiplomacy } from "./runtimeDiplomacy.js";

const runtimeLog = document.getElementById("runtimeLog");

export function addRuntimeLog(message) {

    const timestamp = new Date().toLocaleTimeString();

    console.log(message);

    if (runtimeLog) {

        runtimeLog.textContent +=
            `\n[${timestamp}] ${message}`;

    }

}

export function logPhase(phaseKey, outputBox) {

    const phase = runtimeDiplomacy[phaseKey];

    if (!phase) {

        addRuntimeLog(`Unknown phase: ${phaseKey}`);

        return;

    }

    phase.log();

    if (outputBox) {

        outputBox.textContent = phase.note;

    }

    addRuntimeLog(`Phase executed → ${phaseKey}`);

}

export function initThemeToggle() {

    const button = document.getElementById("themeToggle");

    if (!button) return;

    button.addEventListener("click", () => {

        const body = document.body;

        const current = body.dataset.theme;

        const next = current === "day"
            ? "night"
            : "day";

        body.dataset.theme = next;

        button.textContent =
            next === "day"
                ? "🌞 Toggle Theme"
                : "🌜 Toggle Theme";

        const currentTheme =
            document.getElementById("currentTheme");

        if (currentTheme) {

            currentTheme.textContent =
                `Theme: ${next}`;

        }

        addRuntimeLog(`Theme changed → ${next}`);

    });

}
