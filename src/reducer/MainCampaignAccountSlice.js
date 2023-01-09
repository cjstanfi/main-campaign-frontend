import {createSlice} from "@reduxjs/toolkit";

export const mainCampaignAccountSlice = createSlice({
    name: "mainCampaignAccount",
    initialState: {
        mainCampaignAccountId: null,
        accessToken: null,
        userMetaData: {}
    },
    reducers: {
        setMainCampaignAccountId: (state, action) => {
            state.mainCampaignAccountId = action.payload
        },
        setAccessToken: (state, action) => {
            state.accessToken = action.payload
        },
        setUserMetaData: (state, action) => {
            state.userMetaData = action.payload
        },
    }
})


export const {setMainCampaignAccountId, setAccessToken, setUserMetaData} = mainCampaignAccountSlice.actions
