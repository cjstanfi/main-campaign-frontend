import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    data: [
        ["", "Leads", "Revenue"],
        ["Jun\n2021", 1000, 400],
        ["Jul\n2021", 1170, 460],
        ["Aug\n2021", 660, 1120],
        ["Sep\n2021", 2000, 1120],
        ["Oct\n2021", 660, 1120],
        ["Nov\n2021", 3000, 1120],
        ["Dec\n2021", 2500, 1120],
        ["Jan\n2022", 660, 1120],
        ["Feb\n2022", 2200, 1120],
        ["Mar\n2022", 2800, 1120],
        ["Apr\n2022", 660, 1120],
        ["May\n2022", 2450, 1120],
        ["Jun\n2022", 1030, 540],
      ]
  };

  export const barchartSlice = createSlice({
    name: "chart",
    initialState,
    reducers: {
    },
  });
  