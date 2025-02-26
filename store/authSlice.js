import { createSlice } from "@reduxjs/toolkit";
import AsyncStorage from "@react-native-async-storage/async-storage";

const authSlice = createSlice({
  name: "auth",
  initialState: { token: null, user: null },
  reducers: {
    loginSuccess: (state, action) => {
      state.user = action.payload.user.user;
      state.token = action.payload.token;
      AsyncStorage.setItem("token", action.payload.token);
    },
    logout: (state) => {
      state.user = null;
      state.token = null;
      AsyncStorage.removeItem("token");

    },
  },
});

export const { loginSuccess, logout } = authSlice.actions;
export default authSlice.reducer;
