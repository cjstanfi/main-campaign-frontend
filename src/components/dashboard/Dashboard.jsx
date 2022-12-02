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

export default function Dashboard() {
  const [navistoggled, setnavistoggled] = useState(false);

  const dispatch = useDispatch()

  function clickEvent() {
    setnavistoggled(!navistoggled);
  }
  useEffect(() => {
    document.title = "Dashboard Page";
    getAdSets()
  }, []);


  const getAdSets = async () => {
    const { data: data1 } = await axios.get(`https://test.api.maincampaign.com/facebook-ad-set/0`)
    dispatch(addAdSetData(data1))
    const { data: data2 } = await axios.get(`https://test.api.maincampaign.com/facebook-ad-set/1`)
    dispatch(addAdSetData(data2))
    const { data: data3 } = await axios.get(`https://test.api.maincampaign.com/facebook-ad-set/2`)
    dispatch(addAdSetData(data3))
    console.log("Result from axios", [data1, data2, data3])
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
