import {createSlice} from "@reduxjs/toolkit";

export const facebookAdSetDailyInsightSlice = createSlice({
    name: "facebookAdSetDailyInsight",
    initialState: {
        facebookAdSetDailyInsightData: []
    },
    reducers: {
        setFacebookAdSetDailyInsightData: (state, action) => {
            state.facebookAdSetDailyInsightData = action.payload
        },
        addFacebookAdSetDailyInsightData: (state, action) => {
            state.facebookAdSetDailyInsightData = [...state.facebookAdSetDailyInsightData, ...action.payload]
        }
    }
})

export const {setFacebookAdSetDailyInsightData, addFacebookAdSetDailyInsightData} = facebookAdSetDailyInsightSlice.actions
