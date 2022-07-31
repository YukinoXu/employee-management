import styles from './App.module.scss';
import { Routes, Route } from 'react-router-dom';
import { Home } from './components/Home/Home';
import { Admin } from './components/Admin/Admin';
import { LoginForm } from './components/LoginForm/LoginForm';
import { AddEmployeeForm } from './components/AddEmployeeForm/AddEmployeeForm';
import * as React from 'react'
import { getAllEmployees } from './data/api';
import { useDispatch } from 'react-redux';
import { setEmployee } from './reducer/employeeSlice';
import { setFilteredEmployee } from './reducer/filteredEmployeeSlice';

function App() {
  const dispatch = useDispatch()
  React.useEffect(() => {
    getAllEmployees().then((employees) => {
      if (employees) {
        const dataSource = employees.map((item) => {
          const current = {
            key: item.id,
            first_name: item.first_name,
            last_name: item.last_name,
            email: item.email,
            department: item.department,
            hobby: item.hobby
          }
          return current;
        });
        dispatch(setEmployee(dataSource));
        dispatch(setFilteredEmployee(dataSource));
      }
    });
  }, [dispatch]);

  return (
    <div className={styles.App}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="admin" element={<Admin />} />
        <Route path="login" element={<LoginForm />} />
        <Route path="addinfo" element={<AddEmployeeForm />} />
      </Routes>
    </div>
  );
}

export default App;
