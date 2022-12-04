import {createSlice} from "@reduxjs/toolkit";

export const adSetSummarySlice = createSlice({
    name: "adSetSummary",
    initialState: {
        adSetSummaryData: []
    },
    reducers: {
        setAdSetSummaryData: (state, action) => {
            state.adSetSummaryData = action.payload
        },
        addAdSetSummaryData: (state, action) => {
            state.adSetSummaryData = [...state.adSetSummaryData, ...action.payload]
        }
    }
})

export const {setAdSetSummaryData, addAdSetSummaryData} = adSetSummarySlice.actions
