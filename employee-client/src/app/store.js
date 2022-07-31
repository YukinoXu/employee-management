import { configureStore } from '@reduxjs/toolkit'
import employeeReducer from '../reducer/employeeSlice';
import filteredEmployeeReducer from '../reducer/filteredEmployeeSlice';

export default configureStore({
  reducer: {
    employee: employeeReducer,
    filteredEmployee: filteredEmployeeReducer
  },
})