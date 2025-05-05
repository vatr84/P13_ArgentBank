// Imports
import { createSlice } from "@reduxjs/toolkit";

// Initial State
const initialState = {
  firstname: null,
  lastname: null,
  isEditMode: false,
};

/*
    Slice
*/
const userSlice = createSlice({
  name: "userSlice",
  initialState,
  reducers: {
    resetUserState: (state) => Object.assign(state, initialState),
    setFirstname: (state, action) => {
      state.firstname = action.payload;
    },
    setLastname: (state, action) => {
      state.lastname = action.payload;
    },
    switchEditMode: (state, action) => {
      state.isEditMode = action.payload;
    },
  },
});

export const { resetUserState, setFirstname, setLastname, switchEditMode } =
  userSlice.actions;
export const userReducer = userSlice.reducer;
