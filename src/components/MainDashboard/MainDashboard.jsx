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
    if(urlParams.has('code')) {
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

        const config =

        //get access_token and refresh_token
        axios.post(`${domainSpecificUrl}/oauth/v2/token`,
            formData,
            { headers: { 'content-type': 'multipart/form-data' } }
        ).then(tokenResponse => {
                //get the current zoho user
                axios.get("https://www.zohoapis.com/crm/v3/users?type=CurrentUser&scope=ZohoCRM.users.READ",
                    { headers: { 'Authorization': "Zoho-oauthtoken " + tokenResponse.access_token } }
                ).then(userResponse => {
                    //save user with access token in backend
                    axios.put(`https://wwww.maincampaign.com/sales-crm-account/${userResponse.id}`,
                    {
                        salesCrmAccountAccessToken: tokenResponse.access_token,
                        salesCrmAccountDomainUrl: accountsServer,
                        salesCrmAccountRefreshToken: tokenResponse.refresh_token,
                        salesCrmAccountId: userResponse.id,
                    }
                )
            })
        })

        // axios.get(
        //     "https://profile.zoho.com/api/v1/user/self/profile",
        //     { headers: {
        //         'Authorization': `Zoho-oauthtoken ${response.access_token}`
        //       }}
        // ).then()
    }

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
