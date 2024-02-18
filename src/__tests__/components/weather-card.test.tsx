import { render } from '@testing-library/react'
import { WeatherCard } from '../../components/sidebar/weather-card'
import AcUnitIcon from '@mui/icons-material/AcUnit'

jest.mock('../../hooks', () => ({
  useWeather: jest.fn(),
}))

describe('weather card component testing', () => {
  beforeEach(() => {
    jest.clearAllMocks()
  })
  it('should render weather information correctly', () => {
    const mockWeatherData = {
      weather: {
        name: 'Test City',
        main: {
          temp: 20,
          humidity: 50,
          pop: 30,
        },
        wind: {
          speed: 10,
        },
        forecast: {
          temp: 25,
        },
      },
      weatherIcon: AcUnitIcon,
      forecastIcon: AcUnitIcon,
    }
    require('../../hooks').useWeather.mockReturnValue(mockWeatherData)

    const { getByText, queryByText, getByTestId } = render(<WeatherCard />)

    expect(getByTestId('weather-card-container')).toBeInTheDocument()

    const cityName = getByTestId('city-name')
    expect(cityName).toBeInTheDocument()
    expect(window.getComputedStyle(cityName).lineHeight).toBe('1')
    expect(window.getComputedStyle(cityName).color).toBe('rgba(0, 0, 0, 0.6)')
    expect(getByText('Test City')).toBeInTheDocument()

    const weatherTemp = getByTestId('weather-temp')
    expect(weatherTemp).toBeInTheDocument()
    expect(window.getComputedStyle(weatherTemp).lineHeight).toBe('1')
    expect(getByText('20°')).toBeInTheDocument()
    expect(queryByText('29°')).not.toBeInTheDocument()

    const currentTime = getByTestId('current-time')
    expect(currentTime).toBeInTheDocument()
    expect(window.getComputedStyle(currentTime).lineHeight).toBe('1')
    expect(window.getComputedStyle(currentTime).color).toBe('rgba(0, 0, 0, 0.6)')
    expect(window.getComputedStyle(currentTime).fontSize).toBe('0.75rem')

    expect(getByTestId('weather-icon')).toBeInTheDocument()

    expect(getByText('50%')).toBeInTheDocument()
    expect(getByText('30%')).toBeInTheDocument()
    expect(getByText('10')).toBeInTheDocument()
    expect(getByTestId('kmh unit')).toBeInTheDocument()

    const computedStyle = window.getComputedStyle(getByTestId('kmh unit'))
    expect(computedStyle.color).toBe('rgba(0, 0, 0, 0.6)')

    expect(getByText('25°')).toBeInTheDocument()
  })
})
