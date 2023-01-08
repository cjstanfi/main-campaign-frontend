import {createSlice} from "@reduxjs/toolkit";

export const mainCampaignAccountSlice = createSlice({
    name: "mainCampaignAccount",
    initialState: {
        mainCampaignAccountData: {},
    },
    reducers: {
        setMainCampaignAccountData: (state, action) => {
            state.mainCampaignAccountData = action.payload
        },
        addMainCampaignAccountData: (state, action) => {
            state.mainCampaignAccountData = [...state.mainCampaignAccountData, ...action.payload]
        },
    }
})

export function getMainCampaignAccountIdSelector(state) {
    return state.mainCampaignAccountData?.mainCampaignAccountId
}

export const {setMainCampaignAccountData, addMainCampaignAccountData} = mainCampaignAccountSlice.actions
