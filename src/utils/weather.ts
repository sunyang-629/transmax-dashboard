import { WeatherMain } from '../types'

/**
 * * Retrieves the icon index corresponding to the provided weather type.
 * * If the provided weather type is included in the WeatherMain enum, return its corresponding icon index
 * * Otherwise, return 0 as the default icon index
 * @param {keyof typeof WeatherMain} weather - The weather type.
 * @returns {number} The icon index.
 */
export const getIconIndex = (weather: keyof typeof WeatherMain): number => {
  return Object.values(WeatherMain)
    .filter((value) => typeof value === 'string')
    .includes(weather)
    ? WeatherMain[weather]
    : 0
}
