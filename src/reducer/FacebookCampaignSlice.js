import {createSlice} from "@reduxjs/toolkit";

export const facebookCampaignSlice = createSlice({
    name: "facebookCampaign",
    initialState: {
        facebookCampaignData: []
    },
    reducers: {
        setFacebookCampaignData: (state, action) => {
            state.facebookCampaignData = action.payload
        },
        addFacebookCampaignData: (state, action) => {
            state.facebookCampaignData = [...state.facebookCampaignData, ...action.payload]
        }
    }
})

export const {setFacebookCampaignData, addFacebookCampaignData} = facebookCampaignSlice.actions
