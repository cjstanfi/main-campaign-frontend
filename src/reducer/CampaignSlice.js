import {createSlice} from "@reduxjs/toolkit";

export const campaignSlice = createSlice({
    name: "campaign",
    initialState: {
        campaignData: []
    },
    reducers: {
        setCampaignData: (state, action) => {
            state.campaignData = action.payload
        },
        addCampaignData: (state, action) => {
            state.campaignData = [...state.campaignData, ...action.payload]
        }
    }
})

export const {setCampaignData, addCampaignData} = campaignSlice.actions
