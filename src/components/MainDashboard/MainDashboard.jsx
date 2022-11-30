import React, { useState } from "react";
import BarChartRate from "./BarChartRate";
import GeoChartRate from "./GeoChartRate";

import Sidebar from "./Sidebar";
import TopNav from "./TopNav";
import TotalCount from "./TotalCount";

import axios from 'axios';


export default function MainDashboard() {
  const [navistoggled, setnavistoggled] = useState(false);

  const queryString = window.location.search
  const urlParams = new URLSearchParams(queryString)
  const code = urlParams.get('code')
  const location = urlParams.get('location') //save to backend for access and refresh tokens
  const accountsServer = urlParams.get('accounts-server')

  //there are more of these
  const domainSpecificUrl = location === "us" ? "https://accounts.zoho.com" : null

  let formData = new FormData();
  formData.append('grant_type', "authorization_code")
  formData.append('client_id', "1000.TO2UPAI0LXK9RRU0HYS5ZQ1OZ8UPBI")
  formData.append('client_secret', "650254d3a45ed3113b0580863453e1e5af6cb2e9db")
  formData.append('redirect_uri', "https://www.maincampaign.com/dashboard")
  formData.append('code', code)

  const config = {
    headers: { 'content-type': 'multipart/form-data' }
  }

  axios.post(`${domainSpecificUrl}/oauth/v2/token`, formData, config).then(response => {
    console.log(response);
  }).catch(error => {
        console.log(error);
  });

  function clickEvent() {
    setnavistoggled(!navistoggled);
  }
  return (
    <>
      <div className={`homepage ${navistoggled ? "nav-is-toggled" : ""}`}>
        <Sidebar clickEvent={clickEvent} />
        <div className="content px-3 main-das">
          <TopNav />
          <TotalCount />
          <BarChartRate />
          <GeoChartRate />
        </div>
      </div>
    </>
  );
}
