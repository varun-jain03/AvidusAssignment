// Dependencies
import { createAsyncThunk } from "@reduxjs/toolkit";

// File Imports
import { BASE_URL } from "../../api/api.js";


export const registerUser = createAsyncThunk(
  "auth/register",
  async (userData, thunkAPI) => {
    try {
      const response = await fetch(
        `${BASE_URL}/auth/register`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(userData)
        }
      );
      const data = await response.json();
      
      if (!response.ok) {
        throw new Error(data.message || data.massage);
      };
      return data;
    } 
    catch (error) {
      console.log(error);
      return thunkAPI.rejectWithValue(error.message);
    }
  }
)

export const loginUser = createAsyncThunk(
  "auth/login",
  async (userData, thunkAPI) => {
    try {
      const response = await fetch(
        `${BASE_URL}/auth/login`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(userData)
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
)