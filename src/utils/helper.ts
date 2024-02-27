import round from 'lodash/round'

/**
 * * Generates a string representing the percentage of a part relative to a total.
 * @param {number} part - The value of the part.
 * @param {number} total - The value of the total.
 * @returns {string} A string representing the percentage of the part relative to the total.
 */
export const getPercentageString = (part: number = 0, total: number): string => {
  return `${Math.round(round(part / total, 2) * 100)}%`
}
