import { WeatherMain } from '../types'

export const getIconIndex = (weather: keyof typeof WeatherMain): number => {
  return Object.values(WeatherMain)
    .filter((value) => typeof value === 'string')
    .includes(weather)
    ? WeatherMain[weather]
    : 0
}
