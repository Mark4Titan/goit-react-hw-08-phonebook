import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

axios.defaults.baseURL =
  'https://633eeae90dbc3309f3c0fd4e.mockapi.io/contacts/contacts';

export const fetchAllItems = createAsyncThunk(
  'contacts/fetchAllItems',
  async (_, thunkAPI) => {
    try {
      const response = await axios.get('/');
      // console.log('response.data = ', response.data);
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);


export const addItem = createAsyncThunk(
  'contacts/addItem',
  async ({ name, phone }, thunkAPI) => {
    try {
      const response = await axios.post('/', { name, phone });
      // console.log('response.data = ', response.data);
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const deleteItem = createAsyncThunk(
  'contacts/deleteItem',
  async (itemId, thunkAPI) => {
    try {
      const response = await axios.delete(`/${itemId}`);
      // console.log('response.data = ', response.data);
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);
