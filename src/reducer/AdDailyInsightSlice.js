import {createSlice} from "@reduxjs/toolkit";

export const adDailyInsightSlice = createSlice({
    name: "adDailyInsight",
    initialState: {
        adDailyInsightData: []
    },
    reducers: {
        setAdSetData: (state, action) => {
            state.adDailyInsightData = action.payload
        },
        addAdSetData: (state, action) => {
            state.adDailyInsightData = [...state.adDailyInsightData, action.payload[0]]
        }
    }
})

export const {setAdDailyInsightData, addAdDailyInsightData} = adDailyInsightSlice.actions
