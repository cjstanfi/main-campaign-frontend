import { Chart } from "react-google-charts";
const BarChart =({chartEvents,data,options})=>{

   return(
    <Chart
    chartType="Bar"
    width="100%"
    height="400px"
    data={data}
    options={options}
    chartEvents={chartEvents}
    className="animated-chart animated-chart-start"
  />
   )
}
export default BarChart;