import {createSlice} from "@reduxjs/toolkit";

export const facebookCampaignSummarySlice = createSlice({
    name: "campaignSummary",
    initialState: {
        campaignSummaryData: []
    },
    reducers: {
        setCampaignSummaryData: (state, action) => {
            state.campaignSummaryData = action.payload
        },
        addCampaignSummaryData: (state, action) => {
            state.campaignSummaryData = [...state.campaignSummaryData, ...action.payload]
        }
    }
})

export const {setCampaignSummaryData, addCampaignSummaryData} = facebookCampaignSummarySlice.actions
