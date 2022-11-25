import React, { useState } from "react";
import BarChartRate from "./BarChartRate";
import GeoChartRate from "./GeoChartRate";

import Sidebar from "./Sidebar";
import TopNav from "./TopNav";
import TotalCount from "./TotalCount";

export default function MainDashboard() {
  const [navistoggled, setnavistoggled] = useState(false);

  function clickEvent() {
    setnavistoggled(!navistoggled);
  }
  return (
    <>
      <div className={`homepage ${navistoggled ? "nav-is-toggled" : ""}`}>
        <Sidebar clickEvent={clickEvent} />
        <div className="content px-3 main-das">
          <TopNav />
          <TotalCount />
          <BarChartRate />
          <GeoChartRate />
        </div>
      </div>
    </>
  );
}
