// dependencies
import { configureStore } from "@reduxjs/toolkit";

// file imports
import authReducer from "../redux/auth/authSlice.js";
import taskReducer from "../redux/tasks/taskSlice.js";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    tasks: taskReducer
  }
});