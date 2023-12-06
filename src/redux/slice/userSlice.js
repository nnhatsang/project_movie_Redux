// câu lệnh tạo slice nhanh RXSLICE
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  arrUser: [],
  showErr: "",
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
      // kiểm tra tồn tại ID
      const user = state.arrUser.find((item) => item.id == action.payload.id);
      if (!user) {
        state.arrUser.push(action.payload);
        state.showErr = "";
      } else {
        state.showErr = "Đã có người dùng trong dữ liệu";
      }
      // !user ? (state.showErr = "Tồn tại tài khoản") : (state.showErr = ""),

      // state.arrUser.push(action.payload);
    },
    removeUser: (state, action) => {
      // xoá: cần ID để xoá
      const index = state.arrUser.findIndex((item) => {
        //id = 5 , action.payload =5
        return item.ID == action.payload;
      });
      if (index != -1) {
        state.arrUser.splice(index, 1);
      }
    },
    updateUser: (state, actions) => {
      console.log(actions);
      const index = state.arrUser.findIndex(
        (item) => item.ID == actions.payload.ID
      );
      // index != -1 ? (state.arrUser[index] = actions.payload) : "";
      if (index != -1) {
        state.arrUser[index] = actions.payload;
      }
    },
  },
});

export const { getValueUser, removeUser, updateUser } = userSlice.actions;

export default userSlice.reducer;
