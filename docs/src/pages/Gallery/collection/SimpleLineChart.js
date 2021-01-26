"use strict";

export const SimpleLineChart = {
  label: "Simple Line Chart",
  subLabel: "<LineChart />",
  id: "simple-line-chart",
  background: "rgb(243, 243, 243)",
  color: "black",
  code: `
    <LineChart
      smooth
      tooltip={{ show: true }}
      data={[125, 464, 846, 253, 457, 556, 975]}
      xAxis={['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']}
    />
  `,
};
