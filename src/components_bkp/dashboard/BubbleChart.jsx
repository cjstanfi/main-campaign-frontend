import React from 'react'
import { Chart } from "react-google-charts";
import classes from "./Bubble.module.css"

export const BubbleChart = () => {
    const data = [
        ["ID", "Revenue", "Revenue/Spend", "Leads","Converted leads"],
        ["01", 80, 167, 120,100],
        ["02", 20, 120, 130,120],
        ["03", 40, 180, 50,300],
        ["04", 100, 278, 230,400],
        ["05", 120, 190, 210,200],
        ["06", 140, 250, 100,150],
        ["07", 160, 477, 300,100],
      ];
      const options = {
        colorAxis: { colors: ["#FC6C85", "#90EF90"] },
        hAxis: { title: "Revenue" },
        vAxis: { title: "Revenue/Spend)" },
        backgroundColor: "#6082B6",
        colors: ['#FB7A21'],
        legend: { position: "none" }
      };
  return (
    <div className={classes.bubblechart}>
        <Chart
      chartType="BubbleChart"
      width="100%"
      height="400px"
      data={data}
      options={options}
    />
    </div>
  )
}
