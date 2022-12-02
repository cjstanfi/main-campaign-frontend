import {createSlice} from "@reduxjs/toolkit";

export const campaignDailyInsightSlice = createSlice({
    name: "campaignDailyInsight",
    initialState: {
        campaignDailyInsightData: []
    },
    reducers: {
        setAdSetData: (state, action) => {
            state.campaignDailyInsightData = action.payload
        },
        addAdSetData: (state, action) => {
            state.adSetData = [...state.adSetData, action.payload[0]]
        }
    }
})

export const {setCampaignDailyInsightData, addCampaignDailyInsightData} = campaignDailyInsightSlice.actions
