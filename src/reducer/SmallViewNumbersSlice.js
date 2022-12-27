import {createSlice} from "@reduxjs/toolkit";

export const smallViewNumbersSlice = createSlice({
    name: "smallViewNumbers",
    initialState: {
        smallViewNumbersData: []
    },
    reducers: {
        setSmallViewNumbersData: (state, action) => {
            state.smallViewNumbersData = action.payload
        },
        addSmallViewNumbersData: (state, action) => {
            state.smallViewNumbersData = [...state.smallViewNumbersData, ...action.payload]
        }
    }
})

export const {setSmallViewNumbersData, addSmallViewNumbersData} = smallViewNumbersSlice.actions
