import Drawer from '@mui/material/Drawer'
import React from 'react'
import { SIDE_NAV_WIDTH } from '../../constants'

const Sidebar = () => {
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
      <div>SideBar</div>
    </Drawer>
  )
}

export default Sidebar
