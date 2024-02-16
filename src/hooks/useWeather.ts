import { useState } from 'react'
import { getMockWeather } from '../utils'
import { Weather } from '../types'

const useWeather = () => {
  const [weather] = useState<Weather>(() => getMockWeather())

  return { weather }
}

export default useWeather
