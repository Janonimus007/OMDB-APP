import { createAsyncThunk } from "@reduxjs/toolkit";
import { omdbapi } from "../../api/OmdbApi";

export const getSearch = createAsyncThunk(
    "Peliculas/getSearch",
    async function getSearch( data:string, thunkAPI) {
      try {
        const response = await omdbapi.get(
          `&s=${data}`
        );
        return response.data.Search;
      } catch (error) {
        return thunkAPI.rejectWithValue(error);
      }
    }
);


export const getDetail = createAsyncThunk(
  "Peliculas/getDetail",
  async function getDetail( data:any, thunkAPI) {
    try {
      const response = await omdbapi.get(
        `&i=${data}`
      );
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);