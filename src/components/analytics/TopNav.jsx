import React from "react";

import { useState } from "react";
import Header from "../Header";
export default function TopNav() {
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState();

  return (
    <section className="top-nav pb-1">
      <div className="container">
        <div className="row">
          {/* <Header
            page="analytics"
            startDate={startDate}
            setStartDate={setStartDate}
          /> */}
          <Header
            page="dashboard"
            startDate={startDate}
            endDate={endDate}
            setStartDate={setStartDate}
            setEndDate={setEndDate}
          />
        </div>
      </div>
    </section>
  );
}
