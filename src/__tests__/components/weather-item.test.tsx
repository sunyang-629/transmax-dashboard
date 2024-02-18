import React from 'react'
import { render } from '@testing-library/react'
import WeatherItem, { WeatherItemProps } from '../../components/sidebar/weather-card/weather-item'

describe('WeatherItem', () => {
  const renderWeatherItem = (props: WeatherItemProps) => {
    return render(<WeatherItem {...props} />)
  }

  it('renders with title and children correctly', () => {
    const { getByText, getByTestId } = renderWeatherItem({
      title: 'Test Title',
      unit: 'Test Unit',
      children: 'Test Children',
    })

    const weatherItemTitleStyle = window.getComputedStyle(getByTestId('weather-item-title'))
    expect(weatherItemTitleStyle.alignSelf).toBe('center')
    expect(weatherItemTitleStyle.lineHeight).toBe('1.1rem')
    expect(weatherItemTitleStyle.fontWeight).toBe('300')
    expect(weatherItemTitleStyle.width).toBe('65%')
    expect(getByText('Test Title')).toBeInTheDocument()

    const weatherItemValueStyle = window.getComputedStyle(getByTestId('weather-item-value'))
    expect(weatherItemValueStyle.fontSize).toBe('1.1rem')
    expect(weatherItemValueStyle.lineHeight).toBe('1.1rem')
    expect(weatherItemValueStyle.fontFamily).toBe('"Roboto","Helvetica","Arial",sans-serif')
    expect(weatherItemValueStyle.width).toBe('35%')
    expect(weatherItemValueStyle.fontWeight).toBe('500')
    expect(getByText('Test Children')).toBeInTheDocument()

    const weatherItemUnitStyle = window.getComputedStyle(getByTestId('Test Unit unit'))
    expect(weatherItemUnitStyle.alignSelf).toBe('center')
    expect(weatherItemUnitStyle.fontWeight).toBe('300')
    expect(getByText('Test Unit')).toBeInTheDocument()
  })

  it('renders without unit correctly', () => {
    const { getByText, queryByTestId } = renderWeatherItem({
      title: 'Test Title',
      children: 'Test Children',
    })

    expect(getByText('Test Title')).toBeInTheDocument()
    expect(getByText('Test Children')).toBeInTheDocument()
    expect(queryByTestId('Test Unit')).not.toBeInTheDocument()
  })
})
