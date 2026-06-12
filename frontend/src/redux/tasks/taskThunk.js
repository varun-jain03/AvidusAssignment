// Dependencies
import { createAsyncThunk } from "@reduxjs/toolkit";
import { BASE_URL } from "../../api/api.js";

const getToken = () => localStorage.getItem("token");


export const getMyTasks = createAsyncThunk(
  "task/getMyTasks",
  async (_, thunkAPI) => {
    try {
      const response = await fetch(
        `${BASE_URL}/tasks`,
        { headers: { Authorization: `Bearer ${getToken()}` } },
      );
      const data = await response.json();
      if (!response.ok) {
        throw new Error(data.message || data.massage);
      }

      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
)

export const createTask = createAsyncThunk(
  "tasks/createTask",
  async (taskData, thunkAPI) => {
    try {
      const response = await fetch(
        `${BASE_URL}/tasks`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${getToken()}`
          },
          body: JSON.stringify(taskData)
        }
      );
      const data = await response.json();
      if (!response.ok) {
        throw new Error(data.message)
      }
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
)

export const updateTask = createAsyncThunk(
  "tasks/updateTask",
  async ({ id, taskData }, thunkAPI) => {
    try {
      const response = await fetch(
        `${BASE_URL}/tasks/${id}`,
        {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${getToken()}`
          },
          body: JSON.stringify(taskData)
        }
      );
      const data = await response.json();
      if (!response.ok) {
        throw new Error(data.message || data.massage);
      }
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const deleteTask = createAsyncThunk(
  "tasks/deleteTask",
  async (id, thunkAPI) => {
    try {
      const response = await fetch(
        `${BASE_URL}/tasks/${id}`,
        {
          method: "DELETE",
          headers: {
            Authorization: `Bearer ${getToken()}`
          }
        }
      );
      const data = await response.json();
      if (!response.ok) {
        throw new Error(data.message || data.massage);
      }
      return id;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);


