import {createSlice} from "@reduxjs/toolkit";

export const adSummarySlice = createSlice({
    name: "adSummary",
    initialState: {
        adSummaryData: []
    },
    reducers: {
        setAdSummaryData: (state, action) => {
            state.adSummaryData = action.payload
        },
        addAdSummaryData: (state, action) => {
            state.adSummaryData = [...state.adSummaryData, ...action.payload]
        }
    }
})

export const {setAdSummaryData, addAdSummaryData} = adSummarySlice.actions
