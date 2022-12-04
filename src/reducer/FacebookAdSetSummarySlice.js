import {createSlice} from "@reduxjs/toolkit";

export const facebookAdSetSummarySlice = createSlice({
    name: "facebookAdSetSummary",
    initialState: {
        facebookAdSetSummaryData: []
    },
    reducers: {
        setFacebookAdSetSummaryData: (state, action) => {
            state.facebookAdSetSummaryData = action.payload
        },
        addAdSetSummaryData: (state, action) => {
            state.facebookAdSetSummaryData = [...state.facebookAdSetSummaryData, ...action.payload]
        }
    }
})

export const {setFacebookAdSetSummaryData, addFacebookAdSetSummaryData} = facebookAdSetSummarySlice.actions
