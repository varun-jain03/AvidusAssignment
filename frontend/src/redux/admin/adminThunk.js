// Dependencies
import { createAsyncThunk } from "@reduxjs/toolkit";
import { BASE_URL } from "../../api/api.js";

const getToken = () => localStorage.getItem("token");

const authHeaders = () => ({
  Authorization: `Bearer ${getToken()}`,
});

const parseError = (data) => data.message || data.massage || "Something went wrong";

export const fetchAnalytics = createAsyncThunk(
  "admin/fetchAnalytics",
  async (_, thunkAPI) => {
    try {
      const response = await fetch(`${BASE_URL}/analytics`, {
        headers: authHeaders(),
      });
      const data = await response.json();
      if (!response.ok) throw new Error(parseError(data));
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const fetchAllUsers = createAsyncThunk(
  "admin/fetchAllUsers",
  async (_, thunkAPI) => {
    try {
      const response = await fetch(`${BASE_URL}/users/getAll`, {
        headers: authHeaders(),
      });
      const data = await response.json();
      if (!response.ok) throw new Error(parseError(data));
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const updateUserStatus = createAsyncThunk(
  "admin/updateUserStatus",
  async ({ id, status }, thunkAPI) => {
    try {
      const response = await fetch(`${BASE_URL}/users/${id}/status`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
          ...authHeaders(),
        },
        body: JSON.stringify({ status }),
      });
      const data = await response.json();
      if (!response.ok) throw new Error(parseError(data));
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const deleteUser = createAsyncThunk(
  "admin/deleteUser",
  async (id, thunkAPI) => {
    try {
      const response = await fetch(`${BASE_URL}/users/${id}`, {
        method: "DELETE",
        headers: authHeaders(),
      });
      const data = await response.json();
      if (!response.ok) throw new Error(parseError(data));
      return id;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const fetchAllTasks = createAsyncThunk(
  "admin/fetchAllTasks",
  async (_, thunkAPI) => {
    try {
      const response = await fetch(`${BASE_URL}/tasks/all`, {
        headers: authHeaders(),
      });
      const data = await response.json();
      if (!response.ok) throw new Error(parseError(data));
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const fetchActivities = createAsyncThunk(
  "admin/fetchActivities",
  async (_, thunkAPI) => {
    try {
      const response = await fetch(`${BASE_URL}/activity`, {
        headers: authHeaders(),
      });
      const data = await response.json();
      if (!response.ok) throw new Error(parseError(data));
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const adminDeleteTask = createAsyncThunk(
  "admin/adminDeleteTask",
  async (id, thunkAPI) => {
    try {
      const response = await fetch(`${BASE_URL}/tasks/${id}`, {
        method: "DELETE",
        headers: authHeaders(),
      });
      const data = await response.json();
      if (!response.ok) throw new Error(parseError(data));
      return id;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const adminUpdateTask = createAsyncThunk(
  "admin/adminUpdateTask",
  async ({ id, taskData }, thunkAPI) => {
    try {
      const response = await fetch(`${BASE_URL}/tasks/${id}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
          ...authHeaders(),
        },
        body: JSON.stringify(taskData),
      });
      const data = await response.json();
      if (!response.ok) throw new Error(parseError(data));
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
