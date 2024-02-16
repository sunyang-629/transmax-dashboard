import { useState } from 'react'
import { getMockWeather } from '../utils'
import { Weather, WeatherMain } from '../types'
import WbSunnyIcon from '@mui/icons-material/WbSunny'
import CloudQueueIcon from '@mui/icons-material/CloudQueue'
import ThunderstormIcon from '@mui/icons-material/Thunderstorm'
import AcUnitIcon from '@mui/icons-material/AcUnit'

const useWeather = () => {
  const [weather] = useState<Weather>(() => getMockWeather())
  const weatherIconList = [WbSunnyIcon, CloudQueueIcon, ThunderstormIcon, AcUnitIcon]

  let iconIndex = 0
  if (
    Object.values(WeatherMain)
      .filter((value) => typeof value === 'string')
      .includes(weather.weather.main)
  ) {
    iconIndex = WeatherMain[weather.weather.main]
  }
  const weatherIcon = weatherIconList[iconIndex]

  return { weather, weatherIcon }
}

export default useWeather
