import {createSlice} from "@reduxjs/toolkit";

export const adSetSlice = createSlice({
    name: "adSet",
    initialState: {
        adSetData: []
    },
    reducers: {
        setAdSetData: (state, action) => {
            state.adSetData = action.payload
        },
        addAdSetData: (state, action) => {
            state.adSetData = [...state.adSetData, ...action.payload]
        }
    }
})

export const {setAdSetData, addAdSetData} = adSetSlice.actions
