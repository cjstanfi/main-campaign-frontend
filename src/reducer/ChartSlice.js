import {createSlice} from "@reduxjs/toolkit";

export const chartSlice = createSlice({
    name: "chart",
    initialState: {
        chartData: []
    },
    reducers: {
        setChartData: (state, action) => {
            state.chartData = action.payload
        },
        addChartData: (state, action) => {
            state.chartData = [...state.chartData, ...action.payload]
        }
    }
})

export const {setChartData, addChartData} = chartSlice.actions
