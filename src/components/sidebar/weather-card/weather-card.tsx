import React from 'react'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import Typography from '@mui/material/Typography'
import useWeather from '../../../hooks/useWeather'
import { Grid, SvgIcon } from '@mui/material'
import { getWeatherTime } from '../../../utils'
// import { WeatherMain } from '../../../types'
// import { AcUnitIcon } from '../../../utils/weather'

const WeatherCard = () => {
  const { weather, weatherIcon } = useWeather()

  return (
    <Card sx={{ backgroundImage: 'none', boxShadow: 'none' }} variant="outlined">
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
          <Grid item xs={12} sx={{ border: '1px solid #828282' }}>
            <Typography variant="h5">{weather.forecast.temp}</Typography>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  )
}

export default WeatherCard
