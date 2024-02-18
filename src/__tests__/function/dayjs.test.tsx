import { getWeatherTime } from '../../utils/dayjs' // Adjust the import path as necessary
import dayjs from 'dayjs'
import advancedFormat from 'dayjs/plugin/advancedFormat'
import MockDate from 'mockdate'

dayjs.extend(advancedFormat)

const mockDate = 'Sun Feb 18 2024 12:00:00 GMT+1000 (Australian Eastern Standard Time)'
MockDate.set(mockDate)

describe('getWeatherTime', () => {
  it('returns the formatted weather time', () => {
    const weatherTime = getWeatherTime()
    expect(weatherTime).toBe('Sun 18th \xa0\xa012:00 PM')
  })
})
