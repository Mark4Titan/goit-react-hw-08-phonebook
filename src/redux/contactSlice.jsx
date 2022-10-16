import { createSlice } from '@reduxjs/toolkit';
import { fetchAllItems, addItem, deleteItem } from './operations';


const handlePending = state => {
  state.isLoading = true;
};

const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};



const DefaultContacts = () => { 

  return {
    items: [],
    isLoading: false,
    error: null,
  };
};



const ContactSlice = createSlice({
  name: 'contacts',
  initialState: DefaultContacts,
  extraReducers: {
    //
    [fetchAllItems.pending]: handlePending,
    [fetchAllItems.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      state.items = action.payload;
    },
    [fetchAllItems.rejected]: handleRejected,
    //
    [addItem.pending]: handlePending,
    [addItem.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      state.items.push(action.payload);
    },
    [addItem.rejected]: handleRejected,
    //
    [deleteItem.pending]: handlePending,
    [deleteItem.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      const index = state.items.findIndex(
        contact => contact.id === action.payload.id
      );
      // console.log('index = ', index);
      state.items.splice(index, 1);
    },
    [deleteItem.rejected]: handleRejected,
    //
  },
  
});

export const contactReducer = ContactSlice.reducer;