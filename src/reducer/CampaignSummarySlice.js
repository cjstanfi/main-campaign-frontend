import {createSlice} from "@reduxjs/toolkit";

export const campaignSummarySlice = createSlice({
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

export const {setCampaignSummaryData, addCampaignSummaryData} = campaignSummarySlice.actions
