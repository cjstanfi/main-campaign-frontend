import React, {useEffect, useState} from "react";
import BarChartRate from "./BarChartRate";
import GeoChartRate from "./GeoChartRate";

import Sidebar from "./Sidebar";
import TopNav from "./TopNav";
import TotalCount from "./TotalCount";

import axios from 'axios';
import {history, initFacebookSdk} from "../../helpers";
import {accountService} from "../../services";


export default function MainDashboard() {
  const [navistoggled, setnavistoggled] = useState(false);
  useEffect( () => {
    async function sendZohoTokens(){
        // redirect to home if already logged in
        const queryString = window.location.search
        const urlParams = new URLSearchParams(queryString)
        console.log(queryString)
        console.log(urlParams)
        if(urlParams.has('code')) {
            const code = urlParams.get('code')
            const location = urlParams.get('location') //save to backend for access and refresh tokens

            //there are more of these
            const domainSpecificUrl = location === "us" ? "https://accounts.zoho.com" : null

            const result = await axios.post('https://wwww.test.api.maincampaign.com/zoho-access-token',
                {
                    code,
                    domainSpecificUrl
                })
            console.log(result)

            // axios.get(
            //     "https://profile.zoho.com/api/v1/user/self/profile",
            //     { headers: {
            //         'Authorization': `Zoho-oauthtoken ${response.access_token}`
            //       }}
            // ).then()
        }
    }
    sendZohoTokens()
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
