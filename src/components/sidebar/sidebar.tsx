import React from 'react'
import SidebarContainer from './sidebar-container'
import { WeatherCard } from './weather-card'

const Sidebar = () => {
  return (
    <SidebarContainer>
      <WeatherCard />
      <div>delay routes</div>
      <div>pie chart</div>
    </SidebarContainer>
  )
}

export default Sidebar
