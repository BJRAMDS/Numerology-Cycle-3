// Diplomatic Runtime Flow – Symbolic Sequence (Aligned with TITAN Deciders + PhaseCore Standards)
// Numerology values are now computed live from the calendar date (digit-sum reduction
// of the full MM-DD-YYYY string), instead of the old hardcoded April 2025 stub data.

const THEMES = {
  1: { name: "Vision Day",      role: "Initiator",   phase: "Vision" },
  2: { name: "Strategy Day",    role: "Collaborator",phase: "Diplomacy" },
  3: { name: "Build Day",       role: "Communicator",phase: "Expression" },
  4: { name: "Leadership Day",  role: "Builder",     phase: "Execution" },
  5: { name: "Community Day",   role: "Connector",   phase: "Outreach" },
  6: { name: "Reflection Day",  role: "Observer",    phase: "Review" },
  7: { name: "Creative Day",    role: "Explorer",    phase: "Ideation" },
  8: { name: "Systems Day",     role: "Architect",   phase: "Structure" },
  9: { name: "Rest & Reset Day",role: "Closer",      phase: "Integration" },
};

/**
 * Reduces the full MM-DD-YYYY digit string of a date to a single digit (1-9),
 * matching the digit-sum method used across the 9-Day Cycle tracking.
 * @param {Date} date
 * @returns {number} 1-9
 */
function digitSumCycle(date) {
  const mm = String(date.getMonth() + 1).padStart(2, "0");
  const dd = String(date.getDate()).padStart(2, "0");
  const yyyy = String(date.getFullYear());
  const digits = `${mm}${dd}${yyyy}`;

  let sum = digits.split("").reduce((acc, d) => acc + Number(d), 0);
  while (sum > 9) {
    sum = String(sum).split("").reduce((acc, d) => acc + Number(d), 0);
  }
  // Digital root convention: a total that reduces to 0 (i.e. was a multiple of 9) reads as 9.
  return sum === 0 ? 9 : sum;
}

function isoDate(date) {
  return date.toISOString().slice(0, 10);
}

function buildPhase(date, roleOverride, phaseOverride, noteOverride) {
  const numerology = digitSumCycle(date);
  const theme = THEMES[numerology];
  return {
    numerology,
    date: isoDate(date),
    role: roleOverride || theme.role,
    phase: phaseOverride || theme.phase,
    task: numerology,
    note: noteOverride || `${theme.name} — cycle ${numerology}.`,
    log() {
      console.log(`[phase] ${this.date} | Numerology: ${this.numerology} | ${this.note}`);
    },
  };
}

const today = new Date();
const tomorrow = new Date(today);
tomorrow.setDate(today.getDate() + 1);

export const runtimeDiplomacy = {
  onStart: buildPhase(today),
  onUpdate: buildPhase(today),
  onEOD: buildPhase(today, "Observer", "Review", undefined),
  onStop: buildPhase(tomorrow),
};
