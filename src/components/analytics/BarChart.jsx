import { Chart } from "react-google-charts";
const BarChart = ({ chartEvents, chrtData, options }) => {
  //console.log(data)
  const data = [
    ["City", "2010 Population", "2000 Population"],
    ["New York City, NY", 8175000, 8008000],
    ["Los Angeles, CA", 3792000, 3694000],
    ["Chicago, IL", 2695000, 2896000],
    ["Houston, TX", 2099000, 1953000],
    ["Philadelphia, PA", 1526000, 1517000],
  ];
  return (
    <Chart
      chartType="Bar"
      width="100%"
      height="400px"
      data={chrtData}
      options={options}
      chartEvents={chartEvents}
      className="animated-chart animated-chart-start"
    />
  );
};
export default BarChart;
