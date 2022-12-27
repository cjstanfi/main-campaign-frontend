import {createSlice} from "@reduxjs/toolkit";

export const salesCrmAccountSlice = createSlice({
    name: "salesCrmAccount",
    initialState: {
        salesCrmAccountData: []
    },
    reducers: {
        setSalesCrmAccountData: (state, action) => {
            state.salesCrmAccountData = action.payload
        },
        addSalesCrmAccountData: (state, action) => {
            state.salesCrmAccountData = [...state.salesCrmAccountData, ...action.payload]
        }
    }
})

export const {setSalesCrmAccountData, addSalesCrmAccountData} = salesCrmAccountSlice.actions
