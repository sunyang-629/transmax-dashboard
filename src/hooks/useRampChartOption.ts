import { useEffect, useMemo, useState, useTransition } from 'react'
//packages
import { AgChartOptions } from 'ag-charts-community'
import { teal } from '@mui/material/colors'
import groupby from 'lodash/groupBy'
import round from 'lodash/round'
//types
import { Ramp } from '../types'
//constants
import { BLUE_GREY, PIE_CHART_COLOR_LIST, RAMP_ALGORITHM_ARRAY } from '../constants'
//api
import { getRampAlgorithms } from '../api'

const useRampChartOption = () => {
  const [rampList, setRampList] = useState<Ramp[]>([])
  const [, startTransition] = useTransition()

  const options = useMemo<AgChartOptions>(() => {
    const groupedRampList = groupby(rampList, 'algorithm')
    const newOptionData: { asset: string; amount: number }[] = []
    RAMP_ALGORITHM_ARRAY.map((al) => {
      return newOptionData.push({
        asset: al,
        amount: round((groupedRampList[al]?.length ?? 0) / rampList.length, 2),
      })
    })
    return {
      data: rampList.length === 0 ? [] : newOptionData,
      series: [
        {
          type: 'pie',
          calloutLabelKey: 'amount',
          angleKey: 'amount',
          innerRadiusRatio: 0.7,
          strokeWidth: 0,
          calloutLabel: {
            offset: 5,
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
          fills: PIE_CHART_COLOR_LIST,
        },
      ],
      background: {
        fill: BLUE_GREY,
      },
      height: 250,
      width: 260,
    }
  }, [rampList])

  const handleUpdate = (ramps: Ramp[]) => {
    startTransition(() => setRampList(ramps))
  }

  useEffect(() => {
    const id = getRampAlgorithms(handleUpdate)
    return () => clearInterval(id)
  })

  return { options }
}

export default useRampChartOption
