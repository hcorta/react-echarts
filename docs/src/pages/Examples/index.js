import { LineChart } from '@hcorta/react-echarts'

export const Examples = {
  label: 'Examples',
  route: '/examples',
  order: 2,
  component: (props) => {
    return (
      <div className={'react_echarts__examples'}>
        <LineChart
          smooth
          data={[125, 464, 846, 253, 457, 556, 975]}
          xAxis={['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']}
        />
      </div>
    )
  },
}
