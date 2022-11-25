import React from "react";
import BarChartRate from "./BarChartRate";
import GeoChartRate from "./GeoChartRate";

import Sidebar from "./Sidebar";
import TopNav from "./TopNav";
import TotalCount from "./TotalCount";

export default function MainDashboard() {
  return (
    <>
      <Sidebar />
      <div className="content px-3">
        <TopNav />
        <TotalCount />
        <BarChartRate />
        <GeoChartRate />
      </div>
    </>
  );
}
