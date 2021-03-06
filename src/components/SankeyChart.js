'use strict'

import { Chart } from './Chart.js'
import { useOption } from '../hooks'

export function SankeyChart (props) {
  const option = useOption({
    ...props,
    type: 'sankey'
  })

  return <Chart {...props} option={option} />
}
