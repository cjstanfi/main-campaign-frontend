import {createSlice} from "@reduxjs/toolkit";

export const facebookAdAccountSlice = createSlice({
    name: "facebookAdAccount",
    initialState: {
        facebookAdAccountData: []
    },
    reducers: {
        setFacebookAdAccountData: (state, action) => {
            state.facebookAdAccountData = action.payload
        },
        addFacebookAdAccountData: (state, action) => {
            state.facebookAdAccountData = [...state.facebookAdAccountData, ...action.payload]
        }
    }
})

export const {setFacebookAdAccountData, addFacebookAdAccountData} = facebookAdAccountSlice.actions
