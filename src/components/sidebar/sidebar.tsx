import React from 'react'
import SidebarContainer from './sidebar-container'
import { WeatherCard } from './weather-card'
import { SidebarAccordion } from '../accordions'
import Typography from '@mui/material/Typography'

const Sidebar = () => {
  return (
    <SidebarContainer>
      <WeatherCard />
      <SidebarAccordion title="DELAY ROUTES">
        <Typography>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
          sit amet blandit leo lobortis eget.
        </Typography>
      </SidebarAccordion>
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
