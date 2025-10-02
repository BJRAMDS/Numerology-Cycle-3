/**
 * @fileoverview Main application entry point for front-end logic.
 * Handles UI interactions, logging, and integration of numerology modules.
 */

// Import necessary functions from your existing runtime and the new numerology module
import { logPhase, initThemeToggle } from './runtimeLogger.js';
import { calculateLifePathNumber } from './modules/numerologyCore.js'; 

// --- Core Runtime Logic (Previously in index.html) ---

// 🔄 Theme toggle
initThemeToggle();

// 🧭 Dropdown logic
const phaseSelect = document.getElementById("phaseSelect");
const logPhaseBtn = document.getElementById("logPhaseBtn");
const outputBox = document.getElementById("phaseOutput");

logPhaseBtn.addEventListener("click", () => {
    const phaseKey = phaseSelect.value;
    logPhase(phaseKey, outputBox); // NOTE: Assuming logPhase accepts the output element
});

// 🧩 Grid logic
document.querySelectorAll('.grid-item').forEach(item => {
    item.addEventListener('click', () => {
        const phase = item.getAttribute('data-phase');
        logPhase(phase, outputBox);
    });
});

// --- Numerology Calculator Logic (NEW) ---

const monthInput = document.getElementById('inputMonth');
const dayInput = document.getElementById('inputDay');
const yearInput = document.getElementById('inputYear');
const calcButton = document.getElementById('calculateLifePathBtn');
const lifePathOutput = document.getElementById('lifePathOutput');


/**
 * Event handler to read input fields and display the calculated Life Path Number.
 */
function handleLifePathCalculation() {
    const month = parseInt(monthInput.value, 10);
    const day = parseInt(dayInput.value, 10);
    const year = parseInt(yearInput.value, 10);

    // Basic input validation
    if (isNaN(month) || isNaN(day) || isNaN(year)) {
        lifePathOutput.textContent = 'Error: Invalid date input.';
        return;
    }
    
    // Call the core calculation function
    const lifePath = calculateLifePathNumber(month, day, year);
    
    // Display the result
    lifePathOutput.textContent = `Life Path: ${lifePath}`;
    
    // Optional: Log the action for EOD Reports / Paradox Tracking
    console.log(`[NUMEROLOGY LOG] Calculated Life Path for ${month}/${day}/${year}: ${lifePath}`);
}


// Attach the calculation function to the button click
calcButton.addEventListener('click', handleLifePathCalculation);

// Trigger calculation on Enter key press in any input field
[monthInput, dayInput, yearInput].forEach(input => {
    input.addEventListener('keydown', (event) => {
        if (event.key === 'Enter') {
            event.preventDefault(); // Prevents default form submission
            handleLifePathCalculation();
        }
    });
});