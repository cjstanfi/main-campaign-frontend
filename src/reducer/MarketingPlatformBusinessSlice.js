import {createSlice} from "@reduxjs/toolkit";


export const marketingPlatformBusinessSlice = createSlice({
    name: "marketingPlatformBusiness",
    initialState: {
        marketingPlatformBusinessData: [],
        currentMarketingPlatformBusinessData: {}
    },
    reducers: {
        setMarketingPlatformBusinessData: (state, action) => {
            state.marketingPlatformBusinessData = action.payload
        },
        addMarketingPlatformBusinessData: (state, action) => {
            state.marketingPlatformBusinessData = [...state.marketingPlatformBusinessData, ...action.payload]
        },
        setCurrentMarketingPlatformBusinessData: (state, action) => {
            state.currentMarketingPlatformBusinessData = action.payload
        }
    }
})

export const {setMarketingPlatformBusinessData, addMarketingPlatformBusinessData, setCurrentMarketingPlatformBusinessData} = marketingPlatformBusinessSlice.actions


export const marketingPlatformBusinessByNameSelector = businessName => state => {
    return state.marketingPlatformBusiness.marketingPlatformBusinessData.find(marketingPlatformBusiness => {
            return marketingPlatformBusiness.marketingPlatformBusinessName === businessName
        })
}
