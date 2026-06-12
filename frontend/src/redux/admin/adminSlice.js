// Dependencies
import { createSlice } from "@reduxjs/toolkit";

// File imports
import {
  fetchAnalytics,
  fetchAllUsers,
  updateUserStatus,
  deleteUser,
  fetchAllTasks,
  fetchActivities,
  adminDeleteTask,
  adminUpdateTask,
} from "./adminThunk.js";

const initialState = {
  analytics: null,
  users: [],
  allTasks: [],
  activities: [],
  loading: false,
  error: null,
};

const adminSlice = createSlice({
  name: "admin",
  initialState,
  reducers: {
    clearAdminError: (state) => {
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchAnalytics.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchAnalytics.fulfilled, (state, action) => {
        state.loading = false;
        state.analytics = action.payload.data;
      })
      .addCase(fetchAnalytics.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })

      .addCase(fetchAllUsers.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchAllUsers.fulfilled, (state, action) => {
        state.loading = false;
        state.users = action.payload.data;
      })
      .addCase(fetchAllUsers.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })

      .addCase(updateUserStatus.fulfilled, (state, action) => {
        const index = state.users.findIndex(
          (user) => user._id === action.payload.data._id
        );
        if (index !== -1) {
          state.users[index] = action.payload.data;
        }
      })

      .addCase(deleteUser.fulfilled, (state, action) => {
        state.users = state.users.filter((user) => user._id !== action.payload);
      })

      .addCase(fetchAllTasks.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchAllTasks.fulfilled, (state, action) => {
        state.loading = false;
        state.allTasks = action.payload.data;
      })
      .addCase(fetchAllTasks.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })

      .addCase(adminDeleteTask.fulfilled, (state, action) => {
        state.allTasks = state.allTasks.filter(
          (task) => task._id !== action.payload
        );
      })

      .addCase(adminUpdateTask.fulfilled, (state, action) => {
        const index = state.allTasks.findIndex(
          (task) => task._id === action.payload.data._id
        );
        if (index !== -1) {
          state.allTasks[index] = action.payload.data;
        }
      })

      .addCase(fetchActivities.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchActivities.fulfilled, (state, action) => {
        state.loading = false;
        state.activities = action.payload.data;
      })
      .addCase(fetchActivities.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export const { clearAdminError } = adminSlice.actions;
export default adminSlice.reducer;
