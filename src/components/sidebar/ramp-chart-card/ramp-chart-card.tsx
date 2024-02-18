import React, { memo } from 'react'
import { SidebarAccordion } from '../../accordions'
import { AgChartsReact } from 'ag-charts-react'
import { useRampChartOption } from '../../../hooks'
import { AgChartOptions } from 'ag-charts-community'

const RampChartCard = () => {
  const { options } = useRampChartOption()

  return (
    <SidebarAccordion title="RAMP CHART">
      <Chart options={options} />
    </SidebarAccordion>
  )
}

const Chart = memo(function Chart({ options }: { options: AgChartOptions }) {
  console.log('render')
  return <AgChartsReact options={options} />
})

export default RampChartCard
