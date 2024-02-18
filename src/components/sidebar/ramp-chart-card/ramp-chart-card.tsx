import React, { Suspense, memo } from 'react'
import { SidebarAccordion } from '../../accordions'
import { AgChartsReact } from 'ag-charts-react'
import { useRampChartOption } from '../../../hooks'
import { AgChartOptions } from 'ag-charts-community'

const RampChartCard = () => {
  const { options } = useRampChartOption()

  return (
    <SidebarAccordion title="RAMP CHART">
      <Suspense fallback={<div>loading...</div>}>
        <Chart options={options} />
      </Suspense>
    </SidebarAccordion>
  )
}

const Chart = memo(function Chart({ options }: { options: AgChartOptions }) {
  return <AgChartsReact options={options} />
})

export default RampChartCard
