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
    id: '34cba534-9f16-47ab-9cf7-115c06629020',
    road: {
      name: 'Monash Fwy Out',
      from: 'Kings Ways',
      to: 'EastLink',
    },
    alert_level: 3,
    distance: 13,
    duration: 45,
  },
  {
    id: '512c7a56-8775-4a3f-85b9-462fc88a14fe',
    road: {
      name: 'Monash Fwy Out',
      from: 'Kings Ways',
      to: 'EastLink',
    },
    alert_level: 3,
    distance: 15,
    duration: 28,
  },
  {
    id: '1baf373d-d4ec-44ff-82f3-13b8bf1cd7f0',
    road: {
      name: 'Western Ring Rd',
      from: 'West Gate Fwy',
      to: 'Western Fwy',
    },
    alert_level: 1,
    distance: 5,
    duration: 5,
  },
  {
    id: 'b0b9c3ed-a656-4932-9b59-e0d6d577097d',
    road: {
      name: 'Western Ring Rd',
      from: 'Hoddle St',
      to: 'Springvale Rd',
    },
    alert_level: 1,
    distance: 15,
    duration: 25,
  },
]
