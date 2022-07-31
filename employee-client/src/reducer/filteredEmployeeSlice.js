import { createSlice } from '@reduxjs/toolkit';

export const filteredEmployeeSlice = createSlice({
  name: 'filteredEmployee',
  initialState: {
    value: []
  },
  reducers: {
    setFilteredEmployee: (state, action) => {
      state.value = action.payload
    }
  }
});

export const { setFilteredEmployee } = filteredEmployeeSlice.actions;
export default filteredEmployeeSlice.reducer;

