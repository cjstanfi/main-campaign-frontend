import {createSlice} from "@reduxjs/toolkit";

export const marketingPlatformBusinessSlice = createSlice({
    name: "marketingPlatformBusiness",
    initialState: {
        marketingPlatformBusinessData: []
    },
    reducers: {
        setMarketingPlatformBusinessData: (state, action) => {
            state.marketingPlatformBusinessData = action.payload
        },
        addMarketingPlatformBusinessData: (state, action) => {
            state.campaignData = [...state.campaignData, action.payload[0]]
        }
    }
})

export const {setMarketingPlatformBusinessData, addMarketingPlatformBusinessData} = marketingPlatformBusinessSlice.actions
