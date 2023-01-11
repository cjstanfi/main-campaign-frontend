import React, {useEffect, useState} from "react";
import Footer from "./Footer";
import Header from "./Header";
import IndexBodyContent from "./IndexBodyContent";

function IndexComponent() {
  const [navistoggled, setnavistoggled] = useState(false);

  function clickEvent() {
    setnavistoggled(!navistoggled);
  }


  return (
    <div className={`homepage index-page ${navistoggled ? "nav-is-toggled" : ""}`}>
      <div className="p-0">
        <Header clickEvent={clickEvent} />
        <IndexBodyContent />
        <Footer />
      </div>
    </div>
  );
}

export default IndexComponent;
