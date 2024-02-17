import React, { FC } from 'react'
import type { Route } from '../../../types'
import Typography from '@mui/material/Typography'
import { Stack } from '@mui/material'
import CircleIcon from '@mui/icons-material/Circle'
import SouthIcon from '@mui/icons-material/South'
import { DOT_COLOR_LIST } from '../../../constants'

type DelayedRoutesItemProps = {
  route: Route
}

const DelayedRoutesItem: FC<DelayedRoutesItemProps> = ({ route }) => {
  return (
    <Stack
      sx={{
        borderBottom: (theme) => `1px solid ${theme.palette.divider}`,
        padding: '4px 16px 2px 6px',
        ':last-child': { borderWidth: 0 },
      }}
    >
      <Stack flexDirection="row" justifyContent="space-between">
        <Stack flexDirection="row" alignItems="center">
          <CircleIcon
            sx={{
              fontSize: '0.7rem',
              width: '1.5rem',
              color: DOT_COLOR_LIST[route.alert_level],
            }}
          />
          <Typography variant="body1" color={'text.secondary'}>
            {route.road.name}
          </Typography>
        </Stack>

        <Typography
          variant="body2"
          color={'text.disbaled'}
          fontSize="12px"
          alignSelf="center"
          letterSpacing="-0.06rem"
        >
          {route.distance}&nbsp;km
        </Typography>
      </Stack>

      <Stack flexDirection="row" justifyContent="space-between">
        <Stack flexDirection="row">
          <SouthIcon sx={{ alignSelf: 'center' }} />
          <Stack>
            <Typography variant="body2" color={'text.disabled'} fontSize="12px">
              {route.road.from}
            </Typography>
            <Typography variant="body2" color={'text.disabled'} fontSize="12px">
              {route.road.to}
            </Typography>
          </Stack>
        </Stack>

        <Typography
          variant="body1"
          color={'text.primary'}
          fontSize="1.5rem"
          fontWeight={600}
          component="span"
          display="inherit"
          alignItems="baseline"
        >
          {route.duration}
          <Typography variant="body2" color={'text.primary'} fontSize="12px">
            &nbsp;min
          </Typography>
        </Typography>
      </Stack>
    </Stack>
  )
}

export default DelayedRoutesItem
