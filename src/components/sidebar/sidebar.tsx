import React from 'react'
import SidebarContainer from './sidebar-container'
import { WeatherCard } from './weather-card'
import { DelayedRoutesCard } from './delayed-routes-card'
import { RampChartCard } from './ramp-chart-card'

const Sidebar = () => {
  return (
    <SidebarContainer>
      <WeatherCard />
      <DelayedRoutesCard />
      <RampChartCard />
    </SidebarContainer>
  )
}

export default Sidebar
