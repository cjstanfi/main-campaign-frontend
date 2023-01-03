import React, { useState } from "react";
import Sidebar from "../analytics/Sidebar";
import BodyContent from "./BodyContent";
import Headingbar from "../dashboard/Headingbar";
export default function Leads() {
  const [navistoggled, setnavistoggled] = useState(false);

  function clickEvent() {
    setnavistoggled(!navistoggled);
  }
  return (
    <>
    <div className={`homepage ${navistoggled ? "nav-is-toggled" : ""}`}>
      <Sidebar clickEvent={clickEvent} />
      <BodyContent />
      </div>
    </>
    
  );
}
