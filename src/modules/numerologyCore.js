/**
 * @fileoverview Core numerology calculation functions.
 * This module handles the reduction of numbers and calculation of life path.
 */

/**
 * CORE HELPER: Reduces any positive integer down to a single digit (1-9) or a Master Number (11, 22, 33).
 * This function is used for *individual components* (Month, Day, Year) in Life Path, 
 * where the first instance of a Master Number is kept.
 * * NOTE: The logic for master number handling is slightly different in the Life Path final sum.
 *
 * @param {number|string} num The number to reduce.
 * @returns {number} The final single-digit or Master Number.
 */
function reduceToSingleOrMaster(num) {
    let str = String(num).replace(/[^0-9]/g, '');
    let sum = 0;

    // Outer loop continues until the number is a single digit (or we keep a Master Number)
    while (str.length > 1) {
        sum = 0;
        for (let i = 0; i < str.length; i++) {
            sum += parseInt(str[i], 10);
        }

        // Check for Master Numbers (11, 22, 33) *before* the next reduction
        if (sum === 11 || sum === 22 || sum === 33) {
            return sum; // Return the Master Number and stop
        }
        
        // Prepare for the next reduction iteration
        str = String(sum);
    }
    
    // If the input was already a single digit or the loop finished, return the final sum/digit.
    return parseInt(str, 10);
}

/**
 * CORE HELPER: Reduces any positive integer down to a single digit (1-9) only.
 * This is used for standard reduction where Master Numbers are not preserved.
 *
 * @param {number|string} num The number to reduce.
 * @returns {number} The final single-digit (1-9).
 */
function reduceToSingleDigit(num) {
    let str = String(num).replace(/[^0-9]/g, '');
    let sum = 0;

    // Loop continues until the string representation is a single character
    while (str.length > 1) {
        sum = 0;
        for (let i = 0; i < str.length; i++) {
            sum += parseInt(str[i], 10);
        }
        str = String(sum);
    }
    
    return parseInt(str, 10);
}


/**
 * Calculates the Life Path Number from a full date of birth (MM-DD-YYYY).
 * The Life Path Number is the sum of the reduced Month, Day, and Year.
 * Master Numbers (11, 22, 33) are only preserved in the final sum.
 *
 * @param {number} month e.g., 10 for October
 * @param {number} day e.g., 25
 * @param {number} year e.g., 1995
 * @returns {number} The final Life Path Number.
 */
function calculateLifePathNumber(month, day, year) {
    // 1. Reduce components individually, preserving any Master Numbers (11, 22, 33)
    const reducedMonth = reduceToSingleOrMaster(month);
    const reducedDay = reduceToSingleOrMaster(day);
    const reducedYear = reduceToSingleOrMaster(year);

    // 2. Sum the reduced components
    let finalSum = reducedMonth + reducedDay + reducedYear;

    // 3. Final Master Number Check: If the total sum is 11, 22, or 33, we keep it.
    if (finalSum === 11 || finalSum === 22 || finalSum === 33) {
        return finalSum;
    }
    
    // 4. Otherwise, perform a final, standard reduction to a single digit (1-9).
    // This uses the dedicated helper to clean up the code.
    return reduceToSingleDigit(finalSum);
}


export {
    reduceToSingleOrMaster as reduceNumber, // Export the original 'reduceNumber' name for compatibility
    reduceToSingleDigit,
    calculateLifePathNumber
};