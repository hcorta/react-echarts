"use strict";

export const StackedAreaChart = {
  label: "XY Chart",
  subLabel: "<AreaChart />",
  id: "xychart",
  style: {
    background: "rgb(34,34,34)",
    color: "white",
  },
  code: `
  function XYChart () {
    return (
      <AreaChart
        stacked={true}
        tooltip={{
          trigger: "axis",
        }}
        legend={{
          data: ["Product 1", "Product 2", "Product 3"],
        }}
        xAxis={{
          type: "category",
          boundaryGap: false,
          data: [
            "Monday",
            "Tuesday",
            "Wednesday",
            "Thursday",
            "Friday",
            "Saturday",
            "Sunday",
          ],
        }}
        yAxis={{
          type: "value",
        }}
        series={[
          {
            name: "Product 1",
            data: [120, 132, 101, 134, 90, 230, 210],
            emphasis: {
              focus: "series",
            },
          },
          {
            name: "Product 2",
            data: [220, 182, 191, 234, 290, 330, 310],
            emphasis: {
              focus: "series",
            },
          },
          {
            name: "Product 3",
            data: [150, 232, 201, 154, 190, 330, 410],
            emphasis: {
              focus: "series",
            },
          },
        ]}
      />
    );
  }
`,
};
