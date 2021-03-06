'use strict'

import { Chart } from './Chart.js'
import { useOption } from 'hooks'

export function TreemapChart (props) {
  const option = useOption({
    ...props,
    type: 'treemap'
  })

  return <Chart {...props} option={option} />
}
