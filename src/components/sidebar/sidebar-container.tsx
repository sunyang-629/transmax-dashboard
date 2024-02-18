import React, { FC, PropsWithChildren } from 'react'
import Drawer from '@mui/material/Drawer'
import Stack from '@mui/material/Stack'
import { useMediaQuery, useTheme } from '@mui/material'
import { SIDE_NAV_WIDTH } from '../../constants'

interface SidebarContainerProps extends PropsWithChildren {
  open: boolean
  onClose: () => void
}

const SidebarContainer: FC<SidebarContainerProps> = ({ children, open, onClose }) => {
  const theme = useTheme()
  const lgUp = useMediaQuery(theme.breakpoints.up('lg'))

  if (lgUp) {
    return (
      <Drawer
        anchor="left"
        open
        PaperProps={{
          sx: {
            backgroundColor: 'neutral.800',
            color: 'common.white',
            width: SIDE_NAV_WIDTH,
            padding: 2,
          },
        }}
        variant="permanent"
      >
        <Stack spacing={2}>{children}</Stack>
      </Drawer>
    )
  }

  return (
    <Drawer
      anchor="left"
      onClose={onClose}
      open={open}
      PaperProps={{
        sx: {
          backgroundColor: 'neutral.800',
          color: 'common.white',
          width: SIDE_NAV_WIDTH,
          padding: 2,
          backgroundImage: 'none',
        },
      }}
      sx={{ zIndex: (theme) => theme.zIndex.appBar + 100 }}
      variant="temporary"
    >
      <Stack spacing={2}>{children}</Stack>
    </Drawer>
  )
}

export default SidebarContainer
