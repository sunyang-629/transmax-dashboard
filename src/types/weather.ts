export type Weather = {
  weather: {
    main: keyof typeof WeatherMain
  }
  main: {
    temp: number
    humidity: number
    pop: number
  }
  wind: {
    speed: number
  }
  forecast: {
    main: keyof typeof WeatherMain
    temp: number
  }
  name: string
}

export enum WeatherMain {
  Clear = 1,
  Cloud,
  Rain,
  Snow,
}
