import { WeatherMain } from '../../types'
import { getIconIndex } from '../../utils'

describe('getIconIndex function testing', () => {
  it('returns correct index for valid weather', () => {
    const index = getIconIndex('Cloud')
    expect(index).toBe(1)
  })

  it('returns 0 for unknown weather', () => {
    const index = getIconIndex('UnknownWeather' as keyof typeof WeatherMain)
    expect(index).toBe(0)
  })
})
