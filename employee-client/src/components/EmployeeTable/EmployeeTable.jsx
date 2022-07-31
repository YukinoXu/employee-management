import { Table, Space, Button } from 'antd'
import { deleteEmployeeById } from '../../data/api';
import styles from './EmployeeTable.module.scss'
import * as React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setEmployee } from '../../reducer/employeeSlice';
import { setFilteredEmployee } from '../../reducer/filteredEmployeeSlice';

export function EmployeeTable(props) {
  const employee = useSelector((state) => state.employee.value);
  const filteredEmployee = useSelector((state) => state.filteredEmployee.value);
  const dispatch = useDispatch()

  const handleItemDelete = async (id) => {
    try {
      await deleteEmployeeById(id);
    } catch (error) {
      console.log(error);
      return;
    }

    const newEmployee = employee.filter(item => item.key !== id);
    const newFilteredEmployee = filteredEmployee.filter(item => item.key !== id);
    dispatch(setEmployee(newEmployee));
    dispatch(setFilteredEmployee(newFilteredEmployee));
  }

  const columns = [
    {
      title: 'First Name',
      dataIndex: 'first_name',
      key: 'first_name',
    },
    {
      title: 'Last Name',
      dataIndex: 'last_name',
      key: 'last_name',
    },
    {
      title: 'Email',
      dataIndex: 'email',
      key: 'email',
    },
    {
      title: 'Department',
      dataIndex: 'department',
      key: 'department',
    },
    {
      title: 'Hobby',
      dataIndex: 'hobby',
      key: 'hobby',
    },
    ...(props.login ? [{
      title: 'Action',
      key: 'action',
      render: (_, record) => {
        return (
          <Space size="middle">
            <Button type="primary" onClick={() => handleItemDelete(record.key)}>Delete</Button>
          </Space>
        );
      }
    }] : [])
  ];

  return (
    <div className={styles.container}>
      <Table dataSource={filteredEmployee} columns={columns} />
    </div>
  );
}