import { Table } from 'antd'
import { getAllEmployees } from '../../data/api';
import styles from './EmployeeTable.module.scss'
import * as React from 'react';

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
];

export function EmployeeTable() {
  const [employee, setEmployee] = React.useState([])

  React.useEffect(() => {
    getAllEmployees().then((employees) => {
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
      setEmployee(dataSource)
    });
  }, []);

  return (
    <div className={styles.container}>
      <Table dataSource={employee} columns={columns} />
    </div>
  );
}