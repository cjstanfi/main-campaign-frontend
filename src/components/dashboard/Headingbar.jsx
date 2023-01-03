import React from "react";
import Header from "../Header";

const HeadingBar = ({ startDate, endDate, setStartDate, setEndDate }) => {
  return (
    <>
      <Header
        page="dashboard"
        startDate={startDate}
        endDate={endDate}
        setStartDate={setStartDate}
        setEndDate={setEndDate}
      />
    </>
  );
};

export default HeadingBar;
