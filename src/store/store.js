import { configureStore } from "@reduxjs/toolkit";
import { dataSlice } from "../reducer/reducer";
import { adSetSlice} from "../reducer/AdSetSlice";

export const dataActions = dataSlice.actions;

const store = configureStore({
  reducer: {
    data: dataSlice.reducer,
    adSet: adSetSlice.reducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export default store;
