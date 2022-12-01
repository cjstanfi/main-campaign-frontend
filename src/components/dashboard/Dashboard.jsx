import React, {useEffect, useState} from "react";
import Sidebar from "../analytics/Sidebar";
import "../../assets/css_dashboard/mdb.min.css";
import "../../assets/css_dashboard/style.css";
import "../../assets/css_dashboard/slick.css";
import Headingbar from "./Headingbar";
import TotalCount from "./TotalCount";
import TableContent from "./TableContent";
import {getAnything} from "../../api/main-campaign-api";
import axios from "axios";

export default function Dashboard() {
  const [navistoggled, setnavistoggled] = useState(false);
  const [anything, setAnything] = useState([]);

  function clickEvent() {
    setnavistoggled(!navistoggled);
  }
  useEffect(() => {
    document.title = "Dashboard Page";
    getAnything()
  }, []);


  const getAnything = async () => {
    const { data } = await axios.get(`https://test.api.maincampaign.com/facebook-ad-set/0`)
    setAnything(data)
    console.log("Result from axios", data)
    console.log("Result after axios state", anything)
  }

  return (
    <div className={`homepage ${navistoggled ? "nav-is-toggled" : ""}`}>
      <div className="p-0">
        <div className="row m-0 p-0 position-relative product-section">
          <div className="container main-container">
            <div className="row m-0 p-0 position-relative">
              <Sidebar clickEvent={clickEvent} />
              <div className="col-sm-10 ps-sm-5 p-0 content-analy">
                <div className="row m-0 p-0 position-relative total-section">
                  <Headingbar />
                  <TotalCount data={anything}/>
                  <TableContent />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
