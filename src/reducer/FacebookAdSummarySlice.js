import {createSlice} from "@reduxjs/toolkit";

export const facebookAdSummarySlice = createSlice({
    name: "facebookAdSummary",
    initialState: {
        facebookAdSummaryData: []
    },
    reducers: {
        setFacebookAdSummaryData: (state, action) => {
            state.facebookAdSummaryData = action.payload
        },
        addFacebookAdSummaryData: (state, action) => {
            state.facebookAdSummaryData = [...state.facebookAdSummaryData, ...action.payload]
        }
    }
})

export const {setFacebookAdSummaryData, addFacebookAdSummaryData} = facebookAdSummarySlice.actions
