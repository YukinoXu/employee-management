import * as React from 'react';
import { EmployeeTable } from '../EmployeeTable/EmployeeTable';
import { EmployeeSelect } from '../EmployeeSelect/EmployeeSelect';
import { Header } from '../Header/Header';
import styles from './Home.module.scss';

export function Home() {
  return (
    <div>
      <Header />
      <div className={styles.option}>
        <EmployeeSelect />
      </div>
      <EmployeeTable />
    </div>
  );
}