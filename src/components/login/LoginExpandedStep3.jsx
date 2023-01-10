import React from "react";
import Footer from "../home/Footer";
import Header from "../home/Header";
import LoginExpandContentStep3 from "./LoginExpandContentStep3";

import { useState } from "react";
export default function LoginExpandedStep3() {
  const [navistoggled, setnavistoggled] = useState(false);
  function clickEvent() {
    setnavistoggled(!navistoggled);
  }
  // useEffect(() => {
  //   document.title = "Facebook Connection Page";
  // }, []);
  return (
    <div className={`homepage login-page ${navistoggled ? "nav-is-toggled" : ""}`}>
      <div className="p-0">
        <Header clickEvent={clickEvent} />
        <LoginExpandContentStep3 />
        <Footer />
      </div>
    </div>
  );
}
