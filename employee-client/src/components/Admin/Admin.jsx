import * as React from 'react';
import { EmployeeTable } from '../EmployeeTable/EmployeeTable';
import { EmployeeSelect } from '../EmployeeSelect/EmployeeSelect';
import { Header } from '../Header/Header';
import styles from './Admin.module.scss';
import { Button } from 'antd';
import { useNavigate } from 'react-router-dom';

export function Admin() {
  const navigate = useNavigate();
  return (
    <div>
      <Header />
      <div className={styles.option}>
        <EmployeeSelect />
      </div>
      <div className={styles.btnContainer}>
        <Button className={styles.button} type='primary' onClick={() => navigate('/addinfo')}>Add User</Button>
      </div>
      <EmployeeTable login={true}/>
    </div>
  );
}