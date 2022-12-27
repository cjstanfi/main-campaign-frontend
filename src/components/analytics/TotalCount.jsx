import React from "react";
import {useDispatch, useSelector} from "react-redux";
import exclamation from "../../assets/img/exclamation.svg";
import SummaryViewSmall from "../dashboard/SummaryViewSmall";
// import info from "../../assets/MainDashboard/assets/images/info.svg";
import formatUnderscores from "../../helpers/utils/format_underscores";
import useSmallViewNumbersAndRedux from "../../hooks/useSmallViewNumbersAndRedux";
export default function TotalCount({startDate, endDate}) {
  const { currentMarketingPlatformBusinessData: {marketingPlatformBusinessId} } = useSelector((state) => state.marketingPlatformBusiness)
  const { validDataArray: smallViewNumbers } = useSmallViewNumbersAndRedux(marketingPlatformBusinessId, startDate, endDate)
  return (
    <>
     <section className="stat-cards">
            <div className="container">
                <div className="slider_area">
                    <div className="row slider_wrap">
     {
      smallViewNumbers?.map(view => {
          return <SummaryViewSmall title={formatUnderscores(view?.title)}
                                   amount={view?.valueDuringTimeframe}
                                   percent={view?.valuePercentChange}/>
      })
  }
  </div>
                    <div className="pseduo-track"></div>
                </div>
            </div>
        </section>
    </>
   );
}
