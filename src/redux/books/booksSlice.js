import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLoading: false,
  error: null,
  bookList: undefined,
};

export const bookSlice = createSlice({
  name: "books",
  initialState,
  reducers: {
    startLoading: (state) => {
      state.isLoading = true;
    },

    endLoading: (state) => {
      state.isLoading = false;
    },

    setBooks: (state, action) => {
      console.log("action.payload", action.payload);
      state.bookList = action.payload;
    },

    addBook: (state, action) => {
      state.isLoading = false;
      state.bookList.push(action.payload);
    },

    removeBook: (state, action) => {
      const itemId = action.payload;
      state.bookList = state.bookList.filter((book) => book.item_id !== itemId);
    },
  },
});

export const { addBook, removeBook, startLoading, setBooks, endLoading } =
  bookSlice.actions;

export default bookSlice.reducer;
