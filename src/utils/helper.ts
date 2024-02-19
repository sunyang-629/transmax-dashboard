import round from 'lodash/round'

export const getPercentageString = (part: number = 0, total: number): string => {
  return `${Math.round(round(part / total, 2) * 100)}%`
}
