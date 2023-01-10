import React, { useState } from "react";
import Footer from "./Footer";
import Header from "./Header";
import IndexBodyContent from "./IndexBodyContent";
import {useNavigate} from "react-router-dom";

function IndexComponent() {
  const [navistoggled, setnavistoggled] = useState(false);
  const navigate = useNavigate()

  function clickEvent() {
    //navigate("/dashboard")
    setnavistoggled(!navistoggled);
  }
  //   function handleClick(el){

  //     el.classList.toggle('active');

  // }


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
