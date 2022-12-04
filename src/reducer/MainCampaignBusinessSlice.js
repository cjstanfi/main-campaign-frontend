import {createSlice} from "@reduxjs/toolkit";

export const mainCampaignBusinessSlice = createSlice({
    name: "mainCampaignBusiness",
    initialState: {
        mainCampaignBusinessData: []
    },
    reducers: {
        setMainCampaignBusinessData: (state, action) => {
            state.mainCampaignBusinessData = action.payload
        },
        addMainCampaignBusinessData: (state, action) => {
            state.mainCampaignBusinessData = [...state.mainCampaignBusinessData, ...action.payload]
        }
    }
})

export const {setMainCampaignBusinessData, addMainCampaignBusinessData} = mainCampaignBusinessSlice.actions
