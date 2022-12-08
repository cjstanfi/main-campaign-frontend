import { configureStore } from "@reduxjs/toolkit";
import {chartSlice} from "../reducer/ChartSlice";
import { dataSlice } from "../reducer/reducer";
import { facebookAdSetSlice} from "../reducer/FacebookAdSetSlice";
import {facebookCampaignSlice} from "../reducer/FacebookCampaignSlice";
import {facebookCampaignSummarySlice} from "../reducer/FacebookCampaignSummarySlice";
import {facebookAdSlice} from "../reducer/FacebookAdSlice";
import {facebookAdSummarySlice} from "../reducer/FacebookAdSummarySlice";
import {facebookAdSetSummarySlice} from "../reducer/FacebookAdSetSummarySlice";
import {facebookAdDailyInsightSlice} from "../reducer/FacebookAdDailyInsightSlice";
import {facebookAdSetDailyInsightSlice} from "../reducer/FacebookAdSetDailyInsightSlice";
import {facebookCampaignDailyInsightSlice} from "../reducer/FacebookCampaignDailyInsightSlice";
import {marketingPlatformBusinessSlice} from "../reducer/MarketingPlatformBusinessSlice";
import {facebookAdAccountSlice} from "../reducer/FacebookAdAccountSlice";
import {generatedLeadSlice} from "../reducer/GeneratedLeadSlice";
import {marketingPlatformAccountSlice} from "../reducer/MarketingPlatformAccountSlice";
import {mainCampaignAccountSlice} from "../reducer/MainCampaignAccountSlice";
import {mainCampaignBusinessSlice} from "../reducer/MainCampaignBusinessSlice";
import {salesCrmAccountSlice} from "../reducer/SalesCrmAccountSlice";
import {smallViewNumbersSlice} from "../reducer/SmallViewNumbersSlice";
export const dataActions = dataSlice.actions;

const store = configureStore({
  reducer: {
    chart: chartSlice.reducer,
    data: dataSlice.reducer,
    facebookAdAccount: facebookAdAccountSlice.reducer,
    facebookAd: facebookAdSlice.reducer,
    facebookAdDailyInsight: facebookAdDailyInsightSlice.reducer,
    facebookAdSummary: facebookAdSummarySlice.reducer,
    facebookAdSet: facebookAdSetSlice.reducer,
    facebookAdSetDailyInsight: facebookAdSetDailyInsightSlice.reducer,
    facebookAdSetSummary: facebookAdSetSummarySlice.reducer,
    facebookCampaign: facebookCampaignSlice.reducer,
    facebookCampaignDailyInsight: facebookCampaignDailyInsightSlice.reducer,
    facebookCampaignSummary: facebookCampaignSummarySlice.reducer,
    generatedLead: generatedLeadSlice.reducer,
    mainCampaignAccount: mainCampaignAccountSlice.reducer,
    mainCampaignBusiness: mainCampaignBusinessSlice.reducer,
    marketingPlatformAccount: marketingPlatformAccountSlice.reducer,
    marketingPlatformBusiness: marketingPlatformBusinessSlice.reducer,
    salesCrmAccount: salesCrmAccountSlice.reducer,
    smallViewNumbers: smallViewNumbersSlice.reducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export default store;
