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
            state.marketingPlatformBusinessData = [...state.marketingPlatformBusinessData, ...action.payload]
        }
    }
})

export const {setMarketingPlatformBusinessData, addMarketingPlatformBusinessData} = marketingPlatformBusinessSlice.actions
