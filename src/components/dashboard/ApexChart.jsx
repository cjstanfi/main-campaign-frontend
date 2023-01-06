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
    toolbar: {
      show: true,
      offsetX: 0,
      offsetY: 0,
      tools: {
        download: true,
        selection: true,
        zoom: true,
        zoomin: true,
        zoomout: true,
        pan: true,
        reset: true | '<img src="/static/icons/reset.png" width="20">',
        customIcons: []
      },
      export: {
        csv: {
          filename: undefined,
          columnDelimiter: ',',
          headerCategory: 'category',
          headerValue: 'value',
          dateFormatter(timestamp) {
            return new Date(timestamp).toDateString()
          }
        },
        svg: {
          filename: undefined,
        },
        png: {
          filename: undefined,
        }
      },
      autoSelected: 'zoom' 
    },
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
