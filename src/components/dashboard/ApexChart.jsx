import ReactApexChart from "react-apexcharts";
import { ApexOptions } from "apexcharts";
import "../../assets/css_dashboard/style.css";
function ApexChart() {

  const chartData = {
    series: [
      {
        name: "Spend",
        data: generateData(20, 10, {
          min: 10,
          max: 60,
        }),
      }
    ],
    options: {
      chart: {
        height: 350,
        type: "bubble",
      },
      dataLabels: {
        enabled: false,
      },
      fill: {
        type: "gradient",
      },
      title: {
        text: "MainCampaign",
      },
      xaxis: {
        type: "Revenue/Spend",
        labels: {
          rotate: 0,
        },
      },
      yaxis: {
        max: 70,
        show:true,
        type:"Revenue"
      },
      theme: {
        palette: "palette2",
      },
    },
    zoom: {
      enabled: true,
      type: 'x',  
      autoScaleYaxis: false,  
      zoomedArea: {
        fill: {
          color: '#90CAF9',
          opacity: 0.4
        },
        stroke: {
          color: '#0D47A1',
          opacity: 0.4,
          width: 1
        }
      }
  }
  };

  function generateData(baseval, count, yrange) {
    var i = 0;
    var series = [];
    while (i < count) {
      //var x =Math.floor(Math.random() * (750 - 1 + 1)) + 1;;
      var y =
        Math.floor(Math.random() * (yrange.max - yrange.min + 1)) + yrange.min;
      var z = Math.floor(Math.random() * (75 - 15 + 1)) + 15;

      series.push([baseval, y, z]);
      baseval += 50;
      i++;

    }
    return series;
  }

  return (
    <div className="apexchart_box">
      <ReactApexChart
        options={chartData.options}
        series={chartData.series}
        type="bubble"
        height={350}
      />
    </div>
  );
}

export default ApexChart;
