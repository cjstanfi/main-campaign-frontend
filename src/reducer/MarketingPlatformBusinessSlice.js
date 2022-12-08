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
        },
    }
})

export const {setMarketingPlatformBusinessData, addMarketingPlatformBusinessData} = marketingPlatformBusinessSlice.actions


export const marketingPlatformBusinessByNameSelector = businessName => state => {
    return state.marketingPlatformBusiness.marketingPlatformBusinessData.filter(marketingPlatformBusiness => {
            return marketingPlatformBusiness.marketingPlatformBusinessName === businessName
        })
}
