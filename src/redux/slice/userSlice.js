// câu lệnh tạo slice nhanh RXSLICE
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  arrUser: [],
};

const userSlice = createSlice({
  name: "user",
  //   initialState la dữ liệu mặc định của slice
  initialState,
  //   reducers: {}, tạo các hàm xử lý dữ liệu
  reducers: {
    getValueUser: (state, action) => {
      console.log(state);
      console.log(action);
      state.arrUser.push(action.payload);
    },
  },
});

export const { getValueUser } = userSlice.actions;

export default userSlice.reducer;
