import {createSlice} from "@reduxjs/toolkit";

export const marketingPlatformAccountSlice = createSlice({
    name: "marketingPlatformAccount",
    initialState: {
        marketingPlatformAccountData: []
    },
    reducers: {
        setMarketingPlatformAccountData: (state, action) => {
            state.marketingPlatformAccountData = action.payload
        },
        addMarketingPlatformAccountData: (state, action) => {
            state.marketingPlatformAccountData = [...state.marketingPlatformAccountData, ...action.payload]
        }
    }
})

export const {setMarketingPlatformAccountData, addMarketingPlatformAccountData} = marketingPlatformAccountSlice.actions
