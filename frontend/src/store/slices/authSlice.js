// Imports
import { createSlice } from "@reduxjs/toolkit";

// Initial State
const initialState = {
  isValid: false,
  token: null,
};

/*
    Slice
*/
const authSlice = createSlice({
  name: "authSlice",
  initialState,
  reducers: {
    logout: (state) => {
      localStorage.clear();
      Object.assign(state, initialState);
    },
    setToken: (state, action) => {
      state.token = action.payload;
      state.isValid = true;
    },
    persistToken: (state) => {
      localStorage.setItem("token", state.token);
    },
  },
});

export const { logout, setToken, persistToken } = authSlice.actions;
export const authReducer = authSlice.reducer;
