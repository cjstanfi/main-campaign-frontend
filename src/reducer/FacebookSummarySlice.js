import {createSlice} from "@reduxjs/toolkit";

export const facebookSummarySlice = createSlice({
    name: "summary",
    initialState: {
        summaryData: []
    },
    reducers: {
        setSummaryData: (state, action) => {
            state.summaryData = action.payload
        },
        addSummaryData: (state, action) => {
            state.summaryData = [...state.summaryData, ...action.payload]
        }
    }
})

export const {setSummaryData, addSummaryData} = facebookSummarySlice.actions
