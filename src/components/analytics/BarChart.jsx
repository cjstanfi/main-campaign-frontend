import { Chart } from "react-google-charts";
const BarChart =({chartEvents,chrtData,options})=>{
//console.log(data) 
   return(
    <Chart
    chartType="Bar"
    width="100%"
    height="400px"
    data={chrtData}
    options={options}
    chartEvents={chartEvents}
    className="animated-chart animated-chart-start"
  />
   )
}
export default BarChart;