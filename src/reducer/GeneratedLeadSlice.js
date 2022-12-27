import {createSlice} from "@reduxjs/toolkit";

export const generatedLeadSlice = createSlice({
    name: "generatedLead",
    initialState: {
        generatedLeadData: []
    },
    reducers: {
        setGeneratedLeadData: (state, action) => {
            state.generatedLeadData = action.payload
        },
        addGeneratedLeadData: (state, action) => {
            state.generatedLeadData = [...state.generatedLeadData, ...action.payload]
        }
    }
})

export const {setGeneratedLeadData, addGeneratedLeadData} = generatedLeadSlice.actions
