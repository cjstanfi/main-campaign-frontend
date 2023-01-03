import React, { useState } from "react";
import Sidebar from "../analytics/Sidebar";
import BodyContent from "./BodyContent";
export default function Settings() {
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
