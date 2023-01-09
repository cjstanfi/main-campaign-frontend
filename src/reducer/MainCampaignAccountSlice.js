import {createSlice} from "@reduxjs/toolkit";

export const mainCampaignAccountSlice = createSlice({
    name: "mainCampaignAccount",
    initialState: {
        mainCampaignAccountId: null,
    },
    reducers: {
        setMainCampaignAccountId: (state, action) => {
            state.mainCampaignAccountId = action.payload
        },
    }
})


export const {setMainCampaignAccountId} = mainCampaignAccountSlice.actions
