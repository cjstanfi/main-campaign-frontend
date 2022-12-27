import {createSlice} from "@reduxjs/toolkit";

export const facebookAdSetSlice = createSlice({
    name: "facebookAdSet",
    initialState: {
        facebookAdSetData: []
    },
    reducers: {
        setFacebookAdSetData: (state, action) => {
            state.adSetData = action.payload
        },
        addFacebookAdSetData: (state, action) => {
            state.facebookAdSetData = [...state.facebookAdSetData, ...action.payload]
        }
    }
})

export const {setFacebookAdSetData, addFacebookAdSetData} = facebookAdSetSlice.actions
