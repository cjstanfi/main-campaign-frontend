import React, { useEffect, useState } from "react";
import unitedstates from "../../assets/MainDashboard/assets/images/united-states.png";
import australia from "../../assets/MainDashboard/assets/images/australia.png";

import unitedkingdom from "../../assets/MainDashboard/assets/images/united-kingdom.png";
import brazil from "../../assets/MainDashboard/assets/images/brazil.png";
import india from "../../assets/MainDashboard/assets/images/india.png";
import france from "../../assets/MainDashboard/assets/images/france.png";
import { Chart } from "react-google-charts";
import { Link } from "react-router-dom";
// import AOS from "aos";
import { Collapse } from "bootstrap";

// import "aos/dist/aos.css";

export default function GeoChartRate() {
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
    legend: "none",
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
  const [toggleus, setToggleus] = useState(false);
  const [toggleuk, setToggleuk] = useState(false);
  const [togglefr, setTogglefr] = useState(false);
  const [togglebz, setTogglebz] = useState(false);
  const [togglein, setTogglein] = useState(false);
  const [toggleaus, setToggleaus] = useState(false);
  const classnameus = toggleus ? "btn w-100 background-color" : "btn w-100";
  const classnameaus = toggleaus ? "btn w-100 background-color" : "btn w-100";
  const classnameuk = toggleuk ? "btn w-100 background-color" : "btn w-100";
  const classnamein = togglein ? "btn w-100 background-color" : "btn w-100";
  const classnamebz = togglebz ? "btn w-100 background-color" : "btn w-100";
  const classnamefc = togglefr ? "btn w-100 background-color" : "btn w-100";
  useEffect(() => {
    var myCollapse = document.getElementById("collapse1");
    var bsCollapse = new Collapse(myCollapse, { toggle: false });
    toggleus ? bsCollapse.show() : bsCollapse.hide();

    var myCollapse1 = document.getElementById("collapse2");
    var bsCollapse1 = new Collapse(myCollapse1, { toggle: false });
    toggleaus ? bsCollapse1.show() : bsCollapse1.hide();

    var myCollapse2 = document.getElementById("collapse3");
    var bsCollapse2 = new Collapse(myCollapse2, { toggle: false });
    toggleuk ? bsCollapse2.show() : bsCollapse2.hide();

    var myCollapse3 = document.getElementById("collapse4");
    var bsCollapse3 = new Collapse(myCollapse3, { toggle: false });
    togglebz ? bsCollapse3.show() : bsCollapse3.hide();

    var myCollapse4 = document.getElementById("collapse5");
    var bsCollapse4 = new Collapse(myCollapse4, { toggle: false });
    togglefr ? bsCollapse4.show() : bsCollapse4.hide();

    var myCollapse5 = document.getElementById("collapse6");
    var bsCollapse5 = new Collapse(myCollapse5, { toggle: false });
    togglein ? bsCollapse5.show() : bsCollapse5.hide();
  });
  const passcountrycode = (CountryCode) => {
    switch (CountryCode) {
      case "US":
        setToggleus((toggleus) => !toggleus);
        setToggleuk(false);
        setTogglefr(false);
        setTogglebz(false);
        setTogglein(false);
        setToggleaus(false);
        break;
      case "UK":
        setToggleus(false);
        setToggleuk((toggleuk) => !toggleuk);
        setTogglefr(false);
        setTogglebz(false);
        setTogglein(false);
        setToggleaus(false);
        break;
      case "AUS":
        setToggleus(false);
        setToggleuk(false);
        setTogglefr(false);
        setTogglebz(false);
        setTogglein(false);
        setToggleaus((toggleaus) => !toggleaus);
        break;
      case "FR":
        setToggleus(false);
        setToggleuk(false);
        setTogglefr((togglefr) => !togglefr);
        setTogglebz(false);
        setTogglein(false);
        setToggleaus(false);
        break;
      case "BZ":
        setToggleus(false);
        setToggleuk(false);
        setTogglefr(false);
        setTogglebz((togglebz) => !togglebz);
        setTogglein(false);
        setToggleaus(false);
        break;
      case "IN":
        setToggleus(false);
        setToggleuk(false);
        setTogglefr(false);
        setTogglebz(false);
        setTogglein((togglein) => !togglein);
        setToggleaus(false);
        break;
      default:
        setToggleus(false);
        setToggleuk(false);
        setTogglefr(false);
        setTogglebz(false);
        setTogglein(false);
        setToggleaus(false);
        break;
    }
  };

  return (
    <section className="bar-chart-sec pt-3 px-2 pb-5">
      <div className="container">
        <div className="row bar-chart-div py-3">
          <div className="col-md-8 col-lg-9 border-end">
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
          <div className="col-md-4 col-lg-3 p-0">
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
                  className={classnameus}
                  data-bs-toggle="collapse"
                  href="#collapse1"
                  role="button"
                  aria-expanded="false"
                  aria-controls="collapse1"
                  // onClick={() => setToggleus((toggleus) => !toggleus)}
                  attr="US"
                  onClick={() => passcountrycode("US")}
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

                <div className="collapse" id="collapse1">
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
                  className={classnameaus}
                  data-bs-toggle="collapse"
                  href="#collapse2"
                  role="button"
                  aria-expanded="false"
                  aria-controls="collapseExample"
                  onClick={() => passcountrycode("AUS")}
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

                <div className="collapse" id="collapse2">
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
                  className={classnameuk}
                  data-bs-toggle="collapse"
                  href="#collapse3"
                  role="button"
                  aria-expanded="false"
                  aria-controls="collapseExample"
                  onClick={() => passcountrycode("UK")}
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
                        data={data1}
                        options={options1}
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-12 py-2">
                <Link
                  className={classnamebz}
                  data-bs-toggle="collapse"
                  href="#collapse4"
                  role="button"
                  aria-expanded="false"
                  aria-controls="collapseExample"
                  onClick={() => passcountrycode("BZ")}
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

                <div className="collapse" id="collapse4">
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
                  className={classnamefc}
                  data-bs-toggle="collapse"
                  href="#collapse5"
                  role="button"
                  aria-expanded="false"
                  aria-controls="collapseExample"
                  onClick={() => passcountrycode("FR")}
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

                <div className="collapse" id="collapse5">
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
                  className={classnamein}
                  data-bs-toggle="collapse"
                  href="#collapse6"
                  role="button"
                  aria-expanded="false"
                  aria-controls="collapseExample"
                  onClick={() => passcountrycode("IN")}
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

                <div className="collapse" id="collapse6">
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
