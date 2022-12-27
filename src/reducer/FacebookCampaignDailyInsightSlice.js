import {createSlice} from "@reduxjs/toolkit";

export const facebookCampaignDailyInsightSlice = createSlice({
    name: "facebookCampaignDailyInsight",
    initialState: {
        facebookCampaignDailyInsightData: []
    },
    reducers: {
        setFacebookCampaignDailyInsightData: (state, action) => {
            state.facebookCampaignDailyInsightData = action.payload
        },
        addCampaignDailyInsightData: (state, action) => {
            state.facebookCampaignDailyInsightData = [...state.facebookCampaignDailyInsightData, ...action.payload]
        }
    }
})

export const {setFacebookCampaignDailyInsightData, addCampaignDailyInsightData} = facebookCampaignDailyInsightSlice.actions
