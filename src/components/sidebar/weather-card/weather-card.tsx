import React from 'react'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import Typography from '@mui/material/Typography'

const WeatherCard = () => {
  return (
    <Card sx={{ backgroundImage: 'none', boxShadow: 'none' }} variant="outlined">
      <CardContent>
        <Typography variant="h5">Card Container</Typography>
      </CardContent>
    </Card>
  )
}

export default WeatherCard
