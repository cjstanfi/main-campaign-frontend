import {createSlice} from "@reduxjs/toolkit";

export const facebookAdSlice = createSlice({
    name: "facebookAd",
    initialState: {
        facebookAdData: []
    },
    reducers: {
        setFacebookAdData: (state, action) => {
            state.facebookAdData = action.payload
        },
        addFacebookAdData: (state, action) => {
            state.facebookAdData = [...state.facebookAdData, ...action.payload]
        }
    }
})

export const {setFacebookAdData, addFacebookAdData} = facebookAdSlice.actions
