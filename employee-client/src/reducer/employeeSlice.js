import { createSlice } from '@reduxjs/toolkit';

export const employeeSlice = createSlice({
  name: 'employee',
  initialState: {
    value: []
  },
  reducers: {
    setEmployee: (state, action) => {
      state.value = action.payload
    }
  }
});

export const { setEmployee } = employeeSlice.actions;
export default employeeSlice.reducer;

