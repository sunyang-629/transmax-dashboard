import type { Weather, Route } from '../types'

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

export const getMockDelayRoutes = (): Route[] => [
  {
    road: {
      name: 'Monash Fwy Out',
      from: 'Kings Ways',
      to: 'EastLink',
    },
    alert_level: 4,
    distance: 13,
    duration: 45,
  },
]
