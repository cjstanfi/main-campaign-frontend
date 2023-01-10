import React from "react";
import Footer from "../home/Footer";
import Header from "../home/Header";
import LoginExpandContentStep4 from "./LoginExpandContentStep4";

import { useState } from "react";
export default function LoginExpandedStep4() {
  const [navistoggled, setnavistoggled] = useState(false);
  function clickEvent() {
    setnavistoggled(!navistoggled);
  }
  // useEffect(() => {
  //   document.title = "CRM Connection Page";
  // }, []);
  return (
    <div className={`homepage login-page ${navistoggled ? "nav-is-toggled" : ""}`}>
      <div className="p-0">
        <Header clickEvent={clickEvent} />
        <LoginExpandContentStep4 />
        <Footer />
      </div>
    </div>
  );
}
