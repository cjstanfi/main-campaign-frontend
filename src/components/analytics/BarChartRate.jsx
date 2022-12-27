import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import "./barchart.css"
import { useSelector } from "react-redux";
import BarChart from "./BarChart";

export default function BarChartRate() {
  const chartEvents = [
    {
      eventName: "ready",
      callback: ({ chartWrapper, google }) => {
        const chartEl = chartWrapper.getChart().container;
        if (window.innerWidth > 768) {
          chartEl.classList.remove("animated-chart-start");
        } else {
          window.addEventListener("scroll", () => {
            if (window.scrollY >= 500) {
              chartEl.classList.remove("animated-chart-start");
            }
          });
        }
      },
    },
  ];

const  data  = useSelector((state)=>state.barChart.data);

  var options = {
    vAxis: {
      gridlines: { color: "#fff" },
    },
    hAxis: { textPosition: "none" },

    explorer: { axis: "none" },
    legend: { position: "none" },
    colors: ["#3B5998", "#88FFBF"],
    bar: { groupWidth: "30%" },
    chart: {
      title: "",
      subtitle: "",
      isStacked: true,
    },
    animation: {
      duration: 300,
      easing: 'linear',
      startup: true,
    },

    height: 250,
  };
  return (
    <>
      <section className="bar-chart-sec pt-3 px-2">
        <div className="container">
          <div className="row bar-chart-div py-3">
            <div className="col-md-8 col-lg-9 border-end">
              <div className="row">
                <div className="col-md-7">
                  <span className="stat-card-head d-block">Total Leads</span>
                  <span className="date-text-thin">
                    June 1, 2021 - June 2, 2022
                  </span>
                </div>
                <div className="col-md-5">
                  <div className="d-flex justify-content-between">
                    <div className="leads-line">
                      <h5 className="mb-0">
                        <b>15.25K</b>
                      </h5>
                      <span className="date-text-thin">
                        <b>Leads</b>
                      </span>
                    </div>
                    <div className="revenue-line">
                      <h5 className="mb-0">
                        <b>$25000</b>
                      </h5>
                      <span className="date-text-thin">
                        <b>Revenue</b>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row py-2">
                <div className="col-md-12">
                  <div
                    id="columnchart_material"
                    className="columnchart_material"
                    style={{ height: 250 }}
                  >
                    <BarChart chartEvents={chartEvents} data={data} options={options} />
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4 col-lg-3">
              <div className="row">
                <div className="col-md-12 py-1">
                  <div className="grey-back d-flex justify-content-between px-2 py-2 rounded">
                    <span className="gray-color">Cost Per Purchase</span>
                    <span className="stat-valuep green-back green-color">
                      +1.5%
                    </span>
                  </div>
                  <div className="px-2 pt-3 pb-4">
                    <h5 className="d-inline">
                      <b>$200</b>
                    </h5>
                    <span className="date-text-thin"> Avg</span>
                  </div>
                </div>
                <div className="col-md-12 py-1">
                  <div className="grey-back d-flex justify-content-between px-2 py-2 rounded">
                    <span className="gray-color">Cost Per Lead</span>
                  </div>
                  <div className=" px-2 pt-3 pb-4">
                    <h5 className="d-inline">
                      <b>$30.5</b>
                    </h5>
                    <span className="date-text-thin"> Avg</span>
                  </div>
                </div>
                <div className="col-md-12 pt-1">
                  <div className="grey-back d-flex justify-content-between px-2 py-2 rounded">
                    <span className="gray-color">Cost Per Click</span>
                    <span className="stat-valuep green-back green-color">
                      +1.5%
                    </span>
                  </div>
                  <div className="px-2 pt-3">
                    <h5 className=" d-inline">
                      <b>$25.9</b>
                    </h5>
                    <span className="date-text-thin"> Avg</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
