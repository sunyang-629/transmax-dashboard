import { Weather } from '../types'

export const getMockWeather = (): Weather => ({
  weather: {
    main: 'Cloud',
  },
  main: {
    temp: 32,
    humidity: 78,
    pop: 34,
  },
  wind: {
    speed: 21,
  },
  forecast: {
    main: 'Clear',
    temp: 30,
  },
  name: 'Brisbane',
})
