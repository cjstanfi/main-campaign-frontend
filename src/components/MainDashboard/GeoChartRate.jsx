import React from "react";
import unitedstates from "../../assets/MainDashboard/assets/images/united-states.png";
import australia from "../../assets/MainDashboard/assets/images/australia.png";

import unitedkingdom from "../../assets/MainDashboard/assets/images/united-kingdom.png";
import { Chart } from "react-google-charts";
import { Link } from "react-router-dom";

export default function GeoChartRate() {
  const data = [
    ["Country", "Leads"],
    ["Germany", 200],
    ["United States", 800],
    ["Brazil", 400],
    ["Australia", 500],
    ["France", 600],
    ["Pakistan", 400],
  ];
  var options2 = {
    colors: ["#3B5998"],
  };
  const data1 = [
    ["Age groups", "Percentage"],
    ["18-24", 80],
    ["25-34", 65],
    ["45-54", 35],
    ["65+", 15],
  ];
  var options1 = {
    width: 210,

    backgroundColor: "#EEF2FA",
    legend: { position: "none" },
    colors: ["#3B5998"],
    bar: { groupWidth: "30%" },
  };
  return (
    <section className="bar-chart-sec pt-3 px-2 pb-5">
      <div className="container">
        <div className="row bar-chart-div py-3">
          <div className="col-md-9 border-end">
            <div className="row">
              <span className="stat-card-head d-block">
                Your top demographics
              </span>
            </div>
            <div className="row px-2 py-2">
              <div id="geo_chart_div" className="chart geo-map">
                <Chart
                  chartType="GeoChart"
                  width="100%"
                  height="400px"
                  data={data}
                  options={options2}
                />
              </div>
            </div>
          </div>
          <div className="col-md-3 p-0">
            <div className="row">
              <div className="col-md-12 px-4 pt-2 pb-4">
                <h3>
                  <b>225.25k</b>
                </h3>
              </div>
            </div>
            <div className="row">
              <div className="col-md-12 py-2">
                <Link
                  className="btn w-100 background-color"
                  data-bs-toggle="collapse"
                  href="#collapse1"
                  role="button"
                  aria-expanded="false"
                  aria-controls="collapseExample"
                >
                  <div className="d-flex justify-content-between">
                    <div>
                      <img src={unitedstates} className="me-1" alt="" />
                      <span className="country-name">
                        <b>United States</b>
                      </span>
                    </div>
                    <span className="gray-color py-2 country-name">
                      <b>50.2k</b>
                    </span>
                  </div>
                </Link>
                <div className="" id="collapse1">
                  <div className="card card-body">
                    <div id="columnminichart_material" className="chart">
                      <Chart
                        chartType="Bar"
                        width="100%"
                        data={data1}
                        options={options1}
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-12 py-2">
                <Link
                  className="btn w-100"
                  data-bs-toggle="collapse"
                  href="#collapse2"
                  role="button"
                  aria-expanded="false"
                  aria-controls="collapseExample"
                >
                  <div className="d-flex justify-content-between">
                    <div>
                      <img src={australia} className="me-1" alt="" />
                      <span className="country-name">
                        <b>Australia</b>
                      </span>
                    </div>
                    <span className="gray-color py-2 country-name">
                      <b>46.1k</b>
                    </span>
                  </div>
                </Link>
                <div className="collapse">
                  <div className="card card-body">
                    <div id="columnminichart_material" className="chart">
                      <Chart
                        chartType="Bar"
                        width="100%"
                        data={data1}
                        options={options1}
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-12 py-2">
                <Link
                  className="btn w-100"
                  data-bs-toggle="collapse"
                  href="#collapse3"
                  role="button"
                  aria-expanded="false"
                  aria-controls="collapseExample"
                >
                  <div className="d-flex justify-content-between">
                    <div>
                      <img src={unitedkingdom} className="me-1" alt="" />
                      <span className="country-name">
                        <b>United Kingdom</b>
                      </span>
                    </div>
                    <span className="gray-color py-2 country-name">
                      <b>30.8k</b>
                    </span>
                  </div>
                </Link>
                <div className="collapse" id="collapse3">
                  <div className="card card-body">
                    <div id="columnminichart_material" className="chart">
                      <Chart
                        chartType="Bar"
                        width="100%"
                        data={data1}
                        options={options1}
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-12 pt-4 px-4">
                <div className="d-flex justify-content-between">
                  <span>
                    <b>15 more countries</b>
                  </span>
                  <Link className="view-all">View all</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
