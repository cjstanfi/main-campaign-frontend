import { configureStore } from "@reduxjs/toolkit";
import { dataSlice } from "../reducer/reducer";
import { adSetSlice} from "../reducer/AdSetSlice";
import {campaignSlice} from "../reducer/CampaignSlice";
import {campaignSummarySlice} from "../reducer/CampaignSummarySlice";

export const dataActions = dataSlice.actions;

const store = configureStore({
  reducer: {
    data: dataSlice.reducer,
    adSet: adSetSlice.reducer,
    campaign: campaignSlice.reducer,
    campaignSummary: campaignSummarySlice.reducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export default store;
