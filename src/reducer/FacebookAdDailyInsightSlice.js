import {createSlice} from "@reduxjs/toolkit";

export const facebookAdDailyInsightSlice = createSlice({
    name: "facebookAdDailyInsight",
    initialState: {
        facebookAdDailyInsightData: []
    },
    reducers: {
        setFacebookAdDailyInsightData: (state, action) => {
            state.facebookAdDailyInsightData = action.payload
        },
        addFacebookAdDailyInsightData: (state, action) => {
            state.facebookAdDailyInsightData = [...state.facebookAdDailyInsightData, ...action.payload]
        }
    }
})

export const {setFacebookAdDailyInsightData, addFacebookAdDailyInsightData} = facebookAdDailyInsightSlice.actions
