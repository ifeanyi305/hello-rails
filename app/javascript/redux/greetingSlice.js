import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios'

const initialState = {
 loading: false,
 greet: [],
 error: ''
}

export const fetchGreetings = createAsyncThunk(
  'greeting/fetchGreetings',
   async() => {
    return axios
    .get('http://127.0.0.1:3000/api/v1/greetings')
    .then((response) => response.data)
   }
);

const greetingSlice = createSlice({
  name: 'greeting',
  initialState,
  extraReducers: (builder) => {
    builder.addCase(fetchGreetings.pending, state => {
      // state.loading = true
      return {
        loading: true,
        greet: {
          message: "",
        },
      }
    })
    builder.addCase(fetchGreetings.fulfilled, (state, action) => {
    return {
        ...state,
        loading: false,
        greet: action.payload,
        error: '',
    }
    })
    builder.addCase(fetchGreetings.rejected, (state, action) => {
      state.loading = false
      state.greet = []
      state.error = action.error.message
    })
  },
});

export default greetingSlice.reducer;
