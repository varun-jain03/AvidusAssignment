// Dependencies
import { createSlice } from "@reduxjs/toolkit";

// file imports
import { getMyTasks, createTask, updateTask, deleteTask } from "./taskThunk";

const initialState = {
  tasks: [],
  loading: false,
  error: null
};

const taskSlice = createSlice({
  name: "tasks",
  initialState,
  reducers: {},

  extraReducers: (builder) => {
    builder

      // GETTING MY TASKS
      .addCase(getMyTasks.pending, (state) => {
        state.loading = true;
      })

      .addCase(getMyTasks.fulfilled, (state, action) => {
        state.loading = false;
        state.tasks = action.payload.data;
      })

      .addCase(getMyTasks.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })

      // CREATE NEW TASK
      .addCase(createTask.fulfilled, (state, action) => {
        state.tasks.unshift(action.payload.data);
      })

      .addCase(updateTask.fulfilled, (state, action) => {
        const index = state.tasks.findIndex(
          (task) => task._id === action.payload.data._id
        );

        if (index !== -1) {
          state.tasks[index] = action.payload.data;
        }
      })

      .addCase(deleteTask.fulfilled, (state, action) => {
        state.tasks = state.tasks.filter(
          (task) => task._id !== action.payload
        );
      });
  }
});

export default taskSlice.reducer;