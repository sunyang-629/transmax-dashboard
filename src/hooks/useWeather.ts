import { useState } from 'react'
//UI
import WbSunnyIcon from '@mui/icons-material/WbSunny'
import CloudQueueIcon from '@mui/icons-material/CloudQueue'
import ThunderstormIcon from '@mui/icons-material/Thunderstorm'
import AcUnitIcon from '@mui/icons-material/AcUnit'
//utils
import { getMockWeather, getIconIndex } from '../utils'
//typs
import { Weather } from '../types'

const useWeather = () => {
  const [weather] = useState<Weather>(() => getMockWeather())
  const weatherIconList = [WbSunnyIcon, CloudQueueIcon, ThunderstormIcon, AcUnitIcon]

  const weatherIcon = weatherIconList[getIconIndex(weather.weather.main)]
  const forecastIcon = weatherIconList[getIconIndex(weather.forecast.main)]

  return { weather, weatherIcon, forecastIcon }
}

export default useWeather
