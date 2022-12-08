import React, {useState} from "react";
import Sidebar from "../analytics/Sidebar";
import "../../assets/css_dashboard/mdb.min.css";
import "../../assets/css_dashboard/style.css";
import "../../assets/css_dashboard/slick.css";
import Headingbar from "./Headingbar";
import TotalCount from "./TotalCount";
import TableContent from "./TableContent";
import makeFacebookAdSet from "../../models/facebook-ad-set-model";
import useFetchWithRedux from "../../hooks/useFetchWithRedux";
import {addFacebookCampaignSummaryData} from "../../reducer/FacebookCampaignSummarySlice";
import makeFacebookCampaignSummary from "../../models/facebook-campaign-summary-model";
import {addFacebookAdSetData} from "../../reducer/FacebookAdSetSlice";
import {addFacebookAdSummaryData} from "../../reducer/FacebookAdSummarySlice";
import makeFacebookAdSetSummary from "../../models/facebook-ad-set-summary-model";
import makeFacebookAdSummary from "../../models/facebook-ad-summary-model";
import {addFacebookAdSetSummaryData} from "../../reducer/FacebookAdSetSummarySlice";
import makeMarketingPlatformBusiness from "../../models/marketing-platform-business-model";
import {addMarketingPlatformBusinessData} from "../../reducer/MarketingPlatformBusinessSlice";
import {addChartData} from "../../reducer/ChartSlice";
import makeSmallViewNumbers from "../../models/small-view-numbers-model";
import makeChart from "../../models/chart-model";
import {addSmallViewNumbersData} from "../../reducer/SmallViewNumbersSlice";

export default function Dashboard() {
  const [navistoggled, setnavistoggled] = useState(false);
  useFetchWithRedux("https://test.api.maincampaign.com/facebook-ad-set/0", makeFacebookAdSet, addFacebookAdSetData)
  useFetchWithRedux("https://test.api.maincampaign.com/facebook-ad-set/1", makeFacebookAdSet, addFacebookAdSetData)
  useFetchWithRedux("https://test.api.maincampaign.com/facebook-ad-set/2", makeFacebookAdSet, addFacebookAdSetData)
  useFetchWithRedux("https://test.api.maincampaign.com/campaign-summary/facebook/0?orderBy=facebook_campaign_id&recordLimit=10&orderDirection=ASC&recordOffset=0", makeFacebookCampaignSummary, addFacebookCampaignSummaryData)
  useFetchWithRedux("https://test.api.maincampaign.com/ad-set-summary/facebook/0", makeFacebookAdSetSummary, addFacebookAdSetSummaryData)
  useFetchWithRedux("https://test.api.maincampaign.com/ad-summary/facebook/0", makeFacebookAdSummary, addFacebookAdSummaryData)
  useFetchWithRedux("https://test.api.maincampaign.com/marketing-platform-business?mainCampaignAccountId=0", makeMarketingPlatformBusiness, addMarketingPlatformBusinessData)
  useFetchWithRedux("https://test.api.maincampaign.com/small-view-numbers/0?category=revenue&startTime=85400", makeSmallViewNumbers, addSmallViewNumbersData)
  // useFetchWithRedux("https://test.api.maincampaign.com/small-view-numbers/0?category=spend&startTime=85400", makeSmallViewNumbers, addSmallViewNumbersData)
  // useFetchWithRedux("https://test.api.maincampaign.com/small-view-numbers/0?category=impressions&startTime=85400", makeSmallViewNumbers, addSmallViewNumbersData)
  // useFetchWithRedux("https://test.api.maincampaign.com/small-view-numbers/0?category=reach&startTime=85400", makeSmallViewNumbers, addSmallViewNumbersData)
  // useFetchWithRedux("https://test.api.maincampaign.com/small-view-numbers/0?category=clicks&startTime=85400", makeSmallViewNumbers, addSmallViewNumbersData)
  useFetchWithRedux("https://test.api.maincampaign.com/chart/0?category=revenue&startTime=85400", makeChart, addChartData)
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
