import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  data: {},
  datas: [],
  is_loading: false,
};
export const dataSlice = createSlice({
  name: "data",
  initialState,
  reducers: {
    dataaccess(state, action) {
      state.data = action.payload;
    },
    dataaccessall(state, action) {
      state.datas = action.payload;
      //console.log(state.datas);
    },
    sortdatdesc(state, action) {
      state.datas = [...state.datas].sort((a, b) => b.id - a.id);
    },
    sortdatasc(state, action) {
      state.datas = [...state.datas].sort((a, b) => a.id - b.id);
      //console.log(state.datas);
    },
    searchdatasc(state, action) {
      state.datas = action.payload;
    },
    loading(state, action) {
      state.is_loading = action.payload;
    },
  },
});
