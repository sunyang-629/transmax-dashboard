import React, { useEffect, useState } from 'react'
import { SidebarAccordion } from '../../accordions'
import { AgChartsReact } from 'ag-charts-react'
import { AgChartOptions } from 'ag-charts-community'
import { BLUE_GREY, RAMP_ALGORITHM_ARRAY } from '../../../constants'
import { cyan, teal } from '@mui/material/colors'
import { Ramp } from '../../../types'
import { getRampAlgorithms } from '../../../api/ramp-api'
import groupby from 'lodash/groupBy'
import { round } from 'lodash'

const mockData = [
  { asset: 'Algorithem 1', amount: 0.2 },
  { asset: 'Algorithem 2', amount: 0.3 },
  { asset: 'Algorithem 3', amount: 0.1 },
  { asset: 'Algorithem 4', amount: 0.17 },
  { asset: 'Algorithem 5', amount: 0.13 },
]

const RampChartCard = () => {
  const [options, setOptions] = useState<AgChartOptions>({
    data: mockData,
    series: [
      {
        type: 'pie',
        calloutLabelKey: 'amount',
        angleKey: 'amount',
        innerRadiusRatio: 0.7,
        strokeWidth: 0,
        calloutLabel: {
          offset: 15,
          formatter(params) {
            return `${Math.round(params.datum.amount * 100)}%`
          },
          fontFamily: 'Roboto',
          fontSize: 14,
          fontWeight: 500,
          color: teal.A200,
        },
        calloutLine: {
          length: 0,
        },
        tooltip: {
          renderer: (datum) => ({
            content: `${datum.datum.asset}: ${datum.datum.amount}`,
          }),
        },
        fills: [cyan[300], cyan[200], '#FFFFFF', teal.A400, teal.A700],
      },
    ],
    background: {
      fill: BLUE_GREY,
    },
    height: 250,
    width: 280,
  })

  const handleUpdate = (rampList: Ramp[]) => {
    // setOptions({...options,})
    const groupedRampList = groupby(rampList, 'algorithm')
    const newOptionData: { asset: string; amount: number }[] = []
    RAMP_ALGORITHM_ARRAY.map((al) => {
      return newOptionData.push({
        asset: al,
        amount: round(groupedRampList[al].length / rampList.length, 2),
      })
    })
    console.log({ newOptionData })
    setOptions({ ...options, data: newOptionData })
  }

  useEffect(() => {
    const id = getRampAlgorithms(handleUpdate)
    return () => clearInterval(id)
  })

  return (
    <SidebarAccordion title="RAMP CHART">
      <AgChartsReact options={options} />
    </SidebarAccordion>
  )
}

export default RampChartCard
