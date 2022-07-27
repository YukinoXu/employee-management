import { Select } from 'antd';
import styles from './EmployeeSelect.module.scss';
import * as React from 'react'
const { Option } = Select;

export function EmployeeSelect() {
  function handleChange(value) {
    console.log(value);
  }

  return (
    <div className={styles.container}>
      <Select defaultValue="Finance" style={{ width: 120 }} onChange={handleChange}>
        <Option value="finance">Finance</Option>
        <Option value="technology">Technology</Option>
        <Option value="human" disabled>
          Human Resource
        </Option>
      </Select>
    </div>
  );
}
