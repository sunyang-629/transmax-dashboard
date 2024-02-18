import React from 'react'
//UI
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import Typography from '@mui/material/Typography'
import { Grid, SvgIcon } from '@mui/material'
//hooks
import { useWeather } from '../../../hooks'
//utils
import { getWeatherTime } from '../../../utils'
//types
import WeatherItem from './weather-item'

const WeatherCard = () => {
  const { weather, weatherIcon, forecastIcon } = useWeather()

  return (
    <Card sx={{ backgroundImage: 'none', boxShadow: 'none' }}>
      <CardContent sx={{ paddingTop: 0 }}>
        <Grid container justifyContent="center" alignItems="center">
          <Grid item xs={6} textAlign="center">
            <Typography variant="body1" color={'text.secondary'} lineHeight={1}>
              {weather.name}
            </Typography>
            <Typography variant="h3" lineHeight={1}>
              {weather.main.temp}&deg;
            </Typography>
            <Typography variant="body2" color={'text.secondary'} lineHeight={1} fontSize="0.75rem">
              {getWeatherTime()}
            </Typography>
          </Grid>
          <Grid item xs={6}>
            <SvgIcon component={weatherIcon} sx={{ width: '100%', height: '100%' }} />
          </Grid>
          <Grid item xs={12} padding="5px">
            <WeatherItem title="Humidity">{weather.main.humidity}%</WeatherItem>
            <WeatherItem title="Change of Rain">{weather.main.pop}%</WeatherItem>
            <WeatherItem title="Wind" unit="kmh">
              {weather.wind.speed}
            </WeatherItem>
            <WeatherItem title="Tomorrow">
              {weather.forecast.temp}&deg;
              <SvgIcon component={forecastIcon} sx={{ height: '0.9rem' }} />
            </WeatherItem>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  )
}

export default WeatherCard
