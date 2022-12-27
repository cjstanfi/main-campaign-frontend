import {createSlice} from "@reduxjs/toolkit";

export const mainCampaignAccountSlice = createSlice({
    name: "mainCampaignAccount",
    initialState: {
        mainCampaignAccountData: {},
        isLoggedIn: false
    },
    reducers: {
        setMainCampaignAccountData: (state, action) => {
            state.mainCampaignAccountData = action.payload
        },
        addMainCampaignAccountData: (state, action) => {
            state.mainCampaignAccountData = [...state.mainCampaignAccountData, ...action.payload]
        },
        setIsLoggedIn: (state, action) => {
            state.isLoggedIn = action.payload
        }
    }
})

export function getMainCampaignAccountIdSelector(state) {
    return state.mainCampaignAccountData?.mainCampaignAccountId
}

export const {setMainCampaignAccountData, addMainCampaignAccountData, setIsLoggedIn} = mainCampaignAccountSlice.actions
