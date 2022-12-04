import {createSlice} from "@reduxjs/toolkit";

export const facebookCampaignSummarySlice = createSlice({
    name: "facebookCampaignSummary",
    initialState: {
        facebookCampaignSummaryData: []
    },
    reducers: {
        setFacebookCampaignSummaryData: (state, action) => {
            state.facebookCampaignSummaryData = action.payload
        },
        addFacebookCampaignSummaryData: (state, action) => {
            state.facebookCampaignSummaryData = [...state.facebookCampaignSummaryData, ...action.payload]
        }
    }
})

export const {setFacebookCampaignSummaryData, addFacebookCampaignSummaryData} = facebookCampaignSummarySlice.actions
