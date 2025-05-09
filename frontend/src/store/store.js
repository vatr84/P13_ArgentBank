// Imports
import { configureStore } from "@reduxjs/toolkit";

// Reducers
import { authReducer } from "./slices/authSlice";
import { userReducer } from "./slices/userSlice";

/*
    Store
*/
export const store = configureStore({
  reducer: {
    auth: authReducer,
    user: userReducer,
  },
});
