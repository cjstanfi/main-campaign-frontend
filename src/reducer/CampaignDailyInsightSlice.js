import {createSlice} from "@reduxjs/toolkit";

export const campaignDailyInsightSlice = createSlice({
    name: "campaignDailyInsight",
    initialState: {
        campaignDailyInsightData: []
    },
    reducers: {
        setCampaignDailyInsightData: (state, action) => {
            state.campaignDailyInsightData = action.payload
        },
        addCampaignDailyInsightData: (state, action) => {
            state.campaignDailyInsightData = [...state.campaignDailyInsightData, ...action.payload]
        }
    }
})

export const {setCampaignDailyInsightData, addCampaignDailyInsightData} = campaignDailyInsightSlice.actions
