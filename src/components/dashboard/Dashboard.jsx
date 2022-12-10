import React, {useState} from "react";
import Sidebar from "../analytics/Sidebar";
import "../../assets/css_dashboard/mdb.min.css";
import "../../assets/css_dashboard/style.css";
import "../../assets/css_dashboard/slick.css";
import Headingbar from "./Headingbar";
import TotalCount from "./TotalCount";
import TableContent from "./TableContent";
import useFetchWithRedux from "../../hooks/useFetchWithRedux";
import makeMarketingPlatformBusiness from "../../models/marketing-platform-business-model";
import {addMarketingPlatformBusinessData} from "../../reducer/MarketingPlatformBusinessSlice";
import {addChartData} from "../../reducer/ChartSlice";
import makeSmallViewNumbers from "../../models/small-view-numbers-model";
import makeChart from "../../models/chart-model";
import {addSmallViewNumbersData} from "../../reducer/SmallViewNumbersSlice";
import makeGeneratedLead from "../../models/generated-lead-model";
import {addGeneratedLeadData} from "../../reducer/GeneratedLeadSlice";
import makeSummary from "../../models/summary-model";
import {addSummaryData} from "../../reducer/FacebookSummarySlice";
import {useSelector} from "react-redux";
import {getMainCampaignAccountIdSelector} from "../../reducer/MainCampaignAccountSlice";

export default function Dashboard() {
  const [navistoggled, setnavistoggled] = useState(false);
  const { mainCampaignAccountData } = useSelector((state) => state.mainCampaignAccount)
  // const mainCampaignAccountId = useSelector(getMainCampaignAccountIdSelector)

  //Marketing Platform Businesses
  useFetchWithRedux(`https://test.api.maincampaign.com/marketing-platform-business?mainCampaignAccountId=${mainCampaignAccountData.mainCampaignAccountId}`, makeMarketingPlatformBusiness, addMarketingPlatformBusinessData)

  // useFetchWithRedux(`https://test.api.maincampaign.com/small-view-numbers/${mainCampaignAccountId}?category=revenue&startTime=85400`, makeSmallViewNumbers, addSmallViewNumbersData)
  // useFetchWithRedux(`https://test.api.maincampaign.com/chart/${mainCampaignAccountId}?category=revenue&startTime=85400`, makeChart, addChartData)
  // useFetchWithRedux(`https://test.api.maincampaign.com/small-view-numbers/${mainCampaignAccountId}?category=spend&startTime=85400`, makeSmallViewNumbers, addSmallViewNumbersData)
  // useFetchWithRedux(`https://test.api.maincampaign.com/chart/${mainCampaignAccountId}?category=spend&startTime=85400`, makeChart, addChartData)
  // useFetchWithRedux(`https://test.api.maincampaign.com/small-view-numbers/${mainCampaignAccountId}?category=impressions&startTime=85400`, makeSmallViewNumbers, addSmallViewNumbersData)
  // useFetchWithRedux(`https://test.api.maincampaign.com/chart/${mainCampaignAccountId}?category=impressions&startTime=85400`, makeChart, addChartData)
  // useFetchWithRedux(`https://test.api.maincampaign.com/small-view-numbers/${mainCampaignAccountId}?category=reach&startTime=85400`, makeSmallViewNumbers, addSmallViewNumbersData)
  // useFetchWithRedux(`https://test.api.maincampaign.com/chart/${mainCampaignAccountId}?category=reach&startTime=85400`, makeChart, addChartData)
  // useFetchWithRedux(`https://test.api.maincampaign.com/small-view-numbers/0?category=clicks&startTime=85400`, makeSmallViewNumbers, addSmallViewNumbersData)
  // useFetchWithRedux(`https://test.api.maincampaign.com/chart/${mainCampaignAccountId}?category=clicks&startTime=85400`, makeChart, addChartData)
  //
  // //Leads Center
  // useFetchWithRedux(`https://test.api.maincampaign.com/generated-leads/marketingPlatformBusiness/0`, makeGeneratedLead, addGeneratedLeadData)
  //
  // //Campaign Summary
  // useFetchWithRedux(`https://test.api.maincampaign.com/summary/facebook/campaign/0?orderBy=id&recordLimit=10&orderDirection=ASC&recordOffset=0`, makeSummary, addSummaryData)

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
