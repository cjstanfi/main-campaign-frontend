import {createSlice} from "@reduxjs/toolkit";

export const adSetDailyInsightSlice = createSlice({
    name: "adSetDailyInsight",
    initialState: {
        adSetDailyInsightData: []
    },
    reducers: {
        setAdSetData: (state, action) => {
            state.adSetDailyInsightData = action.payload
        },
        addAdSetData: (state, action) => {
            state.adSetDailyInsightData = [...state.adSetData, ...action.payload]
        }
    }
})

export const {setAdSetDailyInsightData, addAdSetDailyInsightData} = adSetDailyInsightSlice.actions
