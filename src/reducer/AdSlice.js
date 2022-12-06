import {createSlice} from "@reduxjs/toolkit";

export const adSlice = createSlice({
    name: "ad",
    initialState: {
        adData: []
    },
    reducers: {
        setAdData: (state, action) => {
            state.adData = action.payload
        },
        addAdData: (state, action) => {
            state.adData = [...state.adData, ...action.payload]
        }
    }
})

export const {setAdData, addAdData} = adSlice.actions
