import React, { useEffect, useState } from "react";
import Sidebar from "../analytics/Sidebar";
import "../../assets/css_dashboard/mdb.min.css";
import "../../assets/css_dashboard/style.css";
import "../../assets/css_dashboard/slick.css";
import { useCookies } from "react-cookie";
import Headingbar from "./Headingbar";
import TotalCount from "./TotalCount";
import TableContent from "./TableContent";
import { useDispatch } from "react-redux";
import {
  setMainCampaignAccountData,
} from "../../reducer/MainCampaignAccountSlice";
import { useNavigate } from "react-router-dom";
import ApexChart from "./ApexChart";
import {useAuth0} from "@auth0/auth0-react";

export default function Dashboard() {
  const [navistoggled, setnavistoggled] = useState(false);
  const [cookies, setCookie] = useCookies();
  const { user, isAuthenticated, isLoading, logout } = useAuth0();

  const d = new Date();
  const [startDate, setStartDate] = useState(d.setDate(d.getDate() - 7));
  const [endDate, setEndDate] = useState(new Date());
  const dispatch = useDispatch();
  const navigate = useNavigate();
  
  //check cookies to see if user is already logged in
  useEffect(() => {
    if (isAuthenticated) {
      dispatch(setMainCampaignAccountData(user));
    } else {
      logout()
      navigate("/login");
    }
  }, []);

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
                  <Headingbar
                    startDate={startDate}
                    endDate={endDate}
                    setStartDate={setStartDate}
                    setEndDate={setEndDate}
                  />
                  <TotalCount startDate={startDate} endDate={endDate} />
                  <ApexChart />
                  {/* <BubbleChart /> */}
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
