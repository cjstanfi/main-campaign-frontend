import React, { useState } from "react";
import unitedstates from "../../assets/MainDashboard/assets/images/united-states.png";
import australia from "../../assets/MainDashboard/assets/images/australia.png";

import unitedkingdom from "../../assets/MainDashboard/assets/images/united-kingdom.png";
import brazil from "../../assets/MainDashboard/assets/images/brazil.png";
import india from "../../assets/MainDashboard/assets/images/india.png";
import france from "../../assets/MainDashboard/assets/images/france.png"
import { Chart } from "react-google-charts";
import { Link } from "react-router-dom";

export default function GeoChartRate() {
  const [collapseDivUS,setcollapseDivUS] = useState(false);
  const [collapseDivAUS,setcollapseDivAUS] = useState(false);
  const [collapseDivUK,setcollapseDivUK] = useState(false);
  const [collapseDivBR,setcollapseDivBR] = useState(false);
  const [collapseDivFR,setcollapseDivFR] = useState(false);
  const [collapseDivIN,setcollapseDivIN] = useState(false);
  const data = [
    ["Country", "Leads"],
    ["Germany", 200],
    ["United States", 800],
    ["Brazil", 400],
    ["Australia", 500],
    ["France", 600],
    ["India", 400],
  ];
  var options2 = {
    colors: ["#3B5998"],
    legend: 'none',
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
  const handleClick = ()=> {
    setcollapseDivUS(!collapseDivUS);
    
  }
  const classname = collapseDivUS?'btn w-100 background-color':'btn w-100';
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
          <div className="col-md-3 p-0" >
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
                  className={classname}
                  data-bs-toggle="collapse"
                  href="#collapse1"
                  role="button"
                  aria-expanded="false"
                  aria-controls="collapseExample"
                  onClick={handleClick}
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
                { collapseDivUS &&
                <div className="" id="collapse1" >
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
                }
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
                        height="400px"
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
                      <b>22.8k</b>
                    </span>
                  </div>
                </Link>
                <div className="collapse" id="collapse3">
                  <div className="card card-body">
                    <div id="columnminichart_material" className="chart">
                      <Chart
                        chartType="Bar"
                        width="100%"
                        height="400px"
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
                      <img src={brazil} className="me-1" alt="" />
                      <span className="country-name">
                        <b>Brazil</b>
                      </span>
                    </div>
                    <span className="gray-color py-2 country-name">
                      <b>15.8k</b>
                    </span>
                  </div>
                </Link>
                <div className="collapse" id="collapse3">
                  <div className="card card-body">
                    <div id="columnminichart_material" className="chart">
                      <Chart
                        chartType="Bar"
                        width="100%"
                        height="400px"
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
                      <img src={france} className="me-1" alt="" />
                      <span className="country-name">
                        <b>France</b>
                      </span>
                    </div>
                    <span className="gray-color py-2 country-name">
                      <b>32.8k</b>
                    </span>
                  </div>
                </Link>
                <div className="collapse" id="collapse3">
                  <div className="card card-body">
                    <div id="columnminichart_material" className="chart">
                      <Chart
                        chartType="Bar"
                        width="100%"
                        height="400px"
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
                      <img src={india} className="me-1" alt="" />
                      <span className="country-name">
                        <b>India</b>
                      </span>
                    </div>
                    <span className="gray-color py-2 country-name">
                      <b>28.8k</b>
                    </span>
                  </div>
                </Link>
                <div className="collapse" id="collapse3">
                  <div className="card card-body">
                    <div id="columnminichart_material" className="chart">
                      <Chart
                        chartType="Bar"
                        width="100%"
                        height="400px"
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
