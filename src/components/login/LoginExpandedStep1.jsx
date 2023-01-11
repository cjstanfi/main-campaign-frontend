import React from "react";
import Footer from "../home/Footer";
import Header from "../home/Header";

import { useState } from "react";
import LoginExpandContentStep1 from "./LoginExpandContentStep1";
export default function LoginExpandedStep1() {
  const [navistoggled, setnavistoggled] = useState(false);
  function clickEvent() {
    setnavistoggled(!navistoggled);
  }
  // useEffect(() => {
  //   document.title = "Register Page";
  // }, []);
  return (
    <div className={`homepage login-page ${navistoggled ? "nav-is-toggled" : ""}`}>
      <div className="p-0">
        <Header clickEvent={clickEvent} />
        <LoginExpandContentStep1 />
        <Footer />
      </div>
    </div>
  );
}
