import React, { useState } from "react";
import Footer from "./Footer";
import Header from "./Header";
import IndexBodyContent from "./IndexBodyContent";

function IndexComponent() {
  const [navistoggled, setnavistoggled] = useState(false);

  function clickEvent() {
    setnavistoggled(!navistoggled);
  }
  //   function handleClick(el){

  //     el.classList.toggle('active');

  // }

  return (
    <div className={`homepage ${navistoggled ? "nav-is-toggled" : ""}`}>
      <div className="p-0">
        <Header clickEvent={clickEvent} />
        <IndexBodyContent />
        <Footer />
      </div>
    </div>
  );
}

export default IndexComponent;
