import React, { FC, PropsWithChildren } from 'react'
import Typography from '@mui/material/Typography'

interface WeatherItemProps extends PropsWithChildren {
  title: string
  unit?: string
}

const WeatherItem: FC<WeatherItemProps> = ({ title, children, unit }) => {
  return (
    <div style={{ display: 'flex', flexDirection: 'row', marginBottom: '0.33rem' }}>
      <Typography
        variant="body2"
        alignSelf="center"
        lineHeight="1.1rem"
        fontWeight={300}
        color={'text.secondary'}
        width="65%"
      >
        {title}
      </Typography>
      <Typography
        variant="body1"
        fontSize="1.1rem"
        lineHeight="1.1rem"
        width="35%"
        fontWeight={500}
        component="span"
        display="inherit"
      >
        {children}
        <Typography variant="body2" alignSelf="center" fontWeight={300} color={'text.secondary'}>
          &nbsp;{unit}
        </Typography>
      </Typography>
    </div>
  )
}

export default WeatherItem
