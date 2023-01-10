import React from "react";
import Footer from "../home/Footer";
import Header from "../home/Header";
import LoginExpandContentStep2 from "./LoginExpandContentStep2";

import { useState } from "react";
export default function LoginExpandedStep2() {
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
        <LoginExpandContentStep2 />
        <Footer />
      </div>
    </div>
  );
}
