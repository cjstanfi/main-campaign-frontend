import React from "react";

import { useState } from "react";
import Header from "../Header";
export default function TopNav() {
  const d = new Date();
  const [startDate, setStartDate] = useState(d.setDate(d.getDate() - 7));
  const [endDate, setEndDate] = useState(new Date());

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
