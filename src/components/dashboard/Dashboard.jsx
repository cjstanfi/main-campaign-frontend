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
import {useDispatch} from "react-redux";
import {addAdSetData} from "../../reducer/AdSetSlice";
import useFetch from "../../hooks/useFetch";
import makeAdSet from "../../models/facebook-ad-set-model";
import useFetchWithRedux from "../../hooks/useFetchWithRedux";

export default function Dashboard() {
  const [navistoggled, setnavistoggled] = useState(false);
  useFetchWithRedux("https://test.api.maincampaign.com/facebook-ad-set/0", makeAdSet, addAdSetData)
  useFetchWithRedux("https://test.api.maincampaign.com/facebook-ad-set/1", makeAdSet, addAdSetData)
  useFetchWithRedux("https://test.api.maincampaign.com/facebook-ad-set/2", makeAdSet, addAdSetData)


  function clickEvent() {
    setnavistoggled(!navistoggled);
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
                  <TotalCount />
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
