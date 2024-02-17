import React, { FC, PropsWithChildren } from 'react'
import { SIDE_NAV_WIDTH } from '../../constants'
import Drawer from '@mui/material/Drawer'
import Stack from '@mui/material/Stack'

const SidebarContainer: FC<PropsWithChildren> = ({ children }) => {
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

export default SidebarContainer
