import React from 'react'
import SidebarContainer from './sidebar-container'
import { WeatherCard } from './weather-card'
import { SidebarAccordion } from '../accordions'
import Typography from '@mui/material/Typography'
import { DelayedRoutesCard } from './delayed-routes-card'

const Sidebar = () => {
  return (
    <SidebarContainer>
      <WeatherCard />
      <DelayedRoutesCard />
      <SidebarAccordion title="RAMP CHART">
        <Typography>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
          sit amet blandit leo lobortis eget.
        </Typography>
      </SidebarAccordion>
    </SidebarContainer>
  )
}

export default Sidebar
