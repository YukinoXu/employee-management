import { SearchOutlined } from '@ant-design/icons';
import { Button, Select } from 'antd';
import styles from './EmployeeSelect.module.scss';
import * as React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { setFilteredEmployee } from '../../reducer/filteredEmployeeSlice';
const { Option } = Select;

export function EmployeeSelect() {
  const employee = useSelector((state) => state.employee.value);
  const dispatch = useDispatch()
  const allDepartments = React.useMemo(() => [...new Set(employee.map((item) => item.department))], [employee]);
  const allLastNames = React.useMemo(() => [...new Set(employee.map((item) => item.last_name))], [employee])
  const [department, setDepartment] = React.useState(allDepartments[0]);
  const [lastName, setLastName] = React.useState(allLastNames[0]);
  function handleDepartmentChange(value) {
    setDepartment(value)
  }

  function handleLastNameChange(value) {
    setLastName(value)
  }

  const departmentOptions = allDepartments.map((item) => {
    return (
      <Option key={item} value={item}>{item}</Option>
    )
  });

  const lastNameOptions = allLastNames.map((item) => {
    const filteredLastNames = employee
      .filter((em) => em.department === department)
      .map((item) => item.last_name);
    if (filteredLastNames.includes(item)) {
      return (
        <Option key={item} value={item}>{item}</Option>
      )
    } else {
      return null
    }
  })

  function handleSearch() {
    let newEmployee = employee;
    if (department !== 'All') {
      newEmployee = newEmployee.filter((item) => item.department === department);
    }
    if (lastName !== 'All') {
      newEmployee = newEmployee.filter((item) => item.last_name === lastName)
    }
    dispatch(setFilteredEmployee(newEmployee))
  }

  return (
    <div className={styles.container}>
      <section className={styles.text}>Department</section>
      <Select defaultValue={'Please select'} style={{ width: 120 }} onChange={handleDepartmentChange}>
        <Option value={'All'}>All</Option>
        {departmentOptions}
      </Select>
      <section className={styles.text}>Last name</section>
      <Select defaultValue="Please select" style={{ width: 120 }} onChange={handleLastNameChange}>
        <Option value={'All'}>All</Option>
        {lastNameOptions}
      </Select>
      <Button icon={<SearchOutlined />} onClick={handleSearch}>Search</Button>
    </div>
  );
}
