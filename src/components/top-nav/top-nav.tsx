import React, { FC } from 'react'
//UI
import useMediaQuery from '@mui/material/useMediaQuery'
import Box from '@mui/material/Box'
import Stack from '@mui/material/Stack'
import { alpha, useTheme } from '@mui/material/styles'
import IconButton from '@mui/material/IconButton'
import SvgIcon from '@mui/material/SvgIcon'
import MenuIcon from '@mui/icons-material/Menu'
//constants
import { SIDE_NAV_WIDTH, TOP_NAV_HEIGHT } from '../../constants'

type TopNavProps = {
  onOpen: () => void
}

const TopNav: FC<TopNavProps> = ({ onOpen }) => {
  const theme = useTheme()
  const lgUp = useMediaQuery(theme.breakpoints.up('lg'))

  return (
    <Box
      component="header"
      sx={{
        backdropFilter: 'blur(6px)',
        backgroundColor: (theme) => alpha(theme.palette.background.default, 0.8),
        position: 'sticky',
        left: {
          lg: `${SIDE_NAV_WIDTH}px`,
        },
        top: 0,
        width: {
          lg: `calc(100% - ${SIDE_NAV_WIDTH}px)`,
        },
        zIndex: (theme) => theme.zIndex.appBar,
      }}
    >
      <Stack
        alignItems="center"
        direction="row"
        justifyContent="space-between"
        spacing={2}
        sx={{
          minHeight: TOP_NAV_HEIGHT,
          px: 2,
        }}
      >
        {!lgUp && (
          <IconButton onClick={onOpen}>
            <SvgIcon fontSize="small">
              <MenuIcon />
            </SvgIcon>
          </IconButton>
        )}
      </Stack>
    </Box>
  )
}

export default TopNav
