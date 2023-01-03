import React, { useEffect, useState } from "react";
import BarChartRate from "./BarChartRate";
import GeoChartRate from "./GeoChartRate";

import Sidebar from "./Sidebar";
import TopNav from "./TopNav";
import TotalCount from "./TotalCount";

import axios from "axios";
import { history, initFacebookSdk } from "../../helpers";
import { accountService } from "../../services";

export default function MainDashboard() {
  const [navistoggled, setnavistoggled] = useState(false);
  useEffect(() => {
    sendZohoTokens().catch((error) => console.log(error));
  }, []);

  async function sendZohoTokens() {
    // redirect to home if already logged in
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    console.log(queryString);
    console.log(urlParams);
    if (urlParams.has("code")) {
      const code = urlParams.get("code");
      const location = urlParams.get("location"); //save to backend for access and refresh tokens

      //there are more of these
      const domainSpecificUrl =
        location === "us" ? "https://accounts.zoho.com" : null;

      const result = await axios.post(
        "https://test.api.maincampaign.com/zoho-user-access-token",
        {
          code,
          domainSpecificUrl,
        }
      );
      console.log(result);

      // axios.get(
      //     "https://profile.zoho.com/api/v1/user/self/profile",
      //     { headers: {
      //         'Authorization': `Zoho-oauthtoken ${response.access_token}`
      //       }}
      // ).then()
    }
  }

  function clickEvent() {
    setnavistoggled(!navistoggled);
  }
  // useEffect(() => {
  //   document.title = "Analytics Page";
  // }, []);
  return (
    <>
      <div className={`homepage ${navistoggled ? "nav-is-toggled" : ""}`}>
        <Sidebar clickEvent={clickEvent} />
        <div className="col-sm-10 ps-sm-5 p-0 content main-das">
          <TopNav />
          <TotalCount />
          <BarChartRate />
          <GeoChartRate />
        </div>
      </div>
    </>
  );
}
