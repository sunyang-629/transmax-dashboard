import React, { useState } from 'react'
import { SidebarAccordion } from '../../accordions'
import { Route } from '../../../types'
import { getMockDelayRoutes } from '../../../utils'
import DelayedRoutesItem from './delayed-routes-item'

const DelayedRoutesCard = () => {
  const [routes] = useState<Route[]>(() => getMockDelayRoutes())

  return (
    <SidebarAccordion title="DELAYED ROUTES">
      {routes.map((r) => (
        <DelayedRoutesItem route={r} key={r.id} />
      ))}
    </SidebarAccordion>
  )
}

export default DelayedRoutesCard
