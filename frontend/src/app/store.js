// dependencies
import { configureStore } from "@reduxjs/toolkit";

// file imports
import authReducer from "../redux/auth/authSlice.js";

export const store = configureStore({
  reducer: {
    auth: authReducer
  }
});