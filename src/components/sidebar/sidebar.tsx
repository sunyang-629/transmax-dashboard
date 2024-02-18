import React, { FC } from 'react'
import SidebarContainer from './sidebar-container'
import { WeatherCard } from './weather-card'
import { DelayedRoutesCard } from './delayed-routes-card'
import { RampChartCard } from './ramp-chart-card'

type SidebarProps = {
  open: boolean
  onClose: () => void
}

const Sidebar: FC<SidebarProps> = ({ open, onClose }) => {
  return (
    <SidebarContainer open={open} onClose={onClose}>
      <WeatherCard />
      <DelayedRoutesCard />
      <RampChartCard />
    </SidebarContainer>
  )
}

export default Sidebar
